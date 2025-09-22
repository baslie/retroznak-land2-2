import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";

import { cn } from "@/lib/utils";
import "@/styles/tailwind.css";
import "@/styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ретрознак 2.0",
  description:
    "Современный лендинг для производства объёмных неоновых вывесок Retroznak.",
  metadataBase: new URL("https://retroznak.ru"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="bg-background text-foreground">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased",
          manrope.variable,
          notoSerif.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
