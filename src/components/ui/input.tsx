import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-11 w-full rounded-2xl border border-border/70 bg-retro-charcoal/70 px-4 text-sm text-retro-ivory placeholder:text-muted-foreground/60 shadow-xs transition focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent-platinum/70 focus-visible:ring-offset-2 focus-visible:ring-offset-retro-charcoal disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";
