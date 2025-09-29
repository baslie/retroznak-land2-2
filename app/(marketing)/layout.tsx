import Link from "next/link";
import type { ReactNode } from "react";
import { MessageCircle, Send } from "lucide-react";

import { footerContent } from "@/content/footer";
import { navigationContent } from "@/content/navigation";

import { CTAButton } from "./components/CTAButton";
import { ContactIcons } from "./components/ContactIcons";
import { FloatingMenu } from "./components/FloatingMenu";
import { MobileNavDrawer } from "./components/MobileNavDrawer";

export default function MarketingLayout({ children }: Readonly<{ children: ReactNode }>) {
  const { menuItems, cta, messengers } = navigationContent;
  const { menu, contacts, messengers: footerMessengers, socials, legal, copyright } = footerContent;

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
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
            {menuItems.map((item) => (
              <Link key={item.id} href={`#${item.targetId}`} className="text-muted-foreground transition hover:text-retro-ivory">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 md:flex">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-retro-graphite/80 text-accent-platinum transition hover:border-accent-platinum hover:text-retro-ivory"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-retro-graphite/80 text-accent-platinum transition hover:border-accent-platinum hover:text-retro-ivory"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
            <CTAButton cta={cta} size="sm" className="hidden md:inline-flex" />
            <div className="md:hidden">
              <MobileNavDrawer menuItems={menuItems} cta={cta} messengers={messengers} />
            </div>
          </div>
        </div>
      </header>

      {/* <FloatingMenu menuItems={menuItems} cta={cta} messengers={messengers} /> */}

      <main className="flex-1 pb-20 pt-12">{children}</main>

      <footer className="border-t border-border/60 bg-retro-graphite/60 py-12">
        <div className="container space-y-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.32em] text-accent-platinum">Retroznak</span>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">
                  Объёмные ретрознаки с подсветкой. Восстанавливаем исторические формы и создаём современные решения для домов,
                  бизнеса и музеев.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <h3 className="text-xs uppercase tracking-[0.3em] text-retro-ivory">Контакты</h3>
                  <ul className="space-y-2">
                    {contacts.map((contact) => (
                      <li key={contact.label}>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="transition hover:text-retro-ivory"
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                          >
                            {contact.label}: {contact.value}
                          </a>
                        ) : (
                          <span>
                            {contact.label}: {contact.value}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <h3 className="text-xs uppercase tracking-[0.3em] text-retro-ivory">Навигация</h3>
                  <ul className="space-y-2">
                    {menu.flatMap((group) => group.links).map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="transition hover:text-retro-ivory">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.3em] text-retro-ivory">Мессенджеры</h3>
                <ContactIcons items={footerMessengers} orientation="vertical" />
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <h3 className="text-xs uppercase tracking-[0.3em] text-retro-ivory">Социальные сети</h3>
                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-retro-charcoal/70 px-4 py-2 transition hover:border-accent-platinum hover:text-retro-ivory"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>{legal}</p>
            <p>{copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
