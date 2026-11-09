import Image from "next/image";
import portrait from "@/assets/about-portrait.webp";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-stretch gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
        <Reveal className="lg:h-full">
          <div className="about-photo-column relative lg:h-full">
            <div
              aria-hidden
              className="absolute -bottom-5 -left-5 h-full w-full rounded-2xl bg-accent"
            />
            <div className="about-photo-frame relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface-2">
              <Image
                src={portrait}
                alt={`${site.name}, web designer`}
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 right-6 flex min-w-36 justify-center rounded-xl bg-accent px-5 py-3 text-center shadow-lg">
              <p className="font-display text-sm font-bold text-white">
                JOSHUA
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col lg:h-full">
          <Reveal>
            <p className="eyebrow">ABOUT</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-4 text-section text-balance">
              Meet the designer.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-6 space-y-5 text-lead text-body">
              <p>
                Hey, I&apos;m Joshua, a web designer who enjoys turning ideas
                into beautiful, functional websites.
              </p>
              <p>
                I believe a great website should do more than look good. It
                should tell your story, make a lasting impression and give
                people a reason to connect with your business.
              </p>
              <p>
                I enjoy working with different brands and bringing their ideas
                to life through thoughtful design, clear layouts and seamless
                user experiences. Whether it&apos;s a brand new website or a
                fresh redesign, I put care into every detail.
              </p>
              <p>
                I&apos;m always excited to meet new people, explore creative
                ideas and build something meaningful together.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 font-display text-lg font-bold text-accent sm:text-xl">
              Let&apos;s create something great.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-auto pt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-x-5">
              {site.stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="font-display text-2xl font-bold text-ink sm:text-3xl">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
