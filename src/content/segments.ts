import type { SegmentsContent } from "@/types/content";

export const segmentsContent: SegmentsContent = {
  title: "Ретрознаки подойдут практически всем",
  subtitle: "Создаём решения для частных проектов, коммерческих пространств и городских инициатив.",
  segments: [
    {
      id: "private-homes",
      title: "Частные дома и дачи",
      description: "Семейная история на фасаде и удобная навигация для гостей и служб доставки.",
      icon: "home",
    },
    {
      id: "restaurants",
      title: "Рестораны и кафе",
      description: "Атмосферная вывеска, которая усиливает концепцию и становится частью фотозон.",
      icon: "utensils",
    },
    {
      id: "museums",
      title: "Исторические здания и музеи",
      description: "Соответствие охранным требованиям и бережное восстановление городского кода.",
      icon: "landmark",
    },
    {
      id: "developers",
      title: "Девелоперы и управляющие компании",
      description: "Единый стиль квартала с гарантиями на производство и монтаж.",
      icon: "building",
    },
  ],
  cta: {
    label: "Получить подборку примеров",
    targetId: "callback",
    variant: "primary",
  },
};
