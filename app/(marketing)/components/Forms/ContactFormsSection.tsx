import { contactFormsContent } from "@/content/forms";

import { CallbackForm } from "./CallbackForm";
import { ConsultationForm } from "./ConsultationForm";
import { QuestionForm } from "./QuestionForm";

export function ContactFormsSection() {
  const { eyebrow, title, description } = contactFormsContent;

  return (
    <section id="contact" className="border-t border-border/60 bg-retro-graphite/35 py-20">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-platinum">{eyebrow}</span>
          <h2 className="text-3xl font-semibold text-retro-ivory sm:text-4xl">{title}</h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <CallbackForm />
          <ConsultationForm />
          <QuestionForm className="lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}
