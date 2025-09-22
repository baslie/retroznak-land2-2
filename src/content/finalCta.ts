import type { FinalCtaContent } from "@/types/content";

export const finalCtaContent: FinalCtaContent = {
  title: "Превратите адрес в часть семейной истории",
  subtitle:
    "Получите бесплатный макет и забронируйте производство на удобную дату.",
  triggers: [
    {
      id: "guarantee",
      title: "Гарантия 5 лет",
      description: "На подсветку и покрытие — документально подтверждена.",
    },
    {
      id: "speed",
      title: "Производство 7 дней",
      description: "Максимально быстрый цикл без потери качества.",
    },
    {
      id: "delivery",
      title: "Доставка по России",
      description: "Отправляем через проверенных партнёров и страхуем груз.",
    },
    {
      id: "example",
      title: "Примеры установленных знаков",
      description: "Покажем, как ретрознак выглядит на фасадах клиентов.",
    },
  ],
  primaryCta: {
    label: "Заказать ретрознак сейчас",
    targetId: "consultation",
    variant: "primary",
  },
  secondaryCta: {
    label: "Получить консультацию",
    targetId: "messengers",
    variant: "secondary",
    description: "Выберите удобный мессенджер или отсканируйте QR-код.",
  },
  messengers: [
    {
      platform: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/79990000000",
      description: "Ответим в течение 10 минут",
      qrCodeImage: "/images/qr/whatsapp.png",
    },
    {
      platform: "telegram",
      label: "Telegram",
      href: "https://t.me/retrozna",
      description: "Онлайн ежедневно 10:00–22:00",
      qrCodeImage: "/images/qr/telegram.png",
    },
  ],
  resources: [
    {
      label: "Инструкция по монтажу (PDF)",
      href: "/pdf/installation.pdf",
      type: "pdf",
    },
    {
      label: "Уход за ретрознаком (PDF)",
      href: "/pdf/care.pdf",
      type: "pdf",
    },
    {
      label: "Блог о советской типографике",
      href: "https://example.com/blog",
      type: "article",
    },
  ],
  socials: [
    {
      platform: "vk",
      label: "VK",
      href: "https://vk.com/retrozna",
    },
    {
      platform: "youtube",
      label: "YouTube",
      href: "https://youtube.com/@retrozna",
    },
    {
      platform: "telegram",
      label: "Telegram",
      href: "https://t.me/retrozna",
    },
  ],
  legalNotice: "ООО \"Три Кита\" · ОГРН 1177746670000 · Москва, ул. Ретрофасадная, 12",
  copyright: "© 2017–2025 ООО \"Три Кита\". Все права защищены.",
};
