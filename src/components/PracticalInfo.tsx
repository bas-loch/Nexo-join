import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { site, whatsappUrl } from "@/data/site";

export default async function PracticalInfo({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "practical" });
  const tc = await getTranslations({ locale, namespace: "cta" });

  return (
    <section id="infos" className="bg-sable">
      <div className="mx-auto grid max-w-6xl border border-ink md:grid-cols-2">
        <div className="border-b border-ink px-4 py-10 sm:px-6 md:border-b-0 md:border-r md:px-12 md:py-16">
          <h2 className="font-serif text-3xl font-semibold text-ink">
            {t("title")}
          </h2>

          <dl className="mt-6 space-y-5 text-ink">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
                {t("addressLabel")}
              </dt>
              <dd className="mt-1">{site.legalAddress}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
                {t("phoneLabel")}
              </dt>
              <dd className="mt-1">
                <a href={site.phoneHref} className="hover:text-terracotta">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
                {t("hoursLabel")}
              </dt>
              <dd className="mt-1">{t("hoursValue")}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center bg-terracotta px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-terracotta-dark"
            >
              {t("callCta")}
            </a>
            <a
              href={whatsappUrl(tc("reserveWhatsapp"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink hover:bg-ink hover:text-cream"
            >
              {t("whatsappCta")}
            </a>
            <a
              href={site.googleDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink hover:bg-ink hover:text-cream"
            >
              {t("directionsCta")}
            </a>
          </div>
        </div>

        <div className="relative min-h-[320px] bg-sable">
          <iframe
            src={site.googleMapsEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t("addressLabel")}
          />
        </div>
      </div>
    </section>
  );
}
