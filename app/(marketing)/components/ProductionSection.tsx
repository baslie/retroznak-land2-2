import Image from "next/image";
import {
  Hammer,
  PenTool,
  ShieldCheck,
  Truck,
  Users2,
  type LucideIcon,
} from "lucide-react";

import { productionContent } from "@/content/production";

const iconMap: Record<string, LucideIcon> = {
  pen: PenTool,
  manufacturing: Hammer,
  hammer: Hammer,
  shield: ShieldCheck,
  truck: Truck,
};

export function ProductionSection() {
  const { title, subtitle, steps, team, metrics } = productionContent;

  return (
    <section id="production" className="py-20">
      <div className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-platinum">Мастерская</span>
          <h2 className="text-3xl font-semibold text-retro-ivory sm:text-4xl">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <ol className="space-y-4 rounded-3xl border border-border/70 bg-retro-graphite/60 p-6">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon ?? ""] ?? Users2;
              return (
                <li key={step.id} className="flex gap-4 rounded-2xl bg-retro-charcoal/80 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-retro-smoke/60 text-accent-platinum">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/80">Шаг {index + 1}</span>
                    <h3 className="text-lg font-semibold text-retro-ivory">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              {team.map((member) => (
                <article
                  key={member.id}
                  className="flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-retro-charcoal/80"
                >
                  <div className="relative h-40 w-full">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`${member.name} — ${member.role}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 200px, 90vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-retro-graphite/80 text-accent-platinum">
                        <Users2 className="h-8 w-8" aria-hidden />
                      </div>
                    )}
                  </div>
                  <div className="space-y-1 p-5 text-sm">
                    <h3 className="text-base font-semibold text-retro-ivory">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                    <p className="text-xs text-muted-foreground/80">{member.experience}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="grid gap-4 rounded-3xl border border-border/70 bg-retro-charcoal/80 p-6 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.id} className="flex flex-col gap-1 text-center">
                  <span className="text-3xl font-semibold text-retro-ivory">{metric.label}</span>
                  <span className="text-sm uppercase tracking-[0.3em] text-accent-platinum">{metric.value}</span>
                  {metric.description ? (
                    <span className="text-xs text-muted-foreground/80">{metric.description}</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
