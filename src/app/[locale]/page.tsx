import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { KeyFigures } from "@/components/home/KeyFigures";
import { FeatureSplit } from "@/components/home/FeatureSplit";
import { LocationSection } from "@/components/home/LocationSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { ThreeSection } from "@/components/home/ThreeSection";
import { CtaBand } from "@/components/common/CtaBand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dict = getDictionary(locale);
  return pageMetadata(locale, "", dict.pagesMeta.home);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <KeyFigures dict={dict} />

      <FeatureSplit
        kicker={dict.home.roomsPreview.kicker}
        title={dict.home.roomsPreview.title}
        text={dict.home.roomsPreview.text}
        cta={dict.home.roomsPreview.cta}
        href={`/${locale}/chambres`}
        imageId="room-sea-view"
        imageAlt={dict.images["room-sea-view"]}
      />

      <div className="bg-sand-50">
        <FeatureSplit
          kicker={dict.home.aquapark.kicker}
          title={dict.home.aquapark.title}
          text={dict.home.aquapark.text}
          cta={dict.home.aquapark.cta}
          href={`/${locale}/aquapark`}
          imageId="aquapark-slides"
          imageAlt={dict.images["aquapark-slides"]}
          bullets={dict.home.aquapark.bullets}
          badge={dict.home.aquapark.badge}
          reverse
        />
      </div>

      <FeatureSplit
        kicker={dict.home.spaPreview.kicker}
        title={dict.home.spaPreview.title}
        text={dict.home.spaPreview.text}
        cta={dict.home.spaPreview.cta}
        href={`/${locale}/spa`}
        imageId="spa-hammam"
        imageAlt={dict.images["spa-hammam"]}
      />

      <LocationSection dict={dict} />
      <ReviewsSection dict={dict} />
      <ThreeSection dict={dict} />

      <CtaBand
        locale={locale}
        title={dict.home.ctaBand.title}
        text={dict.home.ctaBand.text}
        cta={dict.home.ctaBand.cta}
      />
    </>
  );
}
