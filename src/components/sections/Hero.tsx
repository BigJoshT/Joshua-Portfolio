"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { WorkspaceCanvas } from "@/components/three/WorkspaceCanvas";
import { site } from "@/lib/site";

const PLATFORMS = ["GoHighLevel", "WordPress", "Shopify", "Squarespace", "Wix", "Hostinger"];

export function Hero() {
  const reduced = useReducedMotion();
  const [platformIndex, setPlatformIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => {
      setPlatformIndex((index) => (index + 1) % PLATFORMS.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [reduced]);

  const rise = (delay: number) => ({
    initial: reduced ? {} : { opacity: 0, y: 20 },
    animate: reduced ? {} : { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  // min-h (not a fixed h): on short viewports the section grows instead of
  // centring-overflow pushing the top under the fixed navbar. The grid's
  // Mobile padding clears the fixed navbar; larger screens keep their wider layout spacing.
  return (
    <section className="navy-panel relative flex min-h-[100svh] items-center overflow-hidden py-8 lg:py-0">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-6 px-4 pt-28 pb-8 sm:px-6 sm:pt-32 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-24 lg:pb-10">
        {/* ---------------- copy ---------------- */}
        <div className="flex min-w-0 min-h-[min(36rem,calc(100svh-10rem))] flex-col items-center justify-between text-center sm:min-h-0 sm:block sm:text-left">
          <motion.h1
            {...rise(0)}
            className="hero-mobile-heading hero-mobile-inset mx-auto max-w-[22ch] text-white text-balance text-[clamp(1.875rem,9.2vw,2.25rem)] font-bold leading-[1] tracking-[-0.03em] sm:mx-0 sm:text-[clamp(2.25rem,3.8vw,3.25rem)] sm:leading-[1.04]"
          >
            I design and redesign websites that{" "}
            <span className="text-accent">make your business stand out</span>.
          </motion.h1>

          <motion.p
            {...rise(0.08)}
            className="hero-mobile-description hero-mobile-inset mx-auto mt-5 max-w-lg text-[clamp(0.9375rem,4vw,1rem)] leading-relaxed text-on-navy/80 sm:mx-0 sm:mt-3 sm:text-[clamp(1rem,1.4vw,1.125rem)]"
          >
            I create modern, visually appealing and easy to use websites that
            showcase your brand, connect with your audience, and help your
            business grow.
          </motion.p>

          <motion.div {...rise(0.16)} className="mt-5 flex flex-wrap justify-center gap-1 sm:mt-4 sm:justify-start sm:gap-3">
            <Button href="/portfolio" className="hero-mobile-cta">
              See my work
            </Button>
            <Button href="/#contact" variant="onNavy" className="hero-mobile-cta">
              Start a project
            </Button>
          </motion.div>

          <motion.div
            {...rise(0.24)}
            className="mt-0 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-3 border-t border-line-navy pt-4 text-center sm:mt-5 sm:justify-start sm:gap-x-8 sm:text-left"
          >
            {[
              {
                value: site.stats[0].value,
                suffix: site.stats[0].suffix,
                label: site.stats[0].label,
              },
              { value: site.stats[2].value, suffix: "+", label: "Platforms" },
              {
                value: site.stats[3].value,
                suffix: site.stats[3].suffix,
                label: "Mobile-ready",
              },
            ].map(({ value, suffix, label }) => (
              <div key={label}>
                <p className="font-display text-xl font-bold text-white">
                  <Counter to={value} suffix={suffix} />
                </p>
                <p className="mt-0.5 text-[13px] text-on-navy/60 sm:text-sm">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---------------- status, platform text and 3D workspace ---------------- */}
        <div className="relative isolate flex min-w-0 flex-col items-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(36rem,110vw)] w-[min(36rem,110vw)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px]"
            style={{ background: "rgba(50,205,50,0.18)" }}
          />
          <motion.div
            {...rise(0)}
            className="relative z-10 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-4 py-1.5"
          >
            <span
              className="h-2 w-2 rounded-full bg-accent"
              style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
            />
            <span className="text-sm font-medium text-on-navy">
              {site.available
                ? "Available for new projects"
                : "Booked. Join the waitlist"}
            </span>
          </motion.div>

          <motion.div
            {...rise(0.08)}
            className="relative z-10 mt-3 flex min-h-7 items-center justify-center gap-2 text-sm font-medium text-on-navy/70"
            aria-label={`Platforms: ${PLATFORMS.join(", ")}`}
          >
            <span aria-hidden="true">Built with</span>
            <span className="relative inline-flex min-w-32 items-center text-base font-semibold text-accent">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={PLATFORMS[platformIndex]}
                  aria-hidden="true"
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduced ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {PLATFORMS[platformIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.div
            initial={reduced ? {} : { opacity: 0, scale: 0.93 }}
            animate={reduced ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex w-full min-w-0 items-center justify-center"
          >
            <WorkspaceCanvas />
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center lg:flex">
        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          animate={reduced ? {} : { opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center gap-1.5 text-on-navy/40"
        >
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em]">
            Scroll
          </span>
          <span className="h-8 w-px bg-gradient-to-b from-on-navy/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
