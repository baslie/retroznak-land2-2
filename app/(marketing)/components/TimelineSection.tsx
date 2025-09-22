"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Stamp } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { timelineContent } from "@/content/timeline";

import { CTAButton } from "./CTAButton";

export function TimelineSection() {
  const { title, subtitle, items, patentHighlight, expertQuote, cta } = timelineContent;

  return (
    <section id="timeline" className="border-t border-border/60 bg-retro-graphite/40 py-20">
      <div className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-retro-charcoal/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-accent-platinum"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Stamp className="h-4 w-4" aria-hidden />
            Архивные истории
          </motion.span>
          <motion.h2
            className="text-3xl font-semibold text-retro-ivory sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-retro-charcoal/80">
                  <div className="relative h-60 w-full">
                    <Image src={item.image.src} alt={item.image.alt} fill className="object-cover" sizes="90vw" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="text-xs uppercase tracking-[0.22em] text-accent-platinum">{item.period}</span>
                    <h3 className="text-xl font-semibold text-retro-ivory">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.cta ? (
                      <CTAButton cta={item.cta} size="sm" className="mt-auto w-fit" />
                    ) : null}
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-retro-charcoal/80"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative h-60 w-full">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 360px, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="text-xs uppercase tracking-[0.22em] text-accent-platinum">{item.period}</span>
                <h3 className="text-xl font-semibold text-retro-ivory">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {item.cta ? <CTAButton cta={item.cta} size="sm" className="mt-auto w-fit" /> : null}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="rounded-3xl border border-accent-platinum/30 bg-retro-charcoal/90 p-8 shadow-glow">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-retro-ivory">
              <Stamp className="h-5 w-5" aria-hidden />
              {patentHighlight.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{patentHighlight.description}</p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-retro-charcoal/80 p-8">
            <p className="flex gap-3 text-base italic text-muted-foreground">
              <Quote className="h-6 w-6 shrink-0 text-accent-platinum" aria-hidden />
              {expertQuote.text}
            </p>
            <p className="mt-4 text-sm font-semibold text-retro-ivory">
              {expertQuote.name}
              <span className="ml-2 font-normal text-muted-foreground/80">{expertQuote.role}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 rounded-3xl border border-border/70 bg-retro-charcoal/80 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-retro-ivory">Готовы вернуть историю вашему дому?</h3>
            <p className="text-sm text-muted-foreground">Расскажем, как воспроизвести оригинальный знак по архивам.</p>
          </div>
          <CTAButton cta={cta} size="md" />
          <div id="timeline-form" className="sr-only" aria-hidden />
        </div>
      </div>
    </section>
  );
}
