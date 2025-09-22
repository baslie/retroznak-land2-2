"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, PackageOpen } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { productContent } from "@/content/products";

import { CTAButton } from "../CTAButton";
import { ComparisonTable } from "./ComparisonTable";
import { ProductTabs } from "./Tabs";

export function ProductMatrixSection() {
  const { title, subtitle, variants, comparison, cta, secondaryCta } = productContent;
  const [activeId, setActiveId] = useState<string>(variants[0]?.id ?? "");

  const activeVariant = useMemo(
    () => variants.find((variant) => variant.id === activeId) ?? variants[0],
    [activeId, variants],
  );

  if (!activeVariant) {
    return null;
  }

  return (
    <section id="products" className="border-t border-border/60 bg-retro-graphite/35 py-20">
      <div className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-platinum">Каталог</span>
          <h2 className="text-3xl font-semibold text-retro-ivory sm:text-4xl">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <ProductTabs items={variants} activeId={activeVariant.id} onSelect={setActiveId} />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <motion.div
            key={activeVariant.id}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-retro-charcoal/80">
              <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
                {activeVariant.images.map((image) => (
                  <SwiperSlide key={image.src}>
                    <div className="relative h-[320px] w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 460px, (min-width: 768px) 70vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/70 bg-retro-charcoal/70 p-6">
              <p className="text-base text-muted-foreground/90">{activeVariant.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {activeVariant.priceFrom ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-retro-graphite/70 px-4 py-2 text-retro-ivory">
                    <CheckCircle2 className="h-4 w-4 text-accent-platinum" aria-hidden />
                    {activeVariant.priceFrom}
                  </span>
                ) : null}
                {activeVariant.leadTime ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-retro-graphite/70 px-4 py-2">
                    <Clock className="h-4 w-4 text-accent-platinum" aria-hidden />
                    {activeVariant.leadTime}
                  </span>
                ) : null}
              </div>
            </div>
          </motion.div>

          <motion.div
            key={`${activeVariant.id}-details`}
            className="grid gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <div className="grid gap-4 rounded-3xl border border-border/70 bg-retro-charcoal/80 p-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-retro-ivory">
                  <CheckCircle2 className="h-5 w-5 text-accent-platinum" aria-hidden />
                  Комплектация
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {activeVariant.equipment.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-platinum" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-retro-ivory">
                  <PackageOpen className="h-5 w-5 text-accent-platinum" aria-hidden />
                  Особенности
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {activeVariant.features.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-platinum" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-retro-ivory">Оплата</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {activeVariant.paymentOptions.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-platinum" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-retro-ivory">Дополнительно</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {activeVariant.upsells.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-platinum" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-border/70 bg-retro-charcoal/85 p-6">
              <h3 className="text-lg font-semibold text-retro-ivory">Выберите, как продолжить</h3>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTAButton cta={cta} className="flex-1 justify-center" />
                <CTAButton cta={secondaryCta} className="flex-1 justify-center" />
              </div>
              <p className="text-xs text-muted-foreground/80">
                Формы консультаций появятся на следующем этапе разработки. Сейчас вы можете оставить заявку через кнопки выше.
              </p>
              <div id="consultation" className="sr-only" aria-hidden />
              <div id="custom-project" className="sr-only" aria-hidden />
            </div>
          </motion.div>
        </div>

        <ComparisonTable rows={comparison} variants={variants} />
      </div>
    </section>
  );
}
