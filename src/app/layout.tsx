import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080808",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Web designer building Shopify stores, websites, funnels and landing pages on GoHighLevel, WordPress, Squarespace, Wix and Hostinger. See the portfolio and get in touch.",
  keywords: [
    "web designer",
    "website designer",
    "GoHighLevel designer",
    "GoHighLevel funnel builder",
    "WordPress designer",
    "Shopify store designer",
    "Squarespace designer",
    "Wix designer",
    "Hostinger website",
    "landing page designer",
    "small business website",
  ],
  authors: [{ name: site.name }],
  icons: {
    icon: "/favicon-j.png",
    shortcut: "/favicon-j.png",
    apple: "/favicon-j.png",
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} | ${site.role}`,
    description: site.tagline,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-accent focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
