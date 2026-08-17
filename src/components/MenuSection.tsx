import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { menuCategories, signatureDishes } from "@/data/menu";
import SiteImage from "./SiteImage";

export default async function MenuSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "menu" });

  return (
    <section id="menu" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold text-ink">
          {t("title")}
        </h2>
        <p className="mt-2 max-w-2xl text-ink/80">{t("intro")}</p>

        <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-olive">
          {t("categoriesTitle")}
        </h3>
        <ul className="mt-4 grid grid-cols-2 border-t border-l border-ink sm:grid-cols-4">
          {menuCategories.map((cat) => (
            <li
              key={cat.key}
              className="border-r border-b border-ink px-4 py-4 text-center text-sm font-medium uppercase tracking-wide text-ink"
            >
              {cat.label[locale]}
            </li>
          ))}
        </ul>

        <h3 className="mt-14 text-xs font-semibold uppercase tracking-[0.2em] text-olive">
          {t("signatureTitle")}
        </h3>
        <div className="mt-4 grid border-t border-l border-ink sm:grid-cols-2">
          {signatureDishes.map((dish) => (
            <article
              key={dish.key}
              className="border-r border-b border-ink"
            >
              <div className="relative aspect-[4/3]">
                <SiteImage imageKey={dish.imageKey} locale={locale} />
              </div>
              <div className="p-5">
                <h4 className="font-serif text-xl font-semibold text-ink">
                  {dish.name[locale]}
                </h4>
                <p className="mt-1 text-sm text-ink/80">
                  {dish.description[locale]}
                </p>
                <p className="mt-3 text-xs uppercase tracking-wide text-terracotta-dark">
                  {t("priceNote")}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 border border-dashed border-olive/50 px-4 py-3 text-sm text-olive">
          {t("pendingNote")}
        </p>
      </div>
    </section>
  );
}
