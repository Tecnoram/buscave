import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { getSiteUrl, siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteConfig.name} | Marketplace local para Venezuela`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: getSiteUrl(),
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Marketplace local para Venezuela`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Marketplace local para Venezuela`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: getSiteUrl(),
    description: siteConfig.description,
    inLanguage: siteConfig.locale,
    potentialAction: {
      "@type": "SearchAction",
      target: `${getSiteUrl()}/buscar?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-950">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
          type="application/ld+json"
        />
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between py-6">
            <Link className="text-2xl font-semibold tracking-tight text-slate-950" href="/">
              BuscaVE
            </Link>
            <nav className="flex items-center gap-4 text-sm text-slate-600">
              <Link href="/buscar">Buscar</Link>
              <Link href="/agregar-negocio">Agregar negocio</Link>
            </nav>
          </header>
          <main className="flex-1 pb-12">{children}</main>
          <footer className="border-t border-slate-200 py-6 text-sm text-slate-500">
            MVP inicial de descubrimiento local para Venezuela.
          </footer>
        </div>
      </body>
    </html>
  );
}
