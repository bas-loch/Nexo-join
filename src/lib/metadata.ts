import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/locales";

export function resolveLocale(raw: string): Locale {
  return isLocale(raw) ? raw : "fr";
}

const ogLocales: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_GB",
  de: "de_DE",
};

export function pageMetadata(
  locale: Locale,
  path: string,
  meta: { title: string; description: string }
): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${locale}${path}`,
      locale: ogLocales[locale],
      type: "website",
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
    },
  };
}
