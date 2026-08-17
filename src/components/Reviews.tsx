import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { site } from "@/data/site";

export default async function Reviews({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "reviews" });
  const ratingValue = site.googleRating.value.toLocaleString(
    locale === "fr" ? "fr-FR" : "en-US",
    { minimumFractionDigits: 1 },
  );

  return (
    <section
      id="avis"
      className="border-y border-ink bg-cream"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-14 text-center sm:px-6 sm:py-20">
        <h2 className="font-serif text-2xl font-semibold text-ink">
          {t("title")}
        </h2>
        <p className="font-serif text-6xl font-semibold text-terracotta">
          {ratingValue} ★
        </p>
        <p className="text-ink/80">{t("ratingLine")}</p>
        <p className="text-xs uppercase tracking-wide text-olive">
          {t("asOf")}
        </p>
        <a
          href={site.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 border border-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink hover:bg-ink hover:text-cream"
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
