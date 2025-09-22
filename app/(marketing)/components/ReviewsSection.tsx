"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { reviewsContent } from "@/content/reviews";

import { CTAButton } from "./CTAButton";

export function ReviewsSection() {
  const { title, subtitle, reviews, cta } = reviewsContent;

  return (
    <section id="reviews" className="border-t border-border/60 bg-retro-graphite/45 py-20">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-platinum">Отзывы</span>
          <h2 className="text-3xl font-semibold text-retro-ivory sm:text-4xl">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1.05}
          breakpoints={{
            768: { slidesPerView: 1.6 },
            1024: { slidesPerView: 2.3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-retro-charcoal/80 p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-border/60 bg-retro-graphite/80">
                    {review.image ? (
                      <Image src={review.image} alt={review.name} fill className="object-cover" sizes="56px" />
                    ) : null}
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-retro-ivory">{review.name}</p>
                    <p className="text-muted-foreground/80">{review.role}</p>
                    <div className="flex items-center gap-1 text-accent-platinum" aria-hidden>
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="flex-1 text-sm text-muted-foreground">{review.text}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col items-start gap-4 rounded-3xl border border-border/70 bg-retro-charcoal/80 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-retro-ivory">Хотите стать следующим героем истории?</h3>
            <p className="text-sm text-muted-foreground">Подберём комплектацию и покажем фото похожих проектов.</p>
          </div>
          <CTAButton cta={cta} />
        </div>
      </div>
    </section>
  );
}
