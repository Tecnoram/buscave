import type { MetadataRoute } from "next";
import { getSiteUrl, siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0f172a",
    lang: siteConfig.locale,
    scope: "/",
    id: getSiteUrl(),
    icons: [
      {
        src: "/icon",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
