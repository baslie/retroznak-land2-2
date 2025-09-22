import type { ComponentType } from "react";

import Image from "next/image";
import { LinkIcon, Send, Share2, Youtube } from "lucide-react";

import { finalCtaContent } from "@/content/finalCta";

import { CTAButton } from "./CTAButton";
import { ContactIcons } from "./ContactIcons";

const socialIconMap: Record<string, ComponentType<{ className?: string }>> = {
  telegram: Send,
  vk: Share2,
  youtube: Youtube,
};

export function FinalCTASection() {
  const {
    title,
    subtitle,
    triggers,
    primaryCta,
    secondaryCta,
    messengers,
    resources,
    socials,
    legalNotice,
    copyright,
  } = finalCtaContent;

  return (
    <section id="final-cta" className="bg-retro-charcoal py-20">
      <div className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-platinum">Готовы к старту</span>
          <h2 className="text-3xl font-semibold text-retro-ivory sm:text-4xl">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <div className="grid gap-4 rounded-3xl border border-border/70 bg-retro-graphite/60 p-6 sm:grid-cols-2">
              {triggers.map((trigger) => (
                <div key={trigger.id} className="rounded-2xl border border-border/60 bg-retro-charcoal/80 p-4">
                  <p className="text-lg font-semibold text-retro-ivory">{trigger.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{trigger.description}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 rounded-3xl border border-border/70 bg-retro-charcoal/80 p-6">
              <h3 className="text-lg font-semibold text-retro-ivory">Полезные материалы</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {resources.map((resource) => (
                  <li key={resource.href} className="flex items-center gap-2">
                    <LinkIcon className="h-4 w-4 text-accent-platinum" aria-hidden />
                    <a
                      href={resource.href}
                      className="underline decoration-accent-platinum/60 underline-offset-4 transition hover:text-retro-ivory"
                      target={resource.href.startsWith("http") ? "_blank" : undefined}
                      rel={resource.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {resource.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-border/70 bg-retro-graphite/70 p-8">
            <div className="space-y-4">
              <CTAButton cta={primaryCta} className="w-full justify-center" size="lg" />
              <CTAButton cta={secondaryCta} className="w-full justify-center" />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-retro-ivory">Связаться через мессенджеры</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {messengers.map((messenger) => (
                  <div
                    key={messenger.platform}
                    className="rounded-2xl border border-border/70 bg-retro-charcoal/80 p-4"
                  >
                    <ContactIcons items={[messenger]} orientation="vertical" />
                    {messenger.qrCodeImage ? (
                      <div className="mt-4 flex items-center justify-center rounded-2xl border border-border/70 bg-retro-graphite/80 p-3">
                        <Image
                          src={messenger.qrCodeImage}
                          alt={`QR-код ${messenger.label}`}
                          width={120}
                          height={120}
                          className="h-24 w-24 object-contain"
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <div id="messengers" className="sr-only" aria-hidden />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-retro-ivory">Мы на связи в соцсетях</h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = socialIconMap[social.platform] ?? Share2;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-retro-charcoal/70 px-4 py-2 text-sm text-muted-foreground transition hover:border-accent-platinum hover:text-retro-ivory"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{legalNotice}</p>
            <p className="text-xs text-muted-foreground/80">{copyright}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
