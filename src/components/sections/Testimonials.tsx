"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, type Testimonial } from "@/data/testimonials";

type SlideCustom = { direction: number; reduced: boolean };

const slideVariants: Variants = {
  enter: ({ direction, reduced }: SlideCustom) => ({
    x: reduced ? 0 : direction > 0 ? 56 : -56,
    y: reduced ? 0 : 12,
    opacity: reduced ? 1 : 0,
    scale: reduced ? 1 : 0.975,
    rotate: reduced ? 0 : direction > 0 ? 1.2 : -1.2,
  }),
  center: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
  },
  exit: ({ direction, reduced }: SlideCustom) => ({
    x: reduced ? 0 : direction > 0 ? -40 : 40,
    y: reduced ? 0 : -6,
    opacity: reduced ? 1 : 0,
    scale: reduced ? 1 : 0.99,
    rotate: reduced ? 0 : direction > 0 ? -0.8 : 0.8,
    transition: reduced
      ? { duration: 0 }
      : {
          x: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.22, ease: "easeOut" },
          scale: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
          rotate: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
        },
  }),
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={index < rating ? "text-accent" : "text-line"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ProfilePlaceholder() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className="h-8 w-8 text-accent/70"
      fill="none"
    >
      <circle cx="24" cy="17" r="8" fill="currentColor" opacity=".55" />
      <path
        d="M9 42c1.5-9 7-14 15-14s13.5 5 15 14"
        fill="currentColor"
        opacity=".55"
      />
    </svg>
  );
}

