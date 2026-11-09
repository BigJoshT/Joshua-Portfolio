export type Category = "Business Website" | "Funnel" | "Online Store" | "Redesign";

export type Project = {
  slug: string;
  title: string;
  /** One line. What it is, who it's for. */
  summary: string;
  category: Category;
  /** Platform it was built on (GoHighLevel, WordPress, Squarespace…). Shown as a chip. */
  platform?: string;
  year: number;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  /** Two hex stops used for the placeholder cover when there's no image. */
  cover: [string, string];
  /** Cover image in public/projects/: 1200×750 (16:10) WebP or JPG. */
  image?: string;
  /** Set true for the three shown on the home page. */
  featured?: boolean;
  /** Live site: shows a "Visit live site" button on the case study when set. */
  liveUrl?: string;
};

/* ------------------------------------------------------------------
   ⚠️ SAMPLE PROJECTS: replace every one with your real work.

   The home showcase, /portfolio grid, filters, search and the
   case-study pages all read from this one array.

   For each real project:
     1. Take a screenshot of the live site (1200×750 works best),
        save it as public/projects/<slug>.webp (or .jpg).
     2. Copy one block below, change the slug, text and platform,
        set `image: "/projects/<slug>.webp"` and `liveUrl`.
     3. Set `featured: true` on your best three for the home page.
   Delete the samples once you have three or more of your own.
------------------------------------------------------------------ */
export const projects: Project[] = [
  {
    slug: "sample-coaching-funnel",
    title: "Sample: Coaching Funnel",
    summary:
      "A GoHighLevel funnel for a business coach: opt-in page, booking calendar and automated email and SMS follow-up.",
    category: "Funnel",
    platform: "GoHighLevel",
    year: 2026,
    tags: ["GoHighLevel", "Funnel", "Calendar booking", "Email & SMS automation", "CRM pipeline"],
    challenge:
      "The coach was getting leads from Instagram ads but losing most of them. People filled in a form and then heard nothing for days, so very few booked a call.",
    solution:
      "Built a three-step funnel in GoHighLevel: a landing page with a free guide, a thank-you page with a booking calendar, and an automated follow-up sequence by email and text. Every lead lands in a CRM pipeline so nothing is missed.",
    results: [
      "Every lead followed up within minutes, automatically",
      "Booking calendar on the thank-you page",
      "One pipeline showing every lead from ad to booked call",
    ],
    cover: ["#080808", "#080808"],
    featured: true,
  },
  {
    slug: "sample-restaurant-wordpress",
    title: "Sample: Restaurant Website",
    summary:
      "A WordPress site for a family restaurant with menus, online reservations and a photo gallery.",
    category: "Business Website",
    platform: "WordPress",
    year: 2026,
    tags: ["WordPress", "Reservations", "Menu pages", "Google Maps", "Local SEO"],
    challenge:
      "The restaurant's old site was slow, hard to read on phones, and the menu was a blurry PDF. Customers kept calling just to ask about opening hours.",
    solution:
      "Designed and built a fast WordPress site with easy-to-edit menu pages, online table reservations, opening hours on every page, and a gallery of the food and space. Set up local SEO so the restaurant shows up in nearby searches.",
    results: [
      "Menus the owner updates in minutes",
      "Reservations online, not just by phone",
      "Fast on mobile, where most diners look",
    ],
    cover: ["#080808", "#080808"],
    featured: true,
  },
  {
    slug: "sample-photographer-squarespace",
    title: "Sample: Photographer Portfolio",
    summary:
      "A Squarespace portfolio for a wedding photographer, with galleries, packages and an enquiry form.",
    category: "Business Website",
    platform: "Squarespace",
    year: 2026,
    tags: ["Squarespace", "Portfolio galleries", "Pricing packages", "Enquiry form"],
    challenge:
      "Beautiful photos, but a cluttered site that hid them. Couples couldn't find prices or a simple way to check availability.",
    solution:
      "A clean Squarespace site that puts the photography first: full-width galleries, a clear packages page and a short enquiry form that asks for the wedding date up front.",
    results: [
      "Galleries that load fast and look sharp",
      "Packages and prices easy to find",
      "Enquiries arrive with the date and budget included",
    ],
    cover: ["#1f1f1f", "#6b6b6b"],
    featured: true,
  },
  {
    slug: "sample-salon-wix",
    title: "Sample: Salon Booking Site",
    summary:
      "A Wix site for a hair salon with online booking, services, prices and a team page.",
    category: "Business Website",
    platform: "Wix",
    year: 2026,
    tags: ["Wix", "Wix Bookings", "Services & prices", "Team page"],
    challenge:
      "The salon took every booking by phone and Instagram DMs, which meant missed messages and double-booked chairs.",
    solution:
      "Built a Wix site with Wix Bookings connected to each stylist's schedule, so clients pick a service, a stylist and a time themselves. Added clear prices, a team page and reminders by email.",
    results: [
      "Clients book themselves, any time of day",
      "No more double bookings",
      "Automatic reminders cut no-shows",
    ],
    cover: ["#080808", "#080808"],
  },
  {
    slug: "sample-shop-hostinger",
    title: "Sample: Small Online Shop",
    summary:
      "A small online store on WordPress and WooCommerce, hosted on Hostinger with domain and email set up.",
    category: "Online Store",
    platform: "Hostinger",
    year: 2026,
    tags: ["Hostinger", "WordPress", "WooCommerce", "Stripe", "Business email"],
    challenge:
      "A handmade candle maker was selling through Instagram only and wanted a proper shop on their own domain, with payments and professional email.",
    solution:
      "Set up Hostinger hosting, the domain and business email, then built a WooCommerce shop with Stripe payments, shipping rates and simple product pages the owner can manage.",
    results: [
      "Own domain and professional email",
      "Card payments through Stripe",
      "Owner adds new products without help",
    ],
    cover: ["#673de6", "#2a1766"],
  },
  {
    slug: "sample-redesign-migration",
    title: "Sample: Wix to WordPress Redesign",
    summary:
      "An outdated Wix site redesigned and moved to WordPress without losing pages or Google rankings.",
    category: "Redesign",
    platform: "WordPress",
    year: 2026,
    tags: ["Redesign", "Migration", "Wix → WordPress", "301 redirects", "SEO"],
    challenge:
      "A consulting firm had outgrown its Wix site. They needed more flexibility and a modern look, but were worried about losing traffic from Google.",
    solution:
      "Redesigned every page, rebuilt the site on WordPress, and set up redirects from every old address to its new one so search rankings carried over. Then moved the domain across with no downtime.",
    results: [
      "Every old page redirected, nothing broken",
      "A modern design that matches the brand",
      "Switched over with no downtime",
    ],
    cover: ["#32CD32", "#32CD32"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

export const categories: Category[] = ["Business Website", "Funnel", "Online Store", "Redesign"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
