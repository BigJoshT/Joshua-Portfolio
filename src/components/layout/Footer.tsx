import Link from "next/link";
import { activeHire, site } from "@/lib/site";

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
                  className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-all button-motion"
                >
                  Hire me on {h.label} ↗
                </a>
              ))}

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
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={"mailto:" + site.email}
                  className="flex items-center gap-2.5 break-all text-base text-on-navy/70 transition-colors hover:text-white"
                >
                  <svg aria-hidden="true" className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                  <span>{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={"https://wa.me/" + site.whatsapp.replace(/\D/g, "")}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2.5 text-base text-on-navy/70 transition-colors hover:text-white"
                >
                  <svg aria-hidden="true" className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.4 11.6a8.3 8.3 0 0 1-12.3 7.2L3 20l1.3-4.7a8.4 8.4 0 1 1 16.1-3.7Z" />
                    <path d="M8.4 7.6c.2-.4.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.9c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.2 1.5 2 2 .2.1.4.1.6-.1l.7-.8c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .4-.2 1.1-.7 1.5-.5.4-1 .6-1.7.5-1-.1-2.2-.6-3.6-1.8-1.5-1.3-2.5-2.9-2.8-4-.2-.8 0-1.6.7-2.2Z" />
                  </svg>
                  <span>{site.whatsapp}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line-navy pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-on-navy/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
