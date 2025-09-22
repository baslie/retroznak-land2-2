import { ChevronDown } from "lucide-react";

import { faqContent } from "@/content/faq";

import { CTAButton } from "./CTAButton";

export function FAQSection() {
  const { title, subtitle, items, cta } = faqContent;

  return (
    <section id="faq" className="border-t border-border/60 bg-retro-graphite/40 py-20">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-platinum">FAQ</span>
          <h2 className="text-3xl font-semibold text-retro-ivory sm:text-4xl">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>
        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-border/70 bg-retro-charcoal/80"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-retro-ivory">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-accent-platinum">{item.category}</p>
                  <p className="mt-2 text-lg text-retro-ivory">{item.question}</p>
                </div>
                <ChevronDown className="h-5 w-5 transition group-open:rotate-180" aria-hidden />
              </summary>
              <div className="px-6 pb-6 text-sm text-muted-foreground">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
        <div className="flex flex-col items-start gap-4 rounded-3xl border border-border/70 bg-retro-charcoal/85 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-retro-ivory">Остались вопросы?</h3>
            <p className="text-sm text-muted-foreground">Мы ответим в удобном формате и отправим дополнительные материалы.</p>
          </div>
          <CTAButton cta={cta} />
          <div id="question" className="sr-only" aria-hidden />
        </div>
      </div>
    </section>
  );
}
