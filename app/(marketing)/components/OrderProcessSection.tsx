import {
  CheckCheck,
  Factory,
  FileSignature,
  PenTool,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { orderProcessContent } from "@/content/orderProcess";

import { CTAButton } from "./CTAButton";

const iconMap: Record<string, LucideIcon> = {
  form: FileSignature,
  design: PenTool,
  approval: CheckCheck,
  production: Factory,
  delivery: Truck,
  install: Wrench,
};

export function OrderProcessSection() {
  const { title, subtitle, steps, cta } = orderProcessContent;

  return (
    <section id="order-process" className="py-20">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-platinum">Как мы работаем</span>
          <h2 className="text-3xl font-semibold text-retro-ivory sm:text-4xl">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <ol className="relative space-y-6 rounded-3xl border border-border/70 bg-retro-graphite/60 p-8">
            <div className="absolute left-8 top-12 h-[calc(100%-4rem)] w-px bg-accent-platinum/20" aria-hidden />
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon ?? ""] ?? CheckCheck;
              return (
                <li key={step.id} className="relative flex gap-6">
                  <span className="relative z-10 mt-1 flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-retro-charcoal/80 text-accent-platinum">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">Шаг {index + 1}</span>
                    <h3 className="text-lg font-semibold text-retro-ivory">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="flex flex-col gap-4 rounded-3xl border border-border/70 bg-retro-charcoal/85 p-8">
            <h3 className="text-xl font-semibold text-retro-ivory">Готовы начать?</h3>
            <p className="text-sm text-muted-foreground">
              Заполните форму заявки, и мы подготовим макет в течение двух часов, а затем согласуем сроки производства.
            </p>
            <CTAButton cta={cta} className="justify-center" />
            <div id="consultation" className="sr-only" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
