import Link from "next/link";
import { activeHire, activeSocials, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="navy-panel">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-bold text-white">
              {site.shortName}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-4 max-w-xs text-base text-on-navy/70">
              Web designer creating modern business websites, landing pages, sales funnels and online stores. Helping brands build a stronger online presence with GoHighLevel, WordPress, Shopify, Wix and more.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
{activeHire.map((h) => (
                <a
                  key={h.label}
                  href={h.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                >
                  Hire me on {h.label} ↗
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="rounded-lg border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Email me
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold tracking-wide text-white">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-on-navy/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold tracking-wide text-white">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2.5">
              {activeSocials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...(s.href.startsWith("mailto:")
                      ? {}
                      : { target: "_blank", rel: "noreferrer noopener" })}
                    className="text-base text-on-navy/70 transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line-navy pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-on-navy/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-on-navy/70 transition-colors hover:text-white"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
