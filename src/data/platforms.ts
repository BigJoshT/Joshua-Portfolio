export type Platform = {
  id: "gohighlevel" | "wordpress" | "shopify" | "squarespace" | "wix" | "hostinger";
  name: string;
  logo: string;
  /** What I build with it. */
  blurb: string;
  /** The role it plays. */
  role: string;
};

/**
 * The six platforms shown in the 3D orbit and the list beside it.
 * Logos live in public/logos/ (see the README there to replace one).
 */
export const platforms: Platform[] = [
  {
    id: "gohighlevel",
    name: "GoHighLevel",
    logo: "/logos/gohighlevel.webp",
    role: "Funnels & CRM",
    blurb: "CRM, Conversion focused websites, landing pages and business funnels.",
  },
  {
    id: "wordpress",
    name: "WordPress",
    logo: "/logos/wordpress.webp",
    role: "Most flexible",
    blurb: "Flexible websites tailored to your brand, content and business needs.",
  },
  {
    id: "shopify",
    name: "Shopify",
    logo: "/logos/shopify.webp",
    role: "Online stores",
    blurb: "Professional online stores designed to showcase and sell your products.",
  },
  {
    id: "squarespace",
    name: "Squarespace",
    logo: "/logos/squarespace.webp",
    role: "Polished & simple",
    blurb: "Elegant, modern websites for brands, creatives and service businesses.",
  },
  {
    id: "wix",
    name: "Wix",
    logo: "/logos/wix.webp",
    role: "Fast to launch",
    blurb: "Beautiful, easy-to-manage websites with flexible design possibilities.",
  },
  {
    id: "hostinger",
    name: "Hostinger",
    logo: "/logos/hostinger.webp",
    role: "Hosting & builder",
    blurb: "Clean, affordable websites built for businesses and growing brands.",
  },
];
