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
      image: "/images/reviews/maria.jpg",
    },
    {
      id: "review-2",
      name: "Кафе \"Север\"",
      role: "Ресторан в Санкт-Петербурге",
      rating: 5,
      text: "Гости постоянно фотографируются у входа. Ретрознак стал узнаваемой точкой, и продажи мерча выросли.",
      image: "/images/reviews/cafe.jpg",
    },
    {
      id: "review-3",
      name: "Музей \"Городская история\"",
      role: "Экспозиция о Ленинграде",
      rating: 5,
      text: "Получили точную копию таблички из 40-х. В комплекте прислали архивные материалы и рекомендации по уходу.",
      image: "/images/reviews/museum.jpg",
    },
  ],
  cta: {
    label: "Хочу себе такой же!",
    targetId: "consultation",
    variant: "primary",
  },
};
