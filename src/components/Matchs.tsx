import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import SiteImage from "./SiteImage";

export default async function Matchs({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "matchs" });

  return (
    <section id="matchs" className="bg-olive-dark">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <div className="flex flex-col justify-center gap-4 px-4 py-10 sm:px-6 md:px-12 md:py-16">
          <h2 className="font-serif text-3xl font-semibold text-cream">
            {t("title")}
          </h2>
          <p className="text-cream/85">{t("paragraph")}</p>
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto">
          <SiteImage imageKey="salleInterieure" locale={locale} />
        </div>
      </div>
    </section>
  );
}
