import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

import type { ContactFormSchema } from "@/validation/contactForm";
import { contactFormSchema } from "@/validation/contactForm";
import type { ContactFormResponse } from "@/types/forms";

export const runtime = "nodejs";

interface MailerConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  to: string;
  from: string;
}

const CONTACT_REASON_LABELS: Record<string, string> = {
  callback: "Запрос обратного звонка",
  consultation: "Заявка на консультацию",
  question: "Вопрос от клиента",
  timeline: "Исторический запрос",
  order: "Заказ ретрознака",
  support: "Поддержка",
};

const MESSENGER_LABELS: Record<string, string> = {
  phone: "Телефон",
  whatsapp: "WhatsApp",
  telegram: "Telegram",
  email: "Email",
  vk: "VK",
  youtube: "YouTube",
};

function resolveMailerConfig(): MailerConfig | null {
  const host = process.env.SMTP_HOST;
  const portString = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const to = process.env.MAIL_TO;
  const from = process.env.MAIL_FROM ?? user;
  const secureFlag = process.env.SMTP_SECURE;

  if (!host || !portString || !user || !pass || !to || !from) {
    return null;
  }

  const port = Number.parseInt(portString, 10);
  const secure = secureFlag ? secureFlag === "true" : port === 465;

  return {
    host,
    port: Number.isFinite(port) ? port : 587,
    secure,
    user,
    pass,
    to,
    from,
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatPlainText(payload: ContactFormSchema) {
  const lines: string[] = [];
  lines.push(`Тип запроса: ${CONTACT_REASON_LABELS[payload.contactReason] ?? payload.contactReason}`);
  lines.push(`Имя: ${payload.name}`);
  lines.push(`Телефон: ${payload.phone}`);
  if (payload.email) {
    lines.push(`Email: ${payload.email}`);
  }
  if (payload.messenger) {
    lines.push(`Предпочтительный канал: ${MESSENGER_LABELS[payload.messenger] ?? payload.messenger}`);
  }
  if (payload.city) {
    lines.push(`Город: ${payload.city}`);
  }
  if (payload.address) {
    lines.push(`Адрес или объект: ${payload.address}`);
  }
  if (payload.preferredTime) {
    lines.push(`Удобное время для связи: ${payload.preferredTime}`);
  }
  if (payload.projectType) {
    lines.push(`Тип проекта: ${payload.projectType}`);
  }
  if (payload.comment) {
    lines.push("Комментарий:");
    lines.push(payload.comment);
  }
  if (typeof payload.examplesRequested !== "undefined") {
    lines.push(`Примеры в мессенджере: ${payload.examplesRequested ? "Да" : "Нет"}`);
  }
  lines.push("Согласие на обработку данных: получено");
  lines.push(`Отправлено: ${new Date().toISOString()}`);
  return lines.join("\n");
}

function formatHtml(payload: ContactFormSchema) {
  const items: string[] = [
    `<li><strong>Имя:</strong> ${escapeHtml(payload.name)}</li>`,
    `<li><strong>Телефон:</strong> ${escapeHtml(payload.phone)}</li>`,
  ];

  if (payload.email) {
    items.push(`<li><strong>Email:</strong> ${escapeHtml(payload.email)}</li>`);
  }
  if (payload.messenger) {
    items.push(
      `<li><strong>Предпочтительный канал:</strong> ${escapeHtml(
        MESSENGER_LABELS[payload.messenger] ?? payload.messenger,
      )}</li>`,
    );
  }
  if (payload.city) {
    items.push(`<li><strong>Город:</strong> ${escapeHtml(payload.city)}</li>`);
  }
  if (payload.address) {
    items.push(`<li><strong>Адрес или объект:</strong> ${escapeHtml(payload.address)}</li>`);
  }
  if (payload.preferredTime) {
    items.push(`<li><strong>Удобное время:</strong> ${escapeHtml(payload.preferredTime)}</li>`);
  }
  if (payload.projectType) {
    items.push(`<li><strong>Тип проекта:</strong> ${escapeHtml(payload.projectType)}</li>`);
  }
  if (typeof payload.examplesRequested !== "undefined") {
    items.push(
      `<li><strong>Примеры в мессенджере:</strong> ${payload.examplesRequested ? "Да" : "Нет"}</li>`,
    );
  }

  const commentBlock = payload.comment
    ? `<p><strong>Комментарий:</strong><br />${escapeHtml(payload.comment)}</p>`
    : "";

  const submittedAt = new Date();
  const submittedDate = submittedAt.toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });

  return `
    <h2>Новая заявка с сайта Retroznak Land</h2>
    <p><strong>Тип запроса:</strong> ${escapeHtml(
      CONTACT_REASON_LABELS[payload.contactReason] ?? payload.contactReason,
    )}</p>
    <ul>
      ${items.join("\n")}
    </ul>
    ${commentBlock}
    <p><strong>Согласие на обработку данных:</strong> получено</p>
    <p style="font-size:12px;color:#888;">Отправлено: ${escapeHtml(submittedDate)}</p>
  `;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    const response: ContactFormResponse = {
      success: false,
      message: "Некорректный формат запроса",
      error: "Request body must be valid JSON",
      statusCode: 400,
    };
    return NextResponse.json(response, { status: 400 });
  }

  let payload: ContactFormSchema;
  try {
    payload = contactFormSchema.parse(body);
  } catch (error) {
    if (error instanceof ZodError) {
      const response: ContactFormResponse = {
        success: false,
        message: "Проверьте корректность заполнения формы",
        error: error.flatten().formErrors.join("; "),
        statusCode: 400,
      };
      return NextResponse.json(response, { status: 400 });
    }
    const response: ContactFormResponse = {
      success: false,
      message: "Произошла ошибка при обработке данных",
      error: error instanceof Error ? error.message : "Unknown error",
      statusCode: 400,
    };
    return NextResponse.json(response, { status: 400 });
  }

  const config = resolveMailerConfig();
  if (!config) {
    const response: ContactFormResponse = {
      success: false,
      message: "Сервис недоступен",
      error: "Mailer configuration is not complete",
      statusCode: 500,
    };
    return NextResponse.json(response, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });

    await transporter.sendMail({
      from: config.from,
      to: config.to,
      subject: `Retroznak · ${CONTACT_REASON_LABELS[payload.contactReason] ?? "Новая заявка"}`,
      text: formatPlainText(payload),
      html: formatHtml(payload),
      replyTo: payload.email ?? undefined,
    });

    const response: ContactFormResponse = {
      success: true,
      message: "Спасибо! Заявка успешно отправлена.",
      statusCode: 200,
    };
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    const response: ContactFormResponse = {
      success: false,
      message: "Не удалось отправить заявку",
      error: error instanceof Error ? error.message : "Unknown mailer error",
      statusCode: 500,
    };
    return NextResponse.json(response, { status: 500 });
  }
}
