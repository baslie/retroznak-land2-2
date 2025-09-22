import { z } from "zod";

import { MESSENGER_PLATFORMS } from "@/types/content";
import { CONTACT_REASONS } from "@/types/forms";

function requiredTrimmedString(fieldName: string, options: { min: number; max: number }) {
  const { min, max } = options;
  return z
    .string()
    .trim()
    .min(min, { message: `${fieldName} должно содержать не менее ${min} символов` })
    .max(max, { message: `${fieldName} должно содержать не более ${max} символов` });
}

function optionalTrimmedString(fieldName: string, options: { min?: number; max?: number }) {
  const { min, max } = options;
  return z
    .union([z.string(), z.undefined(), z.null()])
    .transform((value) => {
      if (typeof value !== "string") {
        return undefined;
      }
      const trimmed = value.trim();
      return trimmed.length === 0 ? undefined : trimmed;
    })
    .superRefine((value, ctx) => {
      if (!value) {
        return;
      }
      if (typeof min === "number" && value.length < min) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${fieldName} должно содержать не менее ${min} символов`,
        });
      }
      if (typeof max === "number" && value.length > max) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${fieldName} должно содержать не более ${max} символов`,
        });
      }
    });
}

const optionalEmail = optionalTrimmedString("Email", { max: 160 }).superRefine((value, ctx) => {
  if (!value) {
    return;
  }
  const emailRegex = /^(?:[^\s@]+)@(?:[^\s@]+)\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Введите корректный email",
    });
  }
});

const optionalMessenger = z
  .union([z.enum(MESSENGER_PLATFORMS), z.literal(""), z.undefined(), z.null()])
  .transform((value) => {
    if (!value) {
      return undefined;
    }
    return value;
  });

const optionalBoolean = z
  .union([z.boolean(), z.undefined(), z.null()])
  .transform((value) => (typeof value === "boolean" ? value : undefined));

const consentSchema = z
  .union([z.boolean(), z.undefined(), z.null()])
  .transform((value) => value === true)
  .refine((value) => value === true, {
    message: "Необходимо согласиться с обработкой персональных данных",
  });

export const contactFormSchema = z.object({
  name: requiredTrimmedString("Имя", { min: 2, max: 120 }),
  phone: requiredTrimmedString("Телефон", { min: 5, max: 32 }),
  city: optionalTrimmedString("Город", { min: 2, max: 120 }),
  address: optionalTrimmedString("Адрес", { max: 160 }),
  email: optionalEmail,
  messenger: optionalMessenger,
  preferredTime: optionalTrimmedString("Удобное время", { max: 120 }),
  contactReason: z.enum(CONTACT_REASONS),
  comment: optionalTrimmedString("Комментарий", { max: 1200 }),
  projectType: optionalTrimmedString("Тип проекта", { max: 160 }),
  examplesRequested: optionalBoolean,
  consent: consentSchema,
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
