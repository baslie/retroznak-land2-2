import type { NavigationContent } from "@/types/content";

export const navigationContent: NavigationContent = {
  menuItems: [
    { id: "catalog", label: "Каталог", targetId: "products" },
    { id: "history", label: "История", targetId: "timeline" },
    { id: "production", label: "Производство", targetId: "production" },
    { id: "reviews", label: "Отзывы", targetId: "reviews" },
    { id: "faq", label: "FAQ", targetId: "faq" },
  ],
  cta: {
    label: "Задать вопрос",
    targetId: "question",
    variant: "secondary",
  },
  messengers: [
    {
      platform: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/79990000000",
      description: "Напишите нам в WhatsApp",
    },
    {
      platform: "telegram",
      label: "Telegram",
      href: "https://t.me/retrozna",
      description: "Быстрые ответы и фото примеров",
    },
  ],
};
