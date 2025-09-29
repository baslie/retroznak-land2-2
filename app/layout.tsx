import type { Metadata, Viewport } from "next";

import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider";
import { siteMetadata } from "@/config/site";
import { cn } from "@/lib/utils";
import "@/styles/tailwind.css";
import "@/styles/globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s — ${siteMetadata.brand}`,
  },
  description: siteMetadata.description,
  applicationName: siteMetadata.brand,
  generator: "Next.js 15",
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.organization, url: siteMetadata.siteUrl }],
  creator: siteMetadata.organization,
  publisher: siteMetadata.organization,
  alternates: {
    canonical: siteMetadata.siteUrl,
    languages: {
      "ru-RU": siteMetadata.siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: siteMetadata.locale,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.brand,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.socialImage,
        width: 1200,
        height: 630,
        alt: siteMetadata.socialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "business",
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#d5d5cf" }],
  },
  verification: {
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3efe2" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1014" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="bg-background text-foreground" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background text-foreground antialiased")}>
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
