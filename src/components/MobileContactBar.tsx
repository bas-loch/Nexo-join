import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { site, whatsappUrl } from "@/data/site";

export default async function MobileContactBar({
  locale,
}: {
  locale: Locale;
}) {
  const t = await getTranslations({ locale, namespace: "practical" });
  const tc = await getTranslations({ locale, namespace: "cta" });

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink md:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center bg-terracotta py-3 text-sm font-semibold uppercase tracking-wide text-cream"
      >
        {t("callCta")}
      </a>
      <a
        href={whatsappUrl(tc("reserveWhatsapp"))}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-olive py-3 text-sm font-semibold uppercase tracking-wide text-cream"
      >
        {t("whatsappCta")}
      </a>
    </div>
  );
}
