import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

const navigation = [
  { href: "#hero", label: "Главная" },
  { href: "#about", label: "О производстве" },
  { href: "#contact", label: "Контакты" },
];

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-retro-charcoal/90 backdrop-blur-xl">
        <div className="container flex w-full items-center justify-between gap-6 py-5">
          <Link
            href="#hero"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.32em] text-accent-platinum"
            aria-label="Retroznak"
          >
            Retroznak
          </Link>
          <nav aria-label="Основная навигация" className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-retro-ivory"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild size="sm" variant="secondary" className="hidden md:inline-flex">
            <Link href="#contact">Связаться</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 pb-16 pt-12">{children}</main>
      <footer className="border-t border-border/60 bg-retro-graphite/50 py-10">
        <div className="container flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Retroznak. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <Link href="mailto:test@test.ru" className="hover:text-retro-ivory">
              test@test.ru
            </Link>
            <span className="hidden text-xs text-muted-foreground/80 sm:inline">Проект Retroznak Land 2.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
