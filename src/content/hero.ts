import { createMockPhoto } from "@/lib/placeholders";
import type { HeroContent } from "@/types/content";

const heroVisualImage = createMockPhoto({
  width: 960,
  height: 640,
  title: "Retroznak №12",
  subtitle: "Подсветка 12 В и ручная эмаль",
  footer: "Монтаж за 45 минут",
  badge: { text: "Фасад Петроградки" },
  description: "Подсвечиваемый ретрознак на фасаде кирпичного дома",
});

export const heroContent: HeroContent = {
  eyebrow: "Проектируем и создаём",
  title: "Домовые знаки советской эпохи",
  subtitle:
    "Душевные адресные указатели из металла с подсветкой. От 1 990 рублей. Доставка в любую точку мира.",
  description:
    "Каждый ретрознак мы создаём вручную по архивным чертежам, сохраняя эстетику 1930–50-х и добавляя современную защиту.",
  primaryCta: {
    label: "Выбрать модель",
    targetId: "products",
    variant: "primary",
  },
  secondaryCta: {
    label: "Заказать бесплатный макет",
    targetId: "consultation",
    variant: "secondary",
  },
  visual: {
    image: heroVisualImage,
    alt: "Подсвечиваемый ретрознак на фасаде кирпичного дома",
    badge: {
      title: "Ретрознаки, популярные в 1930–50 гг.",
      description:
        "Именно такие адресные указатели вы видели в советских фильмах и на старых фотографиях.",
    },
  },
};
