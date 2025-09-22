import type { Metadata } from "next";

const title = "Уход и обслуживание ретрознака";
const description =
  "Рекомендации по регулярному обслуживанию ретрознаков Retroznak: чистка, сезонная проверка и хранение аксессуаров.";

export const metadata: Metadata = {
  title,
  description,
};

const maintenanceChecks = [
  {
    title: "Ежемесячная чистка",
    items: [
      "Протрите лицевую панель мягкой микрофиброй, смоченной в растворе для деликатных поверхностей.",
      "Избегайте абразивных средств и спиртовых растворителей, чтобы не повредить покрытие.",
      "Проверьте отсутствие трещин и сколов на декоративных элементах.",
    ],
  },
  {
    title: "Сезонная проверка",
    items: [
      "Осмотрите кабельные вводы и герметизацию — при необходимости обновите защитный герметик.",
      "Перепроверьте момент затяжки крепёжных элементов, особенно после сильных ветров и морозов.",
      "Убедитесь, что система дренажа фасада не направляет воду на ретрознак.",
    ],
  },
  {
    title: "Электрика и подсветка",
    items: [
      "Каждые полгода проводите тест подсветки: стабильность свечения, отсутствие мерцания и перегрева.",
      "Почистите вентиляционные отверстия блока питания от пыли и следите за свободной циркуляцией воздуха.",
      "В случае замены LED-лент используйте оригинальные комплектующие Retroznak.",
    ],
  },
];

const storageTips = [
  "Храните сменные панели и крепёж в сухом помещении при температуре от +5 до +25 °C.",
  "Используйте фирменные упаковочные материалы для перевозки, чтобы избежать повреждений.",
  "Перед длительным отключением согласуйте процедуру консервации с менеджером Retroznak.",
];

const updatedYear = new Date().getFullYear();

export default function CareGuidePage() {
  return (
    <main className="bg-retro-charcoal text-retro-ivory">
      <section className="container space-y-10 py-16">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-platinum">Документы</span>
          <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
          <p className="max-w-3xl text-base text-muted-foreground">{description}</p>
        </div>

        <article className="space-y-12 rounded-3xl border border-border/70 bg-retro-graphite/80 p-8">
          <p className="text-sm text-muted-foreground">
            Соблюдение регламента обслуживания помогает сохранить внешний вид и гарантию на продукцию Retroznak. Если вы
            обслуживаете ретрознак самостоятельно, фиксируйте выполненные работы в журнале и передавайте копию менеджеру
            проекта.
          </p>

          <div className="space-y-10">
            {maintenanceChecks.map((check) => (
              <section key={check.title} className="space-y-4">
                <h2 className="text-2xl font-semibold text-retro-ivory">{check.title}</h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {check.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-accent-platinum" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="rounded-2xl border border-border/60 bg-retro-charcoal/80 p-6">
            <h2 className="text-xl font-semibold text-retro-ivory">Хранение аксессуаров</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {storageTips.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-accent-platinum" aria-hidden />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <p className="text-xs text-muted-foreground/80">
          Документ обновлён {updatedYear} Retroznak. За PDF-версией с фирменными реквизитами обратитесь к менеджеру
          проекта.
        </p>
      </section>
    </main>
  );
}
