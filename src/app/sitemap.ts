import type { MetadataRoute } from "next";

// Remplacer par le nom de domaine définitif une fois le site déployé.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://caicco-romano.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
