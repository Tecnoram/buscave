const fallbackUrl = "https://buscave.vercel.app";

export const siteConfig = {
  name: "BuscaVE",
  description:
    "Encuentra productos, repuestos y negocios que sí están disponibles en Venezuela.",
  url: process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || fallbackUrl,
  locale: "es-VE",
  keywords: [
    "Venezuela",
    "buscar negocios",
    "marketplace Venezuela",
    "productos en Caracas",
    "repuestos Venezuela",
    "compras Venezuela",
    "BuscaVE",
  ],
};

export function getSiteUrl() {
  return siteConfig.url.replace(/\/$/, "");
}
