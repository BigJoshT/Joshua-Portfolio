export type Service = {
  title: string;
  body: string;
  outcome: string;
  tier: "build" | "support";
};

export const services: Service[] = [
  /* ---- new websites ---- */
  {
    title: "GoHighLevel Funnels & Sites",
    body: "Landing pages, sales funnels and full websites built in GoHighLevel, with forms, calendars, pipelines and follow-up automations connected.",
    outcome: "Leads captured, booked and followed up automatically",
    tier: "build",
  },
  {
    title: "WordPress Websites",
    body: "Custom WordPress sites for businesses, blogs and online stores (WooCommerce), fast, secure and easy to manage.",
    outcome: "A site that can grow with your business",
    tier: "build",
  },
  {
    title: "Shopify Stores",
    body: "Shopify storefronts with products, collections and checkout configured to make it easy for customers to buy.",
    outcome: "A streamlined store, ready to sell",
    tier: "build",
  },
  {
    title: "Squarespace Websites",
    body: "Clean, elegant Squarespace sites for brands, creatives and service businesses, designed to match your style.",
    outcome: "A polished site you can update in minutes",
    tier: "build",
  },
  {
    title: "Wix Websites",
    body: "Wix sites with bookings, forms, galleries and stores built in, set up so you can manage everything yourself.",
    outcome: "A professional site, live fast",
    tier: "build",
  },
  {
    title: "Hostinger Websites",
    body: "Sites on the Hostinger Website Builder or WordPress on Hostinger hosting, with domain, SSL and email set up in one go.",
    outcome: "Website, hosting and email in one place",
    tier: "build",
  },
  {
    title: "Landing Pages",
    body: "Single pages built for one job: an ad campaign, a product launch, an event or a lead magnet, on any of the six platforms.",
    outcome: "More of your visitors take action",
    tier: "build",
  },

  /* ---- and for sites that already exist ---- */
  {
    title: "Website Redesign",
    body: "A fresh, modern look for an outdated site, keeping your content and rankings while improving layout, speed and mobile experience.",
    outcome: "The same business, a much better first impression",
    tier: "support",
  },
  {
    title: "Platform Migration",
    body: "Moving your site between Shopify, Wix, Squarespace, WordPress, Hostinger or GoHighLevel, page for page, without losing content or SEO.",
    outcome: "A better platform, and nothing lost in the move",
    tier: "support",
  },
  {
    title: "Domains, Hosting & Email",
    body: "Buying or transferring a domain, connecting it to your site, SSL, and getting professional email working, across Hostinger, GoDaddy, Namecheap and Cloudflare.",
    outcome: "Your site on your own domain, with email that works",
    tier: "support",
  },
  {
    title: "Speed & SEO Basics",
    body: "Compressing images, cleaning up plugins, page titles, descriptions, Google Search Console and Analytics, set up properly.",
    outcome: "A faster site that Google can find",
    tier: "support",
  },
  {
    title: "Fixes & Updates",
    body: "Broken layouts, forms that don't send, pages that look wrong on mobile. Found and fixed quickly.",
    outcome: "Everything working again",
    tier: "support",
  },
  {
    title: "Monthly Care Plans",
    body: "Ongoing updates, backups, new pages and small changes each month, so your site stays fresh without you thinking about it.",
    outcome: "A web designer on call",
    tier: "support",
  },
];
