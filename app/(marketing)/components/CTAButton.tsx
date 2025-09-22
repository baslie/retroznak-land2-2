import Link from "next/link";
import type { PropsWithChildren, ReactNode } from "react";

import type { Cta } from "@/types/content";
import { cn } from "@/lib/utils";

const variantClasses: Record<string, string> = {
  primary:
    "bg-accent-platinum text-retro-charcoal hover:bg-retro-ivory focus-visible:ring-retro-ivory",
  secondary:
    "bg-retro-smoke text-retro-ivory hover:bg-retro-graphite focus-visible:ring-retro-ivory",
  ghost:
    "bg-transparent text-accent-platinum hover:text-retro-ivory hover:bg-retro-graphite/60 focus-visible:ring-accent-platinum",
};

const sizeClasses: Record<"sm" | "md" | "lg", string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export interface CTAButtonProps extends PropsWithChildren {
  cta: Cta;
  className?: string;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
}

export function CTAButton({ cta, className, size = "md", icon, children }: CTAButtonProps) {
  const { label, variant = "primary", href, targetId } = cta;
  const finalLabel = children ?? label;
  const destination = href ?? (targetId ? `#${targetId}` : "#");
  const isExternal = Boolean(href && /^https?:/i.test(href));
  const content = (
    <span className="inline-flex items-center gap-2">
      {icon}
      <span>{finalLabel}</span>
    </span>
  );

  if (isExternal) {
    return (
      <a
        href={destination}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-retro-charcoal",
          variantClasses[variant] ?? variantClasses.primary,
          sizeClasses[size],
          className,
        )}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={destination}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-retro-charcoal",
        variantClasses[variant] ?? variantClasses.primary,
        sizeClasses[size],
        className,
      )}
    >
      {content}
    </Link>
  );
}
