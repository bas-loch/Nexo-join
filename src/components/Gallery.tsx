import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import type { ImageKey } from "@/data/images";
import SiteImage from "./SiteImage";

const galleryKeys: ImageKey[] = [
  "terrasse01",
  "terrasse02",
  "salleInterieure",
  "platPizza",
  "platPates",
  "platViande",
  "platFruitsDeMer",
  "petitDejeuner",
  "interieurDetail",
];

export default async function Gallery({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "gallery" });

  return (
    <section id="galerie" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold text-ink">
          {t("title")}
        </h2>
      </div>

      <div className="grid grid-cols-2 border-t border-l border-ink sm:grid-cols-3">
        {galleryKeys.map((key) => (
          <div
            key={key}
            className="relative aspect-square border-r border-b border-ink"
          >
            <SiteImage imageKey={key} locale={locale} sizes="33vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