export function Testimonials() {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [direction, setDirection] = useState(1);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const updateItemsPerPage = () => setItemsPerPage(media.matches ? 2 : 1);
    updateItemsPerPage();
    media.addEventListener("change", updateItemsPerPage);
    return () => media.removeEventListener("change", updateItemsPerPage);
  }, []);

  useEffect(() => {
    if (!selectedTestimonial) return;

    const handleDialogKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setSelectedTestimonial(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleDialogKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleDialogKeyDown);
    };
  }, [selectedTestimonial]);

  if (testimonials.length === 0) return null;

  const changePage = (step: -1 | 1) => {
    setDirection(step);
    setActiveIndex((current) => {
      if (step > 0) {
        const next = current + itemsPerPage;
        return next >= testimonials.length ? 0 : next;
      }

      return current === 0
        ? Math.floor((testimonials.length - 1) / itemsPerPage) * itemsPerPage
        : Math.max(0, current - itemsPerPage);
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      changePage(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      changePage(-1);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    swipeStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
      return;
    }

    changePage(deltaX < 0 ? 1 : -1);
  };

  const visibleTestimonials = Array.from({ length: itemsPerPage }, (_, offset) =>
    testimonials[(activeIndex + offset) % testimonials.length],
  );
  const slideCustom = {
    direction,
    reduced: Boolean(reducedMotion),
  };

  return (
    <section
      id="testimonials"
      className="testimonials-section relative isolate overflow-hidden py-20 md:py-28"
    >
      <svg
        aria-hidden="true"
        className="testimonials-decoration pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 620"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          d="M-50 520C120 500 140 390 260 410S390 590 510 530 550 400 690 390 790 500 890 470 980 330 1080 350 1200 480 1300 420 1400 300 1500 260"
          stroke="currentColor"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
        <path
          d="M1120-30c-10 110 110 100 170 150s60 150-10 210"
          stroke="currentColor"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
        <circle cx="92" cy="450" r="36" />
        <circle cx="1344" cy="116" r="12" />
        <circle cx="1382" cy="78" r="5" />
        <circle cx="1397" cy="460" r="13" />
        <circle cx="1328" cy="500" r="7" />
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="TESTIMONIAL"
          title="See what people are saying."
          align="center"
        />

        <div
          className="testimonials-carousel mt-12 pt-12 sm:mt-14"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            swipeStart.current = null;
          }}
        >
          <div className="relative h-[16rem]">
            <AnimatePresence initial={false} mode="wait" custom={slideCustom}>
              <motion.ul
                key={`${activeIndex}-${itemsPerPage}`}
                custom={slideCustom}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 115, damping: 21, mass: 0.85 },
                  y: { type: "spring", stiffness: 115, damping: 21, mass: 0.85 },
                  scale: { type: "spring", stiffness: 115, damping: 21, mass: 0.85 },
                  rotate: { type: "spring", stiffness: 115, damping: 21, mass: 0.85 },
                  opacity: { duration: reducedMotion ? 0 : 0.3, ease: "easeOut" },
                }}
                aria-label={`Testimonials ${String(activeIndex + 1).padStart(2, "0")} of ${String(testimonials.length).padStart(2, "0")}`}
                className="absolute inset-0 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12"
              >
                {visibleTestimonials.map((testimonial) => (
                  <li key={testimonial.id} className="min-w-0">
                    <figure
                      className="testimonial-card group relative flex h-full min-h-0 cursor-pointer flex-col px-7 pb-5 pt-10 shadow-[0_20px_50px_-28px_rgba(8,8,8,0.24)] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:px-9 sm:pb-5"
                      role="button"
                      tabIndex={0}
                      aria-label={`Read the full testimonial from ${testimonial.name}`}
                      onClick={() => setSelectedTestimonial(testimonial)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setSelectedTestimonial(testimonial);
                        }
                      }}
                    >
                      <div className="testimonial-avatar absolute left-[7%] top-0 flex h-[5.25rem] w-[5.25rem] -translate-y-[42%] items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white p-1 shadow-[0_5px_18px_-8px_rgba(8,8,8,0.28)] ring-1 ring-accent">
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={`${testimonial.name} profile`}
                            fill
                            sizes="72px"
                            className={`object-cover ${testimonial.id === "glz-digital-marketing-founder" || testimonial.id === "yucca-packaging" ? "object-[center_10%]" : testimonial.id === "core-atelier-founder" ? "object-[center_12%]" : "object-center"}`}
                          />
                        ) : (
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-[#f1f3eb]">
                            <ProfilePlaceholder />
                          </span>
                        )}
                      </div>

                      <div className="flex min-h-[3.6rem] items-center justify-between gap-3 pl-[5.2rem]">
                        <figcaption className="min-w-0">
                          <p className="truncate font-display text-base font-bold text-ink sm:text-lg">
                            {testimonial.name}
                          </p>
                          <p className="mt-0.5 truncate text-xs text-muted sm:text-sm">
                            {testimonial.role}
                          </p>
                        </figcaption>

                        {testimonial.rating !== undefined && (
                          <div className="shrink-0">
                            <Stars rating={testimonial.rating} />
                          </div>
                        )}
                      </div>

                      {testimonial.source && (
                        <p className="mt-2 pl-[5.2rem] text-xs text-muted">
                          Review via {testimonial.source}
                        </p>
                      )}

                      <blockquote className="mt-3 line-clamp-3 max-w-[38rem] text-left text-sm leading-[1.55] text-body sm:text-base">
                        {testimonial.excerpt ?? testimonial.quote}
                      </blockquote>

                      <div className="mt-auto flex items-end justify-between pt-5">
                        {testimonial.placeholder && (
                          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted">
                            Editable placeholder
                          </span>
                        )}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none ml-auto h-8 font-display text-[4rem] font-bold leading-[0.8] text-accent/80 transition-transform duration-300 group-hover:translate-y-1"
                        >
                          ”
                        </span>
                      </div>
                    </figure>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => changePage(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white/70 text-xl text-ink transition-colors button-motion hover:border-accent hover:bg-accent hover:text-white"
              aria-label="Previous testimonials"
            >
              ←
            </button>
            <div
              className="h-1.5 w-16 overflow-hidden rounded-full bg-accent/20"
              role="progressbar"
              aria-label="Testimonial carousel progress"
              aria-valuemin={1}
              aria-valuemax={Math.ceil(testimonials.length / itemsPerPage)}
              aria-valuenow={Math.floor(activeIndex / itemsPerPage) + 1}
              aria-valuetext={`Page ${Math.floor(activeIndex / itemsPerPage) + 1} of ${Math.ceil(testimonials.length / itemsPerPage)}`}
            >
              <motion.span
                className="block h-full rounded-full bg-accent"
                animate={{
                  width: `${((Math.floor(activeIndex / itemsPerPage) + 1) / Math.ceil(testimonials.length / itemsPerPage)) * 100}%`,
                }}
                transition={{
                  duration: reducedMotion ? 0 : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
            <button
              type="button"
              onClick={() => changePage(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white/70 text-xl text-ink transition-colors button-motion hover:border-accent hover:bg-accent hover:text-white"
              aria-label="Next testimonials"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4"
          onClick={() => setSelectedTestimonial(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="testimonial-dialog-title"
            className="relative w-full max-w-2xl rounded-3xl bg-white p-7 text-ink shadow-2xl sm:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedTestimonial(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-2xl text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
              aria-label="Close testimonial"
            >
              ×
            </button>
            <p className="pr-12 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Client testimonial
            </p>
            <h3 id="testimonial-dialog-title" className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              {selectedTestimonial.name}
            </h3>
            <p className="mt-1 text-sm text-muted">{selectedTestimonial.role}</p>
            <blockquote className="mt-7 max-h-[60vh] overflow-y-auto text-base leading-8 text-body sm:text-lg">
              {selectedTestimonial.quote}
            </blockquote>
          </section>
        </div>
      )}
    </section>
  );
}
