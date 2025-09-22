"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

import { useContactForm } from "@/hooks/useContactForm";
import type { ContactFormDefinition } from "@/types/forms";
import { contactFormSchema } from "@/validation/contactForm";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type ContactFormValues = z.input<typeof contactFormSchema>;

type ContactFormSubmission = z.infer<typeof contactFormSchema>;

export interface ContactFormProps {
  definition: ContactFormDefinition;
  className?: string;
}

export function ContactForm({ definition, className }: ContactFormProps) {
  const defaultValues = useMemo<ContactFormValues>(
    () => ({
      name: "",
      phone: "",
      city: "",
      address: "",
      email: "",
      messenger: "",
      preferredTime: "",
      contactReason: definition.contactReason,
      comment: "",
      projectType: "",
      examplesRequested: false,
      consent: false,
    }),
    [definition.contactReason],
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onSubmit",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  const { submit, status, error: submitError, response } = useContactForm();

  const onSubmit = handleSubmit(async (values) => {
    const parsed: ContactFormSubmission = contactFormSchema.parse({
      ...values,
      contactReason: definition.contactReason,
    });

    const result = await submit(parsed);

    if (result.success) {
      trackEvent({
        name: "contact_form_submitted",
        properties: {
          contactReason: definition.contactReason,
          hasEmail: Boolean(parsed.email),
          hasComment: Boolean(parsed.comment),
        },
      });
      reset({ ...defaultValues, consent: false });
    }
  });

  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <article
      id={definition.id}
      className={cn(
        "space-y-6 rounded-3xl border border-border/70 bg-retro-charcoal/85 p-8 shadow-glow",
        className,
      )}
    >
      {definition.aliasTargetIds?.map((alias) => (
        <div key={alias} id={alias} aria-hidden className="sr-only" />
      ))}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-retro-ivory">{definition.title}</h3>
        {definition.description ? (
          <p className="text-sm text-muted-foreground">{definition.description}</p>
        ) : null}
      </div>
      <form className="space-y-4" onSubmit={onSubmit} noValidate>
        <input
          type="hidden"
          value={definition.contactReason}
          {...register("contactReason")}
        />
        {definition.fields.map((field) => {
          const fieldError = errors[field.name]?.message;

          if (field.type === "checkbox") {
            return (
              <div key={field.name as string} className="space-y-2">
                <div className="flex items-start gap-3 rounded-2xl bg-retro-graphite/60 p-3">
                  <Checkbox
                    id={`${definition.id}-${String(field.name)}`}
                    {...register(field.name as keyof ContactFormValues, {
                      required: field.required,
                    })}
                    aria-invalid={Boolean(fieldError) || undefined}
                    required={field.required}
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor={`${definition.id}-${String(field.name)}`}
                    className="text-sm text-muted-foreground"
                  >
                    {field.label}
                  </label>
                </div>
                {fieldError ? (
                  <p className="text-xs text-rose-300">{String(fieldError)}</p>
                ) : null}
              </div>
            );
          }

          if (field.type === "textarea") {
            return (
              <div key={field.name as string} className="space-y-2">
                <label
                  htmlFor={`${definition.id}-${String(field.name)}`}
                  className="text-sm font-medium text-retro-ivory"
                >
                  {field.label}
                </label>
                <Textarea
                  id={`${definition.id}-${String(field.name)}`}
                  placeholder={field.placeholder}
                  rows={field.rows ?? 4}
                  {...register(field.name as keyof ContactFormValues, {
                    required: field.required,
                  })}
                  aria-invalid={Boolean(fieldError) || undefined}
                  required={field.required}
                  disabled={isSubmitting}
                />
                {field.helperText ? (
                  <p className="text-xs text-muted-foreground/80">{field.helperText}</p>
                ) : null}
                {fieldError ? (
                  <p className="text-xs text-rose-300">{String(fieldError)}</p>
                ) : null}
              </div>
            );
          }

          if (field.type === "select") {
            return (
              <div key={field.name as string} className="space-y-2">
                <label
                  htmlFor={`${definition.id}-${String(field.name)}`}
                  className="text-sm font-medium text-retro-ivory"
                >
                  {field.label}
                </label>
                <Select
                  id={`${definition.id}-${String(field.name)}`}
                  defaultValue=""
                  {...register(field.name as keyof ContactFormValues, {
                    required: field.required,
                  })}
                  aria-invalid={Boolean(fieldError) || undefined}
                  required={field.required}
                  disabled={isSubmitting}
                >
                  <option value="" disabled>
                    {field.placeholder ?? "Выберите вариант"}
                  </option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                {field.helperText ? (
                  <p className="text-xs text-muted-foreground/80">{field.helperText}</p>
                ) : null}
                {fieldError ? (
                  <p className="text-xs text-rose-300">{String(fieldError)}</p>
                ) : null}
              </div>
            );
          }

          return (
            <div key={field.name as string} className="space-y-2">
              <label
                htmlFor={`${definition.id}-${String(field.name)}`}
                className="text-sm font-medium text-retro-ivory"
              >
                {field.label}
              </label>
              <Input
                id={`${definition.id}-${String(field.name)}`}
                type={field.type === "tel" ? "tel" : field.type === "email" ? "email" : "text"}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                {...register(field.name as keyof ContactFormValues, {
                  required: field.required,
                })}
                aria-invalid={Boolean(fieldError) || undefined}
                required={field.required}
                disabled={isSubmitting}
              />
              {field.helperText ? (
                <p className="text-xs text-muted-foreground/80">{field.helperText}</p>
              ) : null}
              {fieldError ? <p className="text-xs text-rose-300">{String(fieldError)}</p> : null}
            </div>
          );
        })}
        <Button type="submit" className="w-full justify-center" disabled={isSubmitting}>
          {isSubmitting ? "Отправляем..." : definition.submitLabel}
        </Button>
        <div className="space-y-2 text-sm">
          {isSuccess ? (
            <p
              className="rounded-2xl border border-accent-platinum/40 bg-retro-graphite/60 px-4 py-3 text-accent-platinum"
              role="status"
            >
              {response?.message ?? definition.successMessage}
            </p>
          ) : null}
          {isError || submitError ? (
            <p className="rounded-2xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-rose-200" role="alert">
              {submitError ?? "Не удалось отправить заявку. Попробуйте ещё раз."}
            </p>
          ) : null}
        </div>
      </form>
    </article>
  );
}
