import type { Metadata } from "next";
import { resolveLocale, pageMetadata } from "@/lib/metadata";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHero } from "@/components/common/PageHero";
import { CtaBand } from "@/components/common/CtaBand";
import { ImageCard } from "@/components/common/ImageCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/restaurants", dict.pagesMeta.dining);
}

export default async function DiningPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const { dining } = dict;

  return (
    <>
      <PageHero
        title={dining.hero.title}
        subtitle={dining.hero.subtitle}
        imageId="restaurant-central"
        imageAlt={dict.images["restaurant-central"]}
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 text-center">
        <p className="text-navy-900/70">{dining.intro}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dining.venues.map((venue) => (
            <ImageCard
              key={venue.id}
              imageId={venue.imageId}
              imageAlt={dict.images[venue.imageId] ?? venue.name}
              title={venue.name}
              text={venue.description}
            />
          ))}
        </div>
      </section>

      <CtaBand locale={locale} title={dining.cta.title} text={dining.cta.text} cta={dining.cta.cta} />
    </>
  );
}
