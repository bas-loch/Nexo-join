import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { site } from "@/data/site";
import SiteImage from "./SiteImage";
import CallButton from "./CallButton";
import WhatsappButton from "./WhatsappButton";

export default async function Hero({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "hero" });
  const tc = await getTranslations({ locale, namespace: "cta" });
  const ratingValue = site.googleRating.value.toLocaleString(
    locale === "fr" ? "fr-FR" : "en-US",
    { minimumFractionDigits: 1 },
  );

  return (
    <section className="relative aspect-[3/4] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
      <SiteImage imageKey="hero" locale={locale} priority className="" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 px-4 pb-8 sm:px-6 sm:pb-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/80">
            {t("eyebrow")}
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-cream sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-3 max-w-xl text-base text-cream/90 sm:text-lg">
            {t("subtitle")}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-cream/90">
            <span className="border border-cream/60 px-3 py-1 font-semibold">
              {ratingValue} ★ {t("ratingLine")}
            </span>
            <span>{t("ratingAsOf")}</span>
          </div>

          <p className="mt-2 text-sm text-cream/80">{t("hours")}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton label={t("callCta")} />
            <WhatsappButton
              label={t("whatsappCta")}
              message={tc("reserveWhatsapp")}
              variant="outline"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
