import type { MetadataRoute } from "next";

// Remplacer par le nom de domaine définitif une fois le site déployé.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://caicco-romano.example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
