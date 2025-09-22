import { createMockPhoto } from "@/lib/placeholders";

export interface SiteMetadata {
  name: string;
  brand: string;
  title: string;
  description: string;
  siteUrl: string;
  locale: string;
  keywords: string[];
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialImage: string;
  socialImageAlt: string;
  telegramUrl: string;
  whatsappUrl: string;
  organization: string;
}

const ogCover = createMockPhoto({
  width: 1200,
  height: 630,
  title: "Retroznak Land 2.0",
  subtitle: "Домовые знаки и неон",
  footer: "Москва · Санкт-Петербург",
  description: "Объёмный ретрознак Retroznak с подсветкой на фасаде исторического дома",
});

export const siteMetadata: SiteMetadata = {
  name: "Retroznak",
  brand: "Retroznak Land 2.0",
  title: "Retroznak Land 2.0 — объёмные ретрознаки и неоновые вывески",
  description:
    "Объёмные ретрознаки и неоновые вывески ручной работы. Производство, реставрация и монтаж исторических домовых табличек с современным качеством.",
  siteUrl: "https://retroznak.ru",
  locale: "ru_RU",
  keywords: [
    "ретрознак",
    "домовой знак",
    "неоновая вывеска",
    "адресная табличка",
    "retro sign",
    "объёмные буквы",
    "дизайн фасада",
    "вывеска на заказ",
  ],
  contactEmail: "hello@retrozna.ru",
  contactPhone: "+7 (999) 000-00-00",
  address: "Москва, ул. Ретрофасадная, 12",
  socialImage: ogCover,
  socialImageAlt: "Объёмный ретрознак Retroznak с подсветкой на фасаде исторического дома",
  telegramUrl: "https://t.me/retrozna",
  whatsappUrl: "https://wa.me/79990000000",
  organization: "ООО \"Три Кита\"",
};
