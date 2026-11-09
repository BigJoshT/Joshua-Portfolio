"use client";

import { useRef, useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { projectTypes } from "@/lib/contact";
import { activeHire, activeSocials, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const elsewhere = activeSocials.filter((s) => !s.href.startsWith("mailto:"));

const inputClass =
  "w-full rounded-xl border border-line bg-canvas px-4 py-3 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none disabled:opacity-60";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const isSubmitting = useRef(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting.current) return;
    isSubmitting.current = true;
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          type: data.get("type"),
          message: data.get("message"),
          botcheck: data.get("botcheck"),
        }),
      });
      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ??
            "I couldn't send your message just now. Please try again.",
        );
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "I couldn't send your message just now. Please try again.",
      );
      setStatus("error");
    } finally {
      isSubmitting.current = false;
    }
  };

  const sending = status === "sending";

  return (
    <section id="contact" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* ---------------- pitch ---------------- */}
          <div>
            <Reveal>
              <p className="eyebrow">Contact</p>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-4 text-section text-balance">
                Let&apos;s build your website.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 text-lead text-body">
                A brand-new site, a funnel, or a refresh of the one you have.
                Tell me a little about it and I&apos;ll get back to you with
                ideas and a quote.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 space-y-6">
                {activeHire.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                      Hire me on
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activeHire.map((h) => (
                        <a
                          key={h.label}
                          href={h.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                        >
                          {h.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block break-all font-display text-lg font-bold text-ink no-underline transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                </div>

                {/* Email already has its own block above, so only show
                    the non-email profiles here (X, GitHub…) once added. */}
                {elsewhere.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                      Elsewhere
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {elsewhere.map((s) => (
                        <li key={s.label}>
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-block rounded-lg border border-line px-4 py-2 text-sm font-medium text-body transition-all hover:-translate-y-0.5 hover:border-ink/25 hover:text-ink"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </Reveal>
          </div>

          {/* ---------------- form ---------------- */}
          <Reveal delay={0.1}>
            <div className="card p-5 sm:p-8 md:p-10">
              {status === "sent" ? (
                <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-white">
                    ✓
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-xs text-base text-body">
                    I read everything myself and reply within a day. Talk soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-semibold text-accent hover:underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* honeypot — hidden from humans, irresistible to bots */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={sending}
                        maxLength={100}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={sending}
                        maxLength={254}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="type" className="mb-2 block text-sm font-semibold text-ink">
                      What do you need?
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      disabled={sending}
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Choose one
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
                      Tell me about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      disabled={sending}
                      maxLength={5000}
                      placeholder="What does your business do, and what should the website help with?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                      {error} You can also email me directly at{" "}
                      <a href={`mailto:${site.email}`} className="underline">
                        {site.email}
                      </a>
                      .
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-12px_rgba(255,122,0,0.7)] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {sending ? "Sending…" : "Send message"}
                    {!sending && (
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </button>

                  <p className="text-center text-sm text-muted">
                    I reply to everything within one working day.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
