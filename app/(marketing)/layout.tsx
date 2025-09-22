import type { ReactNode } from "react";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="marketing-shell">
      <header className="marketing-header">
        <div className="marketing-container">
          <span className="marketing-logo" aria-label="Retroznak">
            Retroznak
          </span>
          <nav aria-label="Основная навигация" className="marketing-nav">
            <a href="#hero">Главная</a>
            <a href="#about">О производстве</a>
            <a href="#contact">Контакты</a>
          </nav>
        </div>
      </header>
      <main className="marketing-main">{children}</main>
      <footer className="marketing-footer">
        <div className="marketing-container">
          <p>© {new Date().getFullYear()} Retroznak. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
