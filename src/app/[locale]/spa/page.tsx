import type { Metadata } from "next";
import { Check } from "lucide-react";
import { resolveLocale, pageMetadata } from "@/lib/metadata";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CtaBand } from "@/components/common/CtaBand";
import { CureCard } from "@/components/spa/CureCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/spa", dict.pagesMeta.spa);
}

export default async function SpaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const { spa } = dict;

  return (
    <>
      <PageHero title={spa.hero.title} subtitle={spa.hero.subtitle} imageId="spa-massage" imageAlt={dict.images["spa-massage"]} />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 items-start">
        <p className="text-navy-900/70 text-lg leading-relaxed">{spa.intro}</p>
        <div>
          <SectionHeading title={spa.facilitiesTitle} />
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-navy-900/75">
            {spa.facilities.map((facility) => (
              <li key={facility} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-gold-600 shrink-0 mt-0.5" aria-hidden />
                {facility}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sand-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading title={spa.curesTitle} align="center" />
          <p className="mt-4 text-center text-navy-900/65 max-w-xl mx-auto">{spa.curesIntro}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spa.cures.map((cure) => (
              <CureCard key={cure.id} cure={cure} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale} title={spa.cta.title} text={spa.cta.text} cta={spa.cta.cta} />
    </>
  );
}
