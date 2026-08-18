"use client";

import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { specialties } from "@/lib/restaurant-data";
import { useLanguage } from "./LanguageProvider";

const icons: Record<string, JSX.Element> = {
  seafood: (
    <>
      <path d="M14 46 C10 34 16 18 30 14 C40 11 46 18 44 26 C42 34 32 34 30 28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M30 14 L34 6M30 14 L38 8M14 46 L8 52M14 46 L20 54" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </>
  ),
  fish: (
    <>
      <path d="M6 32 C16 20 34 20 44 24 C50 26 56 30 58 32 C56 34 50 38 44 40 C34 44 16 44 6 32 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="14" cy="30" r="1.6" fill="currentColor" />
      <path d="M44 24 L52 16M44 40 L52 48" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </>
  ),
  pasta: (
    <>
      <ellipse cx="32" cy="46" rx="24" ry="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 42 C16 26 24 14 32 10 C40 14 48 26 52 42" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 30 Q32 24 44 30" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
    </>
  ),
  mediterranean: (
    <>
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="1.6" />
      <path d="M32 10 A22 22 0 0 1 32 54" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.7" />
    </>
  ),
  signature: (
    <>
      <path d="M32 8 L54 46 L10 46 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="28" cy="34" r="1.8" fill="currentColor" />
      <circle cx="36" cy="38" r="1.8" fill="currentColor" />
      <circle cx="32" cy="28" r="1.8" fill="currentColor" />
    </>
  ),
  desserts: (
    <>
      <path d="M20 12 C20 8 24 8 24 12 C24 16 20 18 20 24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="12" y="24" width="40" height="24" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 34 L52 34" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    </>
  ),
};

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
                  {icons[s.id] && (
                    <motion.svg
                      aria-hidden
                      viewBox="0 0 64 64"
                      fill="none"
                      className="absolute top-8 right-8 w-9 h-9 text-gold-400/50"
                      animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (i % 3) * 0.6,
                      }}
                    >
                      {icons[s.id]}
                    </motion.svg>
                  )}
                  <span className="relative font-display text-sm text-gold-400/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative mt-5 font-display text-2xl sm:text-[28px] text-ivory max-w-[80%]">
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
