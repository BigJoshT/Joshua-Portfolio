"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { techRow1, techRow2, type Tech } from "@/data/tech";

/**
 * Two marquee rows of brand marks, drifting in opposite directions.
 *
 * Each row renders twelve identical logo sequences and moves by one sequence
 * width per loop. Logos share muted styling and reveal their brand colour on
 * hover; reduced-motion users get a static wrapped grid.
 */
function Logo({ item }: { item: Tech }) {
  return (
    <li
      className="group/logo flex shrink-0 items-center gap-2.5 px-5 py-3"
      style={{ ["--brand" as string]: item.color }}
    >
      <span className="relative h-7 w-8 text-muted transition-colors duration-300 group-hover/logo:text-[var(--brand)]">
        <Image
          src={item.logo ?? "/tech/" + item.slug + ".svg"}
          alt=""
          aria-hidden
          fill
          sizes="32px"
          className="object-contain opacity-55 grayscale transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
        />
      </span>
      <span className="whitespace-nowrap text-sm font-semibold text-body transition-colors duration-300 group-hover/logo:text-ink">
        {item.name}
      </span>
    </li>
  );
}

function Row({ items, reverse = false }: { items: Tech[]; reverse?: boolean }) {
  const copies = 12;

  return (
    <div className="relative overflow-hidden">
      <div
        className={"marquee-track flex w-max " + (reverse ? "marquee-right" : "marquee-left")}
      >
        {Array.from({ length: copies }, (_, copy) => (
          <ul
            key={copy}
            aria-hidden={copy > 0}
            className="flex shrink-0 items-center"
          >
            {items.map((item) => (
              <Logo key={item.slug} item={item} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function TechStrip() {
  return (
    <section
      aria-labelledby="tech-heading"
      className="border-y border-line bg-surface py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Connected tools</p>
            <h2 id="tech-heading" className="mt-3 font-display text-2xl font-bold text-ink text-balance">
              The right tools, when your website needs them.
            </h2>
            <p className="mt-3 text-base text-body">
              Some platforms already have everything you need. When your project
              requires more, I can connect additional tools for payments, bookings,
              email marketing, analytics and more.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-10">
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <Row items={techRow1} />
          <Row items={techRow2} reverse />
        </div>
      </div>
    </section>
  );
}
