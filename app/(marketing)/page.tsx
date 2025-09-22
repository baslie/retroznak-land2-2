const sections = [
  {
    id: "hero",
    title: "Retroznak 2.0",
    description:
      "Маркетинговый лендинг в разработке. Здесь появится погружение в атмосферу неона и металла.",
  },
  {
    id: "about",
    title: "О производстве",
    description:
      "Расскажем о материалах, этапах изготовления и контроле качества, как только соберём контентный слой.",
  },
  {
    id: "contact",
    title: "Связаться с нами",
    description:
      "Команды CTA и формы появятся после интеграции React Hook Form и API-роутов.",
  },
];

export default function MarketingHomePage() {
  return (
    <div className="marketing-container marketing-placeholder">
      <h1>Ретрознак 2.0</h1>
      <p className="marketing-lead">
        Лендинг формируется пошагово. На этом этапе доступен базовый каркас с разметкой секций.
      </p>
      <div className="marketing-grid">
        {sections.map((section) => (
          <section id={section.id} key={section.id}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
