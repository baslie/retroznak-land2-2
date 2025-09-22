"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import type { Cta, MessengerLink, NavigationItem } from "@/types/content";

import { CTAButton } from "./CTAButton";
import { ContactIcons } from "./ContactIcons";

export interface MobileNavDrawerProps {
  menuItems: NavigationItem[];
  cta: Cta;
  messengers: MessengerLink[];
}

export function MobileNavDrawer({ menuItems, cta, messengers }: MobileNavDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-retro-graphite/80 text-retro-ivory transition hover:border-accent-platinum"
        aria-label="Открыть меню"
        aria-expanded={open}
      >
        <Menu className="h-5 w-5" aria-hidden />
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-retro-charcoal/95 backdrop-blur">
          <div className="flex items-center justify-between border-b border-border/70 px-6 py-5">
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-accent-platinum">Retroznak</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-retro-ivory transition hover:border-accent-platinum"
              aria-label="Закрыть меню"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-6 py-6 text-lg font-medium text-retro-ivory">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.targetId}`}
                className="rounded-2xl px-4 py-3 transition hover:bg-retro-smoke/60"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-4 border-t border-border/70 px-6 py-6">
            <CTAButton cta={cta} className="w-full justify-center" />
            <ContactIcons items={messengers} orientation="vertical" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
