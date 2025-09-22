import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 4, ...props }, ref) => (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        "w-full rounded-2xl border border-border/70 bg-retro-charcoal/70 px-4 py-3 text-sm text-retro-ivory placeholder:text-muted-foreground/60 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-platinum/70 focus-visible:ring-offset-2 focus-visible:ring-offset-retro-charcoal disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);

Textarea.displayName = "Textarea";
