"use client";

import { motion } from "framer-motion";

import type { ProductVariant } from "@/types/content";

export interface ProductTabsProps {
  items: ProductVariant[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function ProductTabs({ items, activeId, onSelect }: ProductTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((variant) => {
        const isActive = activeId === variant.id;
        return (
          <button
            key={variant.id}
            type="button"
            onClick={() => onSelect(variant.id)}
            className="relative overflow-hidden rounded-2xl border border-border/70 bg-retro-charcoal/80 px-5 py-4 text-left text-sm transition hover:border-accent-platinum"
          >
            {isActive ? (
              <motion.span
                layoutId="product-tab-highlight"
                className="absolute inset-0 rounded-2xl border border-accent-platinum/60 bg-retro-smoke/60"
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                aria-hidden
              />
            ) : null}
            <span className="relative z-10 flex flex-col gap-2">
              <span className="flex items-center gap-2 text-base font-semibold text-retro-ivory">
                {variant.name}
                {variant.badge ? (
                  <span
                    className="rounded-full border border-accent-platinum/40 bg-retro-smoke/70 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-accent-platinum"
                  >
                    {variant.badge.label}
                  </span>
                ) : null}
              </span>
              {variant.priceFrom ? (
                <span className="text-xs text-muted-foreground/80">{variant.priceFrom}</span>
              ) : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}
