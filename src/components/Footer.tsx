import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { site } from "@/data/site";

export default async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "footer" });

  return (
    <footer className="bg-olive-dark pb-16 text-cream md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="font-serif text-xl font-semibold">
          Ben&apos;s Resto Café
        </p>
        <p className="mt-1 text-cream/80">{t("tagline")}</p>

        <div className="mt-6 grid gap-1 text-sm text-cream/80">
          <p>{site.legalAddress}</p>
          <p>
            <a href={site.phoneHref} className="hover:text-cream">
              {site.phoneDisplay}
            </a>
          </p>
        </div>

        <a
          href={site.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide underline underline-offset-4 hover:text-cream"
        >
          {t("googleListing")}
        </a>

        <p className="mt-8 text-xs text-cream/60">
          © {new Date().getFullYear()} {t("rights")}
        </p>
      </div>
    </footer>
  );
}
