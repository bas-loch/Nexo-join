import type { Metadata } from "next";
import { Users2 } from "lucide-react";
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
  return pageMetadata(locale, "/animations", dict.pagesMeta.leisure);
}

export default async function LeisurePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const { leisure } = dict;

  return (
    <>
      <PageHero
        title={leisure.hero.title}
        subtitle={leisure.hero.subtitle}
        imageId="evening-animation"
        imageAlt={dict.images["evening-animation"]}
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 text-center">
        <p className="text-navy-900/70">{leisure.intro}</p>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-3xl bg-navy-950 text-offwhite p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-5">
          <Users2 className="h-8 w-8 text-gold-400 shrink-0" aria-hidden />
          <div>
            <h2 className="font-serif-display text-xl sm:text-2xl">{leisure.highlight.title}</h2>
            <p className="mt-3 text-offwhite/75">{leisure.highlight.text}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leisure.activities.map((activity) => (
            <ImageCard
              key={activity.id}
              imageId={activity.imageId}
              imageAlt={dict.images[activity.imageId] ?? activity.title}
              title={activity.title}
              text={activity.description}
            />
          ))}
        </div>
      </section>

      <CtaBand locale={locale} title={leisure.cta.title} text={leisure.cta.text} cta={leisure.cta.cta} />
    </>
  );
}
