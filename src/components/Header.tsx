import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import CallButton from "./CallButton";

export default async function Header({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "nav" });
  const otherLocale: Locale = locale === "fr" ? "en" : "fr";

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          locale={locale}
          className="font-serif text-lg font-semibold uppercase tracking-wide text-ink"
        >
          Ben&apos;s Resto Café
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-wide text-ink md:flex">
          <a href="#menu" className="hover:text-terracotta">
            {t("menu")}
          </a>
          <a href="#galerie" className="hover:text-terracotta">
            {t("gallery")}
          </a>
          <a href="#matchs" className="hover:text-terracotta">
            {t("matchs")}
          </a>
          <a href="#avis" className="hover:text-terracotta">
            {t("reviews")}
          </a>
          <a href="#infos" className="hover:text-terracotta">
            {t("practical")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            locale={otherLocale}
            className="text-sm font-semibold uppercase tracking-wide text-ink hover:text-terracotta"
          >
            {t("langSwitch")}
          </Link>
          <CallButton label={t("call")} className="hidden sm:inline-flex" />
        </div>
      </div>
    </header>
  );
}
