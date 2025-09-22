import type { ContactFormDefinition } from "@/types/forms";

const messengerOptions: ContactFormDefinition["fields"][number]["options"] = [
  { label: "WhatsApp", value: "whatsapp" },
  { label: "Telegram", value: "telegram" },
  { label: "Телефон", value: "phone" },
  { label: "Email", value: "email" },
];

export const contactFormsContent = {
  eyebrow: "Связаться с нами",
  title: "Оставьте заявку на ретрознак",
  description:
    "Ответим на вопросы, подготовим подборку примеров и пришлём бесплатный макет в течение рабочего дня.",
  forms: {
    callback: {
      id: "callback",
      title: "Заказать обратный звонок",
      description:
        "Мы перезвоним в течение 15 минут в рабочее время и подберём примеры реализованных проектов.",
      submitLabel: "Жду звонка",
      successMessage: "Спасибо! Мы свяжемся с вами в течение рабочего времени.",
      contactReason: "callback",
      fields: [
        {
          name: "name",
          label: "Ваше имя",
          placeholder: "Как к вам обращаться",
          type: "text",
          required: true,
          autoComplete: "name",
        },
        {
          name: "phone",
          label: "Телефон",
          placeholder: "+7 (___) ___-__-__",
          type: "tel",
          required: true,
          autoComplete: "tel",
          inputMode: "tel",
        },
        {
          name: "messenger",
          label: "Предпочтительный канал",
          placeholder: "Выберите вариант",
          type: "select",
          options: messengerOptions,
          helperText: "Укажем ссылку или пришлём сообщение в выбранном канале.",
        },
        {
          name: "preferredTime",
          label: "Удобное время",
          placeholder: "Например, будни после 18:00",
          type: "text",
        },
        {
          name: "comment",
          label: "Комментарий",
          placeholder: "Расскажите, что вас интересует",
          type: "textarea",
          rows: 3,
        },
        {
          name: "consent",
          label: "Соглашаюсь на обработку персональных данных",
          type: "checkbox",
          required: true,
        },
      ],
    } satisfies ContactFormDefinition,
    consultation: {
      id: "consultation",
      title: "Получить расчёт и макет",
      description:
        "Расскажем о сроках, подготовим коммерческое предложение и отправим макет в течение 2 часов.",
      submitLabel: "Отправить заявку",
      successMessage: "Спасибо! Мы подготовим расчёт и ответим в ближайшее время.",
      contactReason: "consultation",
      aliasTargetIds: ["timeline-form", "custom-project"],
      fields: [
        {
          name: "name",
          label: "Ваше имя",
          placeholder: "Как к вам обращаться",
          type: "text",
          required: true,
          autoComplete: "name",
        },
        {
          name: "phone",
          label: "Телефон",
          placeholder: "+7 (___) ___-__-__",
          type: "tel",
          required: true,
          autoComplete: "tel",
          inputMode: "tel",
        },
        {
          name: "city",
          label: "Город",
          placeholder: "Где расположен объект",
          type: "text",
          required: true,
          autoComplete: "address-level2",
        },
        {
          name: "address",
          label: "Адрес или объект",
          placeholder: "Например, Москва, ул. Историческая, 12",
          type: "text",
          helperText: "Нужно для подбора примеров и расчёта доставки.",
          autoComplete: "street-address",
        },
        {
          name: "messenger",
          label: "Как связаться",
          placeholder: "Выберите вариант",
          type: "select",
          required: true,
          options: messengerOptions,
        },
        {
          name: "examplesRequested",
          label: "Хочу подборку примеров в WhatsApp / Telegram",
          type: "checkbox",
        },
        {
          name: "comment",
          label: "Комментарий",
          placeholder: "Расскажите про проект, размеры или пожелания",
          type: "textarea",
          rows: 4,
        },
        {
          name: "consent",
          label: "Соглашаюсь на обработку персональных данных",
          type: "checkbox",
          required: true,
        },
      ],
    } satisfies ContactFormDefinition,
    question: {
      id: "question",
      title: "Задать вопрос",
      description:
        "Ответим на любой вопрос о материалах, доставке или индивидуальном изготовлении ретрознаков.",
      submitLabel: "Отправить",
      successMessage: "Спасибо! Мы подготовим ответ и свяжемся с вами.",
      contactReason: "question",
      fields: [
        {
          name: "name",
          label: "Ваше имя",
          placeholder: "Как к вам обращаться",
          type: "text",
          required: true,
          autoComplete: "name",
        },
        {
          name: "email",
          label: "Email",
          placeholder: "name@example.com",
          type: "email",
          required: true,
          autoComplete: "email",
        },
        {
          name: "phone",
          label: "Телефон",
          placeholder: "Для оперативной связи",
          type: "tel",
          autoComplete: "tel",
          inputMode: "tel",
        },
        {
          name: "comment",
          label: "Ваш вопрос",
          placeholder: "Опишите, что вы хотите уточнить",
          type: "textarea",
          rows: 4,
          required: true,
        },
        {
          name: "consent",
          label: "Соглашаюсь на обработку персональных данных",
          type: "checkbox",
          required: true,
        },
      ],
    } satisfies ContactFormDefinition,
  },
} as const;

export type ContactFormContent = typeof contactFormsContent;
