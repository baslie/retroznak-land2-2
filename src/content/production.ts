import { createMockPhoto } from "@/lib/placeholders";
import type { ProductionContent } from "@/types/content";

export const productionContent: ProductionContent = {
  title: "От эскиза до готового знака",
  subtitle:
    "Полный цикл создания ретрознаков в одной мастерской — от архивных исследований до упаковки и доставки.",
  steps: [
    {
      id: "design",
      title: "Разрабатываем макет",
      description: "Готовим 2–3 варианта дизайна с учётом фасада, освещения и пожеланий заказчика.",
      icon: "pen",
    },
    {
      id: "manufacturing",
      title: "Изготавливаем вручную",
      description: "Режем металл, наносим грунт и эмаль, собираем корпус и подготавливаем подсветку.",
      icon: "hammer",
    },
    {
      id: "quality",
      title: "Проверяем качество",
      description: "Контроль по 7 параметрам: покрытие, геометрия, яркость подсветки, комплектность и безопасность.",
      icon: "shield",
    },
    {
      id: "delivery",
      title: "Упаковываем и доставляем",
      description: "Используем усиленную коробку с пенопластом, готовим фотоотчёт и передаём заказ в службу доставки.",
      icon: "truck",
    },
  ],
  team: [
    {
      id: "anna",
      name: "Анна Лебедева",
      role: "Художник по эмали",
      experience: "6 лет в реставрации",
      image: createMockPhoto({
        width: 520,
        height: 640,
        title: "Анна Л.",
        subtitle: "Художник по эмали",
        footer: "6 лет в реставрации",
        description: "Портрет Анны Лебедевой, художника по эмали",
      }),
    },
    {
      id: "dmitry",
      name: "Дмитрий Соколов",
      role: "Технолог",
      experience: "12 лет в металлообработке",
      image: createMockPhoto({
        width: 520,
        height: 640,
        title: "Дмитрий С.",
        subtitle: "Технолог",
        footer: "12 лет опыта",
        description: "Портрет Дмитрия Соколова, технолога мастерской",
      }),
    },
    {
      id: "svetlana",
      name: "Светлана Орлова",
      role: "Менеджер по заказам",
      experience: "Отвечает на заявки и координирует монтаж",
      image: createMockPhoto({
        width: 520,
        height: 640,
        title: "Светлана О.",
        subtitle: "Менеджер",
        footer: "Координация заказов",
        description: "Портрет Светланы Орловой, менеджера по заказам",
      }),
    },
  ],
  metrics: [
    {
      id: "monthly",
      label: "100 знаков",
      value: "в месяц",
      description: "Производим без потери качества и сроков",
    },
    {
      id: "returning",
      label: "37%",
      value: "клиентов возвращаются",
      description: "за дополнительными табличками или подарками",
    },
    {
      id: "claims",
      label: "0",
      value: "рекламаций",
      description: "за 2025 год",
    },
  ],
};
