import Image from "next/image";
import { OrbitCanvas } from "@/components/three/OrbitCanvas";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { platforms } from "@/data/platforms";

export function Platforms() {
  return (
    <section id="platforms" className="dot-grid relative py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-10">
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow">Platforms</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-3 text-section text-balance lg:text-[clamp(2.25rem,3vw,2.5rem)]">
              Six platforms. One goal. A website that works for your business.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-3 text-base leading-relaxed text-body sm:text-lg">
              I work with six website platforms, choosing the right one based
              on your business, goals and the experience you want to create.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-6 grid gap-x-5 gap-y-4 sm:grid-cols-2">
              {platforms.map((p) => (
                <li key={p.id} className="flex min-w-0 gap-3">
                  <span
                    className={`relative mt-0.5 h-9 w-9 shrink-0 ${
                      p.id === "shopify" ? "rounded-lg bg-[#fff] p-1" : ""
                    }`}
                  >
                    <Image
                      src={p.logo}
                      alt=""
                      aria-hidden
                      fill
                      sizes="36px"
                      className="object-contain drop-shadow-sm"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-base font-bold text-ink">
                      {p.name}
                    </p>
                    <p className="mt-0.5 text-sm leading-snug text-body">
                      {p.blurb}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-6">
              <Button
                href="/#contact"
                variant="outline"
                className="rounded-lg border-ink/15 bg-transparent px-3 py-2 text-sm font-medium text-body hover:border-ink/30 hover:bg-transparent sm:px-3 sm:py-2"
              >
                Tell me about your project
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="flex min-w-0 items-center justify-center">
          <OrbitCanvas />
        </Reveal>
      </div>
    </section>
  );
}
