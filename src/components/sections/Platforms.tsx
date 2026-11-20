import Image from "next/image";
import { OrbitCanvas } from "@/components/three/OrbitCanvas";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { platforms } from "@/data/platforms";

export function Platforms() {
  return (
    <section id="platforms" className="dot-grid relative py-8 md:py-10">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow">Platforms</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-2 text-section text-balance lg:text-[2.125rem]">
              Let me help you find the perfect
              <br className="hidden lg:block" /> platform for your business.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-2 text-base leading-relaxed text-body sm:text-lg lg:text-base">
              Every business is different. I'll help you choose the right platform based on your goals, budget and the kind of website you want to build.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-4 grid gap-x-4 gap-y-3 sm:grid-cols-2">
              {platforms.map((p) => (
                <li key={p.id} className="flex min-w-0 gap-3">
                  <span
                    className="relative mt-0.5 h-8 w-8 shrink-0"
                  >
                    <Image
                      src={p.logo}
                      alt=""
                      aria-hidden
                      fill
                      sizes="32px"
                      className="object-contain drop-shadow-sm"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-base font-bold text-ink">
                      {p.name}
                    </p>
                    <p className="mt-0.5 text-sm leading-snug text-body lg:text-[0.8125rem]">
                      {p.blurb}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-4">
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
