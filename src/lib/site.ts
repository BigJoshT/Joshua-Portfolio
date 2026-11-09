/**
 * Public URL of the deployed site, used for metadata, sitemap.xml and
 * robots.txt. Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL: set it once you have a custom domain
 *   2. VERCEL_PROJECT_PRODUCTION_URL: Vercel injects this automatically,
 *      so a fresh Vercel deploy is correct with no config at all
 *   3. localhost: for `npm run dev` / local builds
 * Empty strings count as unset (an empty env var on Vercel must not break
 * the build), and a trailing slash is stripped.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

/**
 * ONE place for who you are. Everything else (nav, footer, metadata,
 * contact section, SEO, sitemap) reads from here.
 *
 * Any link left as "" is simply not rendered, so you can fill them in
 * whenever you're ready without touching a component.
 */
export const site = {
  // TODO(Josh): add your surname if you want it shown, e.g. "Joshua Smith".
  name: "Joshua",
  /** Short form used in the logo and anywhere space is tight. */
  shortName: "Josh",
  role: "Web Designer · Shopify, GoHighLevel, WordPress & more",
  tagline: "Websites that look sharp and turn visitors into clients.",
  /** See resolveSiteUrl() above. */
  url: resolveSiteUrl(),
  email: "ojojoshua330@gmail.com",
  available: true,

  /**
   * Freelance profiles shown as "Hire me on" buttons in the contact section,
   * footer and mobile menu. Empty href = hidden. Add Upwork, Fiverr etc.
   */
  hire: [
    { label: "Upwork", href: "" },
    { label: "Fiverr", href: "" },
  ],

  /** Shown in the footer and contact section. Empty href = hidden. */
  socials: [
    { label: "Email", href: "mailto:ojojoshua330@gmail.com" },
    { label: "LinkedIn", href: "" },
    { label: "Instagram", href: "" },
    { label: "X", href: "" },
  ],

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/#contact" },
  ],

  /** Numbers shown in the hero and About. TODO(Josh): set your real numbers. */
  stats: [
    { value: 40, suffix: "+", label: "Websites launched" },
    { value: 3, suffix: " yrs", label: "Designing for the web" },
    { value: 6, suffix: "", label: "Platforms mastered" },
    { value: 100, suffix: "%", label: "Mobile-ready builds" },
  ],
} as const;

/** Only the socials that actually have a link. */
export const activeSocials = site.socials.filter((s) => s.href !== "");

/** Only the hire profiles that actually have a link. */
export const activeHire = site.hire.filter((h) => h.href !== "");
