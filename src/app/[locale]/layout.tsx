import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";
import { hotelJsonLd } from "@/lib/schema";
import { siteUrl } from "@/lib/hotel";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BestRateBanner } from "@/components/layout/BestRateBanner";
import { StickyReserveButton } from "@/components/layout/StickyReserveButton";
import "../globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.pagesMeta.home.title,
      template: `%s · ${dict.meta.titleSuffix}`,
    },
    description: dict.pagesMeta.home.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        de: "/de",
      },
    },
    openGraph: {
      siteName: dict.meta.titleSuffix,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);
  const jsonLd = hotelJsonLd(locale);

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-offwhite text-navy-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BestRateBanner text={dict.banner.text} />
        <SiteHeader locale={locale} dict={dict} />
        <main className="flex-1 pb-24 sm:pb-0">{children}</main>
        <SiteFooter locale={locale} dict={dict} />
        <StickyReserveButton locale={locale} label={dict.common.ctaReserve} />
      </body>
    </html>
  );
}
