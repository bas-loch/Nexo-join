"use client";

import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { specialties } from "@/lib/restaurant-data";
import { useLanguage } from "./LanguageProvider";

export default function Specialties() {
  const { t } = useLanguage();

  return (
    <section id="specialites" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.specialties.eyebrow}
          title={t.specialties.title}
          description={t.specialties.description}
        />

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((s, i) => {
            const item = t.specialties.items[s.id] ?? { title: s.title, description: s.description };
            return (
              <Reveal key={s.id} delay={(i % 3) * 0.08}>
                <div className="group relative h-full overflow-hidden border border-ivory/10 bg-charcoal-900/30 p-9 transition-colors duration-500 hover:border-gold-400/40">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial-fade"
                  />
                  <span className="relative font-display text-sm text-gold-400/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative mt-5 font-display text-2xl sm:text-[28px] text-ivory">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 font-body text-sm text-ivory/50 leading-relaxed">
                    {item.description}
                  </p>
                  <span className="relative mt-6 block h-px w-10 bg-gold-400/40 transition-all duration-500 group-hover:w-16" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
