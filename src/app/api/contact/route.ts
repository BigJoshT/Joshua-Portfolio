import { projectTypes } from "@/lib/contact";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const MAX_REQUEST_SIZE = 12_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimit = new Map<string, { count: number; resetAt: number }>();

type ContactSubmission = {
  name: string;
  email: string;
  type: string;
  message: string;
  botcheck?: unknown;
};

function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function cleanText(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.trim();
  if (!cleaned || cleaned.length > maxLength) return null;
  return cleaned;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  for (const [storedKey, entry] of rateLimit) {
    if (entry.resetAt <= now) rateLimit.delete(storedKey);
  }

  const entry = rateLimit.get(key);
  if (entry && entry.resetAt > now) {
    if (entry.count >= RATE_LIMIT_MAX_REQUESTS) return true;
    entry.count += 1;
    return false;
  }

  if (rateLimit.size >= 1000) {
    const oldestKey = rateLimit.keys().next().value;
    if (oldestKey) rateLimit.delete(oldestKey);
  }
  rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  return false;
}

function makeEmail(submission: Omit<ContactSubmission, "botcheck">, submittedAt: string) {
  const safeName = escapeHtml(submission.name);
  const safeEmail = escapeHtml(submission.email);
  const safeType = escapeHtml(submission.type);
  const safeMessage = escapeHtml(submission.message).replace(/\r?\n/g, "<br>");
  const text = [
    "New Website Project Enquiry",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Service requested: ${submission.type}`,
    `Submitted: ${submittedAt}`,
    "",
    "Project description:",
    submission.message,
  ].join("\n");

  return {
    text,
    html: `<h1>New Website Project Enquiry</h1>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Service requested:</strong> ${safeType}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
      <h2>Project description</h2>
      <p>${safeMessage}</p>`,
  };
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_REQUEST_SIZE) {
    return jsonError("The submitted message is too large.", 413);
  }

  let requestBody: string;
  try {
    requestBody = await request.text();
  } catch {
    return jsonError("Please submit the form again.", 400);
  }
  if (new TextEncoder().encode(requestBody).byteLength > MAX_REQUEST_SIZE) {
    return jsonError("The submitted message is too large.", 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(requestBody) as unknown;
  } catch {
    return jsonError("Please submit the form again.", 400);
  }

  if (!isRecord(payload)) {
    return jsonError("Please check the form and try again.", 400);
  }

  const submission: ContactSubmission = {
    name: typeof payload.name === "string" ? payload.name : "",
    email: typeof payload.email === "string" ? payload.email : "",
    type: typeof payload.type === "string" ? payload.type : "",
    message: typeof payload.message === "string" ? payload.message : "",
    botcheck: payload.botcheck,
  };

  if (submission.botcheck) {
    return jsonError("Please check the form and try again.", 400);
  }

  const name = cleanText(submission.name, 100);
  const email = cleanText(submission.email, 254);
  const type = cleanText(submission.type, 100);
  const message = cleanText(submission.message, 5000);

  if (
    !name ||
    !email ||
    !type ||
    !message ||
    !isValidEmail(email) ||
    !projectTypes.some((projectType) => projectType === type)
  ) {
    return jsonError("Please check your details and try again.", 400);
  }

  if (isRateLimited(getClientKey(request))) {
    return jsonError("Too many submissions. Please try again in a few minutes.", 429);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FROM_EMAIL;
  const to = process.env.CONTACT_EMAIL || site.email;
  if (!apiKey || !from) {
    console.error("Contact email delivery is not configured: RESEND_API_KEY or FROM_EMAIL is missing.");
    return jsonError(
      "The contact form is temporarily unavailable. Please email me directly instead.",
      503,
    );
  }

  const submittedAt = new Date().toISOString();
  const emailContent = makeEmail({ name, email, type, message }, submittedAt);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: "New Website Project Enquiry",
        ...emailContent,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("Resend rejected a contact enquiry.", {
        status: response.status,
      });
      return jsonError(
        "I couldn't send your message just now. Your details are still here; please try again.",
        502,
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend request failed while sending a contact enquiry.", error);
    return jsonError(
      "I couldn't send your message just now. Your details are still here; please try again.",
      502,
    );
  }
}
