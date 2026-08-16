import type { MetadataRoute } from "next";
import { locales } from "@/i18n/locales";
import { siteUrl } from "@/lib/hotel";

const paths = ["", "/chambres", "/aquapark", "/spa", "/restaurants", "/animations", "/galerie", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const locale of locales) {
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified: new Date(),
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${path}`])),
        },
      });
    }
  }

  return entries;
}
