import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import SiteImage from "./SiteImage";

export default async function About({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <section className="bg-sable">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <SiteImage imageKey="facadeEntree" locale={locale} />
        </div>

        <div className="flex flex-col justify-center gap-4 px-4 py-10 sm:px-6 md:px-12 md:py-16">
          <h2 className="font-serif text-3xl font-semibold text-ink">
            {t("title")}
          </h2>
          <p className="text-ink/90">{t("paragraph1")}</p>
          <p className="text-ink/90">{t("paragraph2")}</p>
          <p className="text-ink/90">{t("paragraph3")}</p>
        </div>
      </div>
    </section>
  );
}
