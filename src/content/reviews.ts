import { createMockPhoto } from "@/lib/placeholders";
import type { ReviewsContent } from "@/types/content";

export const reviewsContent: ReviewsContent = {
  title: "Более 3000 довольных владельцев ретрознаков",
  subtitle: "Реальные истории клиентов, которые вернули характер своим домам.",
  reviews: [
    {
      id: "review-1",
      name: "Мария, Москва",
      role: "Владелица исторического дома",
      rating: 5,
      text: "Заказали ретрознак для фасада дома 1936 года. Команда помогла подобрать шрифт и цвет, а монтаж занял всего 20 минут.",
      image: createMockPhoto({
        width: 560,
        height: 560,
        title: "Мария",
        subtitle: "Москва",
        footer: "Исторический дом",
        description: "Мария, владелица исторического дома, делится отзывом",
      }),
    },
    {
      id: "review-2",
      name: "Кафе \"Север\"",
      role: "Ресторан в Санкт-Петербурге",
      rating: 5,
      text: "Гости постоянно фотографируются у входа. Ретрознак стал узнаваемой точкой, и продажи мерча выросли.",
      image: createMockPhoto({
        width: 560,
        height: 560,
        title: "Кафе \"Север\"",
        subtitle: "Санкт-Петербург",
        footer: "Фасад",
        description: "Кафе \"Север\" рассказывает об опыте установки ретрознака",
      }),
    },
    {
      id: "review-3",
      name: "Музей \"Городская история\"",
      role: "Экспозиция о Ленинграде",
      rating: 5,
      text: "Получили точную копию таблички из 40-х. В комплекте прислали архивные материалы и рекомендации по уходу.",
      image: createMockPhoto({
        width: 560,
        height: 560,
        title: "Музей",
        subtitle: "Городская история",
        footer: "Ленинград",
        description: "Музей \"Городская история\" рассказывает о реплике таблички",
      }),
    },
  ],
  cta: {
    label: "Хочу себе такой же!",
    targetId: "consultation",
    variant: "primary",
  },
};
