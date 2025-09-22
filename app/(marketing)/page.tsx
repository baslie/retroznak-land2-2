import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const sections = [
  {
    id: "hero",
    title: "Retroznak 2.0",
    description:
      "Маркетинговый лендинг в разработке. Здесь появится погружение в атмосферу неона и металла.",
    cta: { href: "#hero", external: false },
  },
  {
    id: "about",
    title: "О производстве",
    description:
      "Расскажем о материалах, этапах изготовления и контроле качества, как только соберём контентный слой.",
    cta: { href: "#about", external: false },
  },
  {
    id: "contact",
    title: "Связаться с нами",
    description:
      "Команды CTA и формы появятся после интеграции React Hook Form и API-роутов.",
    cta: { href: "mailto:test@test.ru", external: true },
  },
];

export default function MarketingHomePage() {
  return (
    <div className="container flex w-full flex-col gap-12">
      <div className="space-y-6 text-balance" id="hero">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-retro-graphite/60 px-4 py-1 text-xs uppercase tracking-[0.32em] text-accent-platinum">
          Этап A · Настройка UI
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-retro-ivory md:text-5xl">Ретрознак 2.0</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Лендинг формируется пошагово. На этом этапе готов базовый визуальный каркас, брендовые цвета и первичные
            компоненты shadcn/ui.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="shadow-glow">
            <Link href="https://www.figma.com" target="_blank" rel="noreferrer">
              Смотреть прототип
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Связаться с продакшеном</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2" id="about">
        {sections.map((section) => (
          <section
            id={`${section.id}-card`}
            key={section.id}
            className="group relative overflow-hidden rounded-3xl border border-border/70 bg-retro-graphite/60 p-6 shadow-xl shadow-black/20 transition-colors hover:border-accent-platinum/80"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-platinum/10 blur-3xl transition duration-300 group-hover:bg-accent-platinum/30" />
            <div className="relative space-y-3">
              <h2 className="text-2xl font-semibold text-retro-ivory">{section.title}</h2>
              <p className="text-sm text-muted-foreground/90">{section.description}</p>
              {section.cta.external ? (
                <a
                  href={section.cta.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent-platinum transition-colors hover:text-retro-ivory"
                >
                  Узнать подробнее
                  <span aria-hidden>→</span>
                </a>
              ) : (
                <Link
                  href={section.cta.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent-platinum transition-colors hover:text-retro-ivory"
                >
                  Узнать подробнее
                  <span aria-hidden>→</span>
                </Link>
              )}
            </div>
          </section>
        ))}
      </div>

      <div className="rounded-3xl border border-border/60 bg-retro-graphite/60 p-6 text-sm text-muted-foreground" id="contact">
        <p>
          Формы обратной связи появятся на этапе интеграции React Hook Form и API-роута отправки писем. Сейчас можно оставить
          запрос на <a className="underline decoration-accent-platinum/60 underline-offset-4" href="mailto:test@test.ru">test@test.ru</a>.
        </p>
      </div>
    </div>
  );
}
