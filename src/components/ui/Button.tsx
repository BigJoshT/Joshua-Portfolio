import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "onNavy";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-base font-semibold transition-all duration-300 button-motion sm:px-6 sm:py-3.5";

const variants: Record<Variant, string> = {
  // The one loud element on the page.
  primary:
    "bg-accent text-white",
  outline:
    "border border-line bg-white text-ink hover:border-ink/25",
  onNavy:
    "border border-white/25 text-white hover:bg-white/10",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "children">) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300"
      >
        →
      </span>
    </Link>
  );
}
