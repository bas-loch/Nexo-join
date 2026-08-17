"use client";

import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { restaurant, ratings } from "@/lib/restaurant-data";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="restaurant" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={restaurant.name}
          description={t.about.description}
        />

        <div className="mt-20 grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-start">
          <div className="flex flex-col gap-6">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="font-body text-base sm:text-lg leading-relaxed text-ivory/70 text-balance">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-ivory/10 pt-6">
                {ratings.map((r) => (
                  <div key={r.source} className="flex items-baseline gap-2">
                    <span className="font-display text-2xl text-gold-300">
                      {r.score}
                    </span>
                    <span className="font-body text-xs text-ivory/45">
                      {r.source} · {r.count} {t.about.reviewsWord}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-px bg-ivory/[0.06]">
            {t.about.highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 0.1}>
                <div className="bg-charcoal-900/40 px-8 py-8 h-full">
                  <span className="font-display text-3xl text-gold-300">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-ivory">
                    {h.label}
                  </h3>
                  <p className="mt-2 font-body text-sm text-ivory/50 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
