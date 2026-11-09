"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { activeHire, site } from "@/lib/site";

/** Sections the scrollspy watches, in page order. */
const SPY_IDS = [
  "platforms",
  "services",
  "about",
  "work",
  "testimonials",
  "contact",
];

export function Navbar() {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  const [headerVisible, setHeaderVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const previousScrollY = useRef(0);
  const directionDistance = useRef(0);
  const previousDirection = useRef(0);

  /* ---- hide on downward scroll; reveal on upward scroll ---- */
  useEffect(() => {
    previousScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = Math.max(0, window.scrollY);
      const delta = currentY - previousScrollY.current;
      previousScrollY.current = currentY;

      if (currentY <= 16) {
        directionDistance.current = 0;
        previousDirection.current = 0;
        setHeaderVisible(true);
        return;
      }

      if (open) {
        directionDistance.current = 0;
        setHeaderVisible(true);
        return;
      }

      const direction = Math.sign(delta);
      if (direction === 0) return;
      if (direction !== previousDirection.current) {
        directionDistance.current = 0;
        previousDirection.current = direction;
      }

      directionDistance.current += Math.abs(delta);
      if (directionDistance.current < 8) return;

      setHeaderVisible(direction < 0);
      directionDistance.current = 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  /* ---- scrollspy: which section am I looking at? ---- */
  useEffect(() => {
    // Off the home page there's nothing to spy on; `isActive` already
    // ignores activeId unless pathname === "/", so no reset is needed.
    if (pathname !== "/") return;

    const els = SPY_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // The section closest to the top of the viewport wins.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  /* ---- lock scroll behind the mobile sheet ---- */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/portfolio") return pathname.startsWith("/portfolio");
    if (href.startsWith("/#")) return pathname === "/" && activeId === href.slice(2);
    if (href === "/") return pathname === "/" && activeId === null;
    return false;
  };

  return (
    <>
      <motion.header
        animate={{
          y: headerVisible ? "0%" : "-120%",
          opacity: headerVisible ? 1 : 0,
          pointerEvents: headerVisible || open ? "auto" : "none",
        }}
        transition={{
          duration: reduced ? 0 : 0.32,
          ease: [0.22, 1, 0.36, 1],
        }}
        aria-hidden={!headerVisible && !open}
        inert={!headerVisible && !open}
        className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5"
      >
        <nav
          className="glass-nav mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border py-2.5 pl-6 pr-2 shadow-[0_8px_30px_-18px_rgba(8,8,8,0.25)]"
        >
          {/* ---------------- logo ---------------- */}
          <Link
            href="/"
            className="shrink-0 font-display text-lg font-bold tracking-tight text-accent"
          >
            {site.shortName}<span className="text-white">.</span>
          </Link>

          {/* ---------------- links, with the sliding pill ---------------- */}
          <ul className="hidden items-center xl:flex">
            {site.nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`relative z-10 block rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-200 ${
                      active ? "text-accent" : "text-accent/75 hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* The indicator itself. layoutId makes it GLIDE between
                      links instead of blinking on and off. */}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-surface-2"
                      transition={
                        reduced
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* ---------------- cta ---------------- */}
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/#contact"
              className="hidden rounded-full bg-accent px-5 py-2.5 text-[0.9375rem] font-semibold text-white transition-all duration-300 hover:shadow-[0_10px_24px_-10px_rgba(255,122,0,0.8)] xl:block"
            >
              Start a project
            </Link>

            <button
              type="button"
              onClick={() => {
                setHeaderVisible(true);
                setOpen((v) => !v);
              }}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-navy xl:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-0.5 w-full rounded bg-white transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-full rounded bg-white transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ---------------- mobile sheet ---------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-navy px-4 pb-10 pt-28 sm:px-6 xl:hidden"
          >
            <ul className="flex flex-col">
              {site.nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line-navy py-5 font-display text-2xl font-bold text-white"
                  >
                    <span className="text-sm font-medium text-accent">
                      0{i + 1}
                    </span>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-10"
            >
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-accent py-4 text-center text-base font-semibold text-white"
              >
                Start a project
              </Link>

{activeHire.map((h) => (
                <a
                  key={h.label}
                  href={h.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setOpen(false)}
                  className="mt-3 block rounded-xl border border-white/25 py-4 text-center text-base font-semibold text-white"
                >
                  Hire me on {h.label} ↗
                </a>
              ))}

              <a
                href={`mailto:${site.email}`}
                className="mt-6 block break-all text-center text-base text-on-navy/70"
              >
                {site.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
