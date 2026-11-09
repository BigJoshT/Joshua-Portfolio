/**
 * TOOLS I CONNECT: the logo strip under the platform orbit.
 *
 * Marks come from Simple Icons (CC0). Each SVG in public/tech/ has had its
 * brand fill swapped for `currentColor`, so the strip renders monochrome
 * and each mark picks up its selected hover colour.
 *
 * TO ADD ONE:
 *   curl -o public/tech/<slug>.svg https://cdn.simpleicons.org/<slug>
 *   then replace fill="#XXXXXX" with fill="currentColor" on the <svg> tag
 *   and add an entry below with the hover colour.
 *
 * Third-party trademarks, used descriptively to say what I build with.
 * Not an endorsement, and no brand is restyled.
 */
export type Tech = {
  name: string;
  /** Slug used in public/tech/ unless a shared logo asset is specified. */
  slug: string;
  /** Optional shared image asset for logos that aren't monochrome SVGs. */
  logo?: string;
  /** Hover colour, aligned with the site's monochrome palette where needed. */
  color: string;
  /** Which row of the strip. */
  row: 1 | 2;
};

export const tech: Tech[] = [
  // ---- row 1: where sites are built and hosted ----
  { name: "WordPress", slug: "wordpress", color: "#080808", row: 1 },
  { name: "Shopify", slug: "shopify", logo: "/logos/shopify.webp", color: "#95BF47", row: 1 },
  { name: "Squarespace", slug: "squarespace", color: "#000000", row: 1 },
  { name: "Wix", slug: "wix", color: "#080808", row: 1 },
  { name: "Hostinger", slug: "hostinger", color: "#673DE6", row: 1 },
  { name: "GoDaddy", slug: "godaddy", color: "#1BDBDB", row: 1 },
  { name: "Namecheap", slug: "namecheap", color: "#DE3723", row: 1 },
  { name: "Cloudflare", slug: "cloudflare", color: "#F38020", row: 1 },

  // ---- row 2: what gets connected to them ----
  { name: "Stripe", slug: "stripe", color: "#080808", row: 2 },
  { name: "Calendly", slug: "calendly", color: "#080808", row: 2 },
  { name: "Mailchimp", slug: "mailchimp", color: "#FFE01B", row: 2 },
  { name: "Zapier", slug: "zapier", color: "#FF4F00", row: 2 },
  { name: "Google Analytics", slug: "googleanalytics", color: "#E37400", row: 2 },
  { name: "Figma", slug: "figma", color: "#F24E1E", row: 2 },
];

export const techRow1 = tech.filter((t) => t.row === 1);
export const techRow2 = tech.filter((t) => t.row === 2);
