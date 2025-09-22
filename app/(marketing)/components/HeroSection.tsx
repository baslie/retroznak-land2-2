"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { heroContent } from "@/content/hero";

import { CTAButton } from "./CTAButton";

export function HeroSection() {
  const { eyebrow, title, subtitle, description, primaryCta, secondaryCta, visual } = heroContent;

  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-retro-graphite/50 via-retro-charcoal to-black/80" />
      <div className="pointer-events-none absolute -left-32 top-20 hidden h-72 w-72 rounded-full bg-accent-platinum/10 blur-3xl lg:block" />
      <div className="pointer-events-none absolute -right-32 top-1/3 hidden h-80 w-80 rounded-full bg-accent-platinum/5 blur-3xl lg:block" />

      <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-retro-graphite/60 px-4 py-2 text-xs uppercase tracking-[0.32em] text-accent-platinum">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {eyebrow}
          </span>
          <div className="space-y-5 text-balance">
            <motion.h1
              className="text-4xl font-semibold leading-tight text-retro-ivory sm:text-5xl md:text-[3.25rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="max-w-2xl text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6, ease: "easeOut" }}
            >
              {subtitle}
            </motion.p>
            {description ? (
              <p className="max-w-xl text-base text-muted-foreground/90">{description}</p>
            ) : null}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <CTAButton cta={primaryCta} size="lg" className="shadow-glow">
              {primaryCta.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </CTAButton>
            <CTAButton cta={secondaryCta} size="lg" />
          </div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-border/70 bg-retro-graphite/60 p-4 shadow-2xl shadow-black/40">
            <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem]">
              <Image
                src={visual.image}
                alt={visual.alt}
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 70vw, 90vw"
              />
            </div>
            <div className="mt-5 rounded-2xl border border-border/60 bg-retro-smoke/70 p-5 text-sm text-muted-foreground">
              <p className="font-semibold text-retro-ivory">{visual.badge.title}</p>
              <p>{visual.badge.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
