# Retroznak Land 2.0

Каркас маркетингового лендинга Retroznak на Next.js 15 с App Router и TypeScript. Репозиторий собирается по этапам, описанным в [`AGENTS.md`](./AGENTS.md).

## Стек и инфраструктура
- [Next.js 15](https://nextjs.org/) в режиме App Router.
- TypeScript с строгой проверкой типов (`npm run typecheck`).
- PostCSS с подключённым Tailwind CSS 4 (настройка темы выполняется на следующем этапе).
- ESLint (конфигурация `next/core-web-vitals`).

## Скрипты
| Команда | Назначение |
| --- | --- |
| `npm run dev` | Запуск дев-сервера на `http://localhost:3000`. |
| `npm run build` | Production-сборка проекта. |
| `npm run start` | Запуск production-сервера после сборки. |
| `npm run lint` | Проверка качества кода (ESLint). |
| `npm run typecheck` | Проверка типов без генерации артефактов. |
| `npm run test` | Временная заглушка до появления юнит-тестов. |

## Структура проекта
```
app/
  (marketing)/
    components/
    layout.tsx
    page.tsx
  api/forms/contact/
  layout.tsx
  page.tsx
public/
  images/
  pdf/
src/
  content/
  hooks/
  lib/
  styles/globals.css
  types/
```

## Дальнейшие шаги
1. Настроить дизайн-систему: Tailwind CSS, shadcn/ui и фирменные шрифты.
2. Подготовить контентный слой и утилиты (`src/content`, `src/types`, `src/lib`).
3. Реализовать маркетинговые секции и интегрировать формы обратной связи.
