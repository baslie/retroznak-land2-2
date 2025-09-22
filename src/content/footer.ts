import type { FooterContent } from "@/types/content";

export const footerContent: FooterContent = {
  menu: [
    {
      title: "Навигация",
      links: [
        { label: "Каталог", href: "#products" },
        { label: "История", href: "#timeline" },
        { label: "Производство", href: "#production" },
        { label: "Отзывы", href: "#reviews" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Службы",
      links: [
        { label: "Консультация", href: "#consultation" },
        { label: "Заказать звонок", href: "#callback" },
        { label: "Задать вопрос", href: "#question" },
      ],
    },
    {
      title: "Материалы",
      links: [
        { label: "Инструкция по монтажу", href: "/pdf/installation.pdf" },
        { label: "Уход за ретрознаком", href: "/pdf/care.pdf" },
        { label: "Блог о советской типографике", href: "https://example.com/blog" },
      ],
    },
  ],
  contacts: [
    {
      label: "Телефон",
      value: "+7 (999) 000-00-00",
      href: "tel:+79990000000",
    },
    {
      label: "Email",
      value: "hello@retrozna.ru",
      href: "mailto:hello@retrozna.ru",
    },
    {
      label: "Адрес",
      value: "Москва, ул. Ретрофасадная, 12",
    },
  ],
  messengers: [
    {
      platform: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/79990000000",
      description: "Ответим за 10 минут",
    },
    {
      platform: "telegram",
      label: "Telegram",
      href: "https://t.me/retrozna",
      description: "Менеджер онлайн 10:00–22:00",
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
  legal: "ООО \"Три Кита\" · ОГРН 1177746670000",
  copyright: "© 2017–2025 ООО \"Три Кита\". Все права защищены.",
};
