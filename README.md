# Retroznak Land 2.0

Каркас маркетингового лендинга Retroznak на Next.js 15 с App Router и TypeScript. Репозиторий собирается по этапам, описанным в [`AGENTS.md`](./AGENTS.md).

## Стек и инфраструктура
- [Next.js 15](https://nextjs.org/) в режиме App Router.
- TypeScript со строгой проверкой типов (`npm run typecheck`).
- Tailwind CSS + кастомная ретро-тема и компоненты shadcn/ui.
- ESLint (`next/core-web-vitals`), Vitest и Nodemailer для форм обратной связи.

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
  docs/
    care/
    installation/
  layout.tsx
  page.tsx
public/
  favicon.svg
  safari-pinned-tab.svg
  site.webmanifest
src/
  content/
  hooks/
  lib/
  styles/globals.css
  types/
```

## SEO, метаданные и доступность
- Глобальные метаданные формируются через Metadata API в `app/layout.tsx`.
- Открытая графика и предпросмотры: динамически генерируемый SVG из `src/lib/placeholders.ts`, `site.webmanifest`, `app/sitemap.ts`, `app/robots.ts`.
- Фавиконки и маски для Safari хранятся в `public/` и автоматически подключаются.

## Аналитика и события
- Клиентский провайдер `AnalyticsProvider` инициализирует `lib/analytics` и отслеживает просмотры страниц.
- Отправка контактных форм фиксирует событие `contact_form_submitted` с типом обращения и дополнительными параметрами.
- Конфигурация аналитики выносится в `src/config/analytics.ts` и управляется переменными окружения.

## Переменные окружения
| Переменная | Назначение | Значение по умолчанию |
| --- | --- | --- |
| `NEXT_PUBLIC_ANALYTICS_PROJECT_ID` | Идентификатор проекта аналитики (Amplitude/Яндекс.Метрика и т.п.) | не задано |
| `NEXT_PUBLIC_ANALYTICS_DEBUG` | Включает режим логирования событий в консоль | `false` |
| `NEXT_PUBLIC_APP_ENV` | Явное имя окружения (`development`, `staging`, `production`) | `process.env.NODE_ENV` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Токен подтверждения домена для Google Search Console | не задано |
| `NEXT_PUBLIC_YANDEX_VERIFICATION` | Токен подтверждения домена для Яндекс.Вебмастера | не задано |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE` | Настройки SMTP для API `/api/forms/contact` | обязательны на проде |
| `SMTP_USER`, `SMTP_PASSWORD` | Учетные данные почтового аккаунта | обязательны |
| `MAIL_FROM`, `MAIL_TO` | Отправитель и получатель писем | обязательны |

## Проверки качества перед релизом
1. `npm run lint`
2. `npm run typecheck`
3. `npm run test`
4. `npm run build`
5. `npm run start` — smoke-тест production-сборки и ручной прогон форм.

## Статические материалы и документация
- Фотографии и QR-коды формируются на лету функциями `createMockPhoto` и `createQrPlaceholder` из `src/lib/placeholders.ts`, что позволяет обойтись без бинарных ассетов в репозитории.
- Шрифты Manrope и Noto Serif задаются через CSS-переменные с системными fallback-гарнитурами; локальные бинарные файлы не требуются.
- Раздел `/docs/installation` и `/docs/care` в App Router публикует текстовые инструкции по монтажу и обслуживанию.
- PDF-версии документов поставляются вне репозитория (бинарные файлы не отслеживаются) и подключаются на продакшене через CDN или хранилище.

## Деплой на Beget
1. На сервере выполнить `git pull && npm ci`.
2. Собрать проект `npm run build` и запустить `npm run start` (или обновить процесс в PM2).
3. Задать переменные окружения (`.env.production`) с актуальными SMTP и аналитикой.
4. Проверить `/api/forms/contact`, корректное отображение иллюстраций в секциях лендинга и страницы `/docs/installation`, `/docs/care`.
5. Зафиксировать успешный релиз в чек-листе `AGENTS.md`.
