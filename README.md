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

## Руководство по запуску проекта на Windows для тестирования
Ниже приведён пошаговый сценарий, который позволит поднять локальную копию Retroznak Land 2.0 на Windows 10/11 для внутренних проверок.

### 1. Подготовка окружения
1. Обновите систему через **Настройки → Центр обновления Windows**, чтобы исключить конфликты драйверов и безопасности.
2. Установите [Windows Terminal](https://aka.ms/terminal) или используйте PowerShell 7+ (рекомендуется для корректной работы npm-скриптов).
3. Установите **Git for Windows** с официального сайта, убедитесь, что в PowerShell доступна команда `git`:
   ```powershell
   git --version
   ```
4. Установите Node.js LTS одним из способов:
   - через [nvm-windows](https://github.com/coreybutler/nvm-windows/releases):
     ```powershell
     nvm install 20.12.2
     nvm use 20.12.2
     node -v
     npm -v
     ```
   - либо скачайте готовый установщик [с официального сайта Node.js](https://nodejs.org/en/download) и после установки проверьте версии.
5. (Опционально) Настройте редактор кода с поддержкой TypeScript (VS Code) и установите рекомендуемые расширения ESLint и Tailwind CSS IntelliSense.

### 2. Клонирование репозитория
1. Создайте рабочую директорию, например `C:\Projects`.
2. В PowerShell выполните:
   ```powershell
   cd C:\Projects
   git clone https://github.com/<your-org>/retroznak-land2-2.git
   cd retroznak-land2-2
   ```
3. Если используются SSH-ключи, предварительно добавьте их через `ssh-keygen` и `ssh-agent` либо используйте менеджер ключей GitHub for Windows.

### 3. Настройка переменных окружения
1. Скопируйте файл примера переменных окружения:
   ```powershell
   Copy-Item .env.example .env.local
   ```
2. Откройте `.env.local` в редакторе и задайте тестовые значения:
   - SMTP-хост: `smtp.ethereal.email` или локальный MailHog.
   - SMTP-порт: `587`.
   - Учётные данные SMTP-тестового ящика (для Ethereal получите из их панели).
   - `MAIL_FROM`, `MAIL_TO` — реальные адреса для проверки почтовой доставки (можно указать один и тот же).
   - Публичные ключи аналитики можно оставить пустыми либо использовать заглушки.

### 4. Установка зависимостей
1. Убедитесь, что в каталоге присутствует `package.json`.
2. Выполните установку:
   ```powershell
   npm install
   ```
3. После завершения проверьте наличие каталога `node_modules` и отсутствие критических ошибок в консоли.

### 5. Запуск дев-сервера
1. Запустите проект:
   ```powershell
   npm run dev
   ```
2. Откройте браузер и перейдите на `http://localhost:3000`.
3. Проверьте отображение всех секций лендинга, работу адаптивного меню (переключение ширины окна) и Swiper-слайдеров.
4. Отправьте каждую из форм (Callback, Consultation, Question) и убедитесь, что появляется toast-уведомление и в консоли PowerShell нет ошибок API.

### 6. Автоматические проверки
После ручного просмотра выполните набор скриптов качества (каждый запускается в отдельной вкладке терминала или последовательно после остановки dev-сервера `Ctrl+C`):

```powershell
npm run lint
npm run typecheck
npm run test
```

Если тесты пока отсутствуют, команда `npm run test` завершится успешно с уведомлением-заглушкой.

### 7. Предварительная production-сборка (опционально)
1. Соберите проект:
   ```powershell
   npm run build
   ```
2. Проверьте production-сборку:
   ```powershell
   npm run start
   ```
3. Откройте новое окно браузера и убедитесь, что приложение отвечает на `http://localhost:3000`. По окончании остановите сервер `Ctrl+C`.

### 8. Частые проблемы и решения
- **Конфликт портов 3000** — проверьте, нет ли других запущенных приложений; измените порт командой `set PORT=3001; npm run dev` (для текущей сессии PowerShell).
- **Отсутствие OpenSSL в Windows** — для работы Nodemailer с TLS убедитесь, что в системе установлен пакет OpenSSL (поставляется вместе с Node.js) или используйте SMTP без шифрования на тестовом окружении (`SMTP_SECURE=false`).
- **Ошибки npm при доступе к сети** — при корпоративных прокси настройте переменные `npm config set proxy http://proxy:8080` и `npm config set https-proxy http://proxy:8080`.
- **Проблемы с правами доступа** — запускайте PowerShell от имени пользователя (не администратора) и храните проект в директории, не требующей дополнительных разрешений (например, вне `C:\Program Files`).

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
