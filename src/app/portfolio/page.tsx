import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Shopify stores, websites, funnels and landing pages built on GoHighLevel, WordPress, Squarespace, Wix and Hostinger.",
};

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 md:pt-40">
      <Reveal>
        <p className="eyebrow">Portfolio</p>
      </Reveal>

      <Reveal delay={0.06}>
        <h1 className="mt-4 max-w-3xl text-hero text-balance">
          Websites I&apos;ve designed and built.
        </h1>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-6 max-w-xl text-lead text-body">
          Filter by type, or search for the platform you&apos;re interested in.
          Each project shows the problem, what I built, and what changed.
        </p>
      </Reveal>


      <div className="mt-14">
        <PortfolioGrid />
      </div>
    </section>
  );
}
