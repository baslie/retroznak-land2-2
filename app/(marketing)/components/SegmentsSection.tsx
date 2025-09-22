import { Building2, Home, Landmark, Utensils, type LucideIcon } from "lucide-react";

import { segmentsContent } from "@/content/segments";

import { CTAButton } from "./CTAButton";

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  utensils: Utensils,
  landmark: Landmark,
  building: Building2,
};

export function SegmentsSection() {
  const { title, subtitle, segments, cta } = segmentsContent;

  return (
    <section id="segments" className="py-20">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-platinum">Кому подойдут</span>
          <h2 className="text-3xl font-semibold text-retro-ivory sm:text-4xl">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {segments.map((segment) => {
            const Icon = iconMap[segment.icon ?? ""] ?? Landmark;
            return (
              <article
                key={segment.id}
                className="relative overflow-hidden rounded-3xl border border-border/70 bg-retro-graphite/60 p-6 transition hover:border-accent-platinum/70"
              >
                <div className="absolute -right-10 top-6 h-28 w-28 rounded-full bg-accent-platinum/10 blur-3xl" aria-hidden />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-retro-smoke/60 text-accent-platinum">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-retro-ivory">{segment.title}</h3>
                    <p className="text-sm text-muted-foreground">{segment.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="flex flex-col items-start gap-4 rounded-3xl border border-border/70 bg-retro-graphite/60 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-retro-ivory">Хотите примеры именно для вас?</h3>
            <p className="text-sm text-muted-foreground">Подберём реализованные проекты и предложим идеи для фасада.</p>
          </div>
          <CTAButton cta={cta} size="md" />
        </div>
      </div>
    </section>
  );
}
