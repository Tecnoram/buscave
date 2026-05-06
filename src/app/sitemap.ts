import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";
import { getBusinessSlugs } from "@/lib/queries/businesses";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const now = new Date();
  const businessSlugs = await getBusinessSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/buscar`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/agregar-negocio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const businessRoutes: MetadataRoute.Sitemap = businessSlugs.map((slug) => ({
    url: `${siteUrl}/negocio/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...businessRoutes];
}
