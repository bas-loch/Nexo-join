import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { resolveLocale, pageMetadata } from "@/lib/metadata";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CtaBand } from "@/components/common/CtaBand";
import { ImageCard } from "@/components/common/ImageCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/aquapark", dict.pagesMeta.aquapark);
}

export default async function AquaParkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const { aquapark } = dict;

  return (
    <>
      <PageHero
        title={aquapark.hero.title}
        subtitle={aquapark.hero.subtitle}
        imageId="aquapark-slides"
        imageAlt={dict.images["aquapark-slides"]}
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 text-gold-700 text-xs font-semibold px-4 py-1.5">
          {aquapark.badge}
        </span>
        <p className="mt-5 text-navy-900/70">{aquapark.intro}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aquapark.features.map((feature) => (
            <ImageCard
              key={feature.title}
              imageId={feature.imageId}
              imageAlt={dict.images[feature.imageId] ?? feature.title}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
      </section>

      <section className="bg-sand-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading title={aquapark.practicalTitle} align="center" />
          <ul className="mt-8 space-y-3">
            {aquapark.practical.map((item) => (
              <li key={item} className="flex items-start gap-3 text-navy-900/75">
                <CheckCircle2 className="h-5 w-5 text-gold-600 shrink-0 mt-0.5" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand locale={locale} title={aquapark.cta.title} text={aquapark.cta.text} cta={aquapark.cta.cta} />
    </>
  );
}
