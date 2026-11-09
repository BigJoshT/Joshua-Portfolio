"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { services, type Service } from "@/data/services";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const reduced = useReducedMotion();
  const cardRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || reduced) return;

    pointerRef.current = { x: event.clientX, y: event.clientY };
    if (frameRef.current !== null) return;

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      const card = cardRef.current;
      if (!card) return;

      const bounds = card.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (pointerRef.current.x - bounds.left) / bounds.width));
      const y = Math.max(0, Math.min(1, (pointerRef.current.y - bounds.top) / bounds.height));

      card.style.setProperty("--glass-x", `${x * 100}%`);
      card.style.setProperty("--glass-y", `${y * 100}%`);
      card.style.setProperty("--glass-tilt-x", `${(0.5 - y) * 2.4}deg`);
      card.style.setProperty("--glass-tilt-y", `${(x - 0.5) * 2.4}deg`);
    });
  };

  const resetPointer = () => {
    const card = cardRef.current;
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    if (!card) return;

    card.dataset.pointerState = "resetting";
    card.style.setProperty("--glass-x", "50%");
    card.style.setProperty("--glass-y", "0%");
    card.style.setProperty("--glass-tilt-x", "0deg");
    card.style.setProperty("--glass-tilt-y", "0deg");
  };

  return (
    <motion.div
      className="h-full"
      initial={
        reduced
          ? false
          : {
              opacity: 0,
              y: compact ? 14 : 24,
              rotateX: compact ? 0 : 3,
              scale: compact ? 0.995 : 0.985,
            }
      }
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: reduced ? 0 : compact ? 0.48 : 0.72,
        delay: reduced ? 0 : (index % 7) * 0.055,
        ease: [0.22, 1, 0.36, 1],
      }}
      onViewportEnter={() => setVisible(true)}
      style={{ perspective: 1000 }}
    >
      <article
        ref={cardRef}
        className={`service-glass-card group flex h-full flex-col rounded-2xl p-5 sm:p-6${visible ? " is-visible" : ""}`}
        onPointerEnter={(event) => {
          if (!reduced && event.pointerType === "mouse") {
            event.currentTarget.dataset.pointerState = "active";
          }
        }}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        onPointerCancel={resetPointer}
      >
        <span
          aria-hidden="true"
          className={`service-glass-sheen${visible ? " is-visible" : ""}`}
        />
        <div className="service-glass-content relative z-10 flex h-full flex-col">
          <h4 className="font-display text-lg font-bold text-ink">
            {service.title}
          </h4>

          <p className="mt-3 grow text-base leading-relaxed text-body">
            {service.body}
          </p>

          <p className="mt-6 border-t border-ink/10 pt-4 text-sm font-semibold text-accent">
            {service.outcome}
          </p>
        </div>
      </article>
    </motion.div>
  );
}

function ServiceGroup({
  title,
  items,
}: {
  title: string;
  items: Service[];
}) {
  return (
    <section aria-label={title}>
      <div className="mb-5 flex items-center gap-4">
        <h3 className="shrink-0 font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
          {title}
        </h3>
        <span
          aria-hidden
          className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent"
        />
      </div>
      <div className="grid gap-4 xl:grid-cols-2 xl:gap-5">
        {items.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });
  const build = services.filter((service) => service.tier === "build");
  const support = services.filter((service) => service.tier === "support");

  return (
    <section
      ref={sectionRef}
      id="services"
      className="service-atmosphere relative isolate py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-8 lg:gap-12 xl:gap-16">
        <aside className="relative md:min-w-0 xl:sticky xl:top-[20vh] xl:self-start">
          <div className="relative pl-6 sm:pl-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-12 -top-8 h-64 w-64 rounded-full bg-accent/10 blur-[90px] service-ambient-glow"
            />
            <div
              aria-hidden
              className="absolute bottom-0 left-0 top-0 w-px bg-ink/10"
            >
              <motion.div
                className="h-full w-full origin-top bg-accent"
                style={{ scaleY: smoothProgress }}
              />
            </div>

            <div className="relative">
              <p className="eyebrow">Services</p>
              <h2 className="mt-4 text-section text-balance">
                What I can do for you.
              </h2>
              <p className="mt-5 max-w-xl text-lead text-body">
                New websites, funnels and landing pages on six platforms, plus
                redesigns, migrations and ongoing care for the site you already
                have.
              </p>
            </div>
          </div>
        </aside>

        <div className="min-w-0 space-y-12 md:space-y-14">
          <ServiceGroup title="New Websites" items={build} />
          <ServiceGroup title="Improve, Move, Maintain" items={support} />
        </div>
      </div>
    </section>
  );
}
