import { ChevronDown } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/dictionaries";
import { HeroVisual } from "./HeroVisual";
import { CtaButton } from "@/components/common/CtaButton";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const hero = dict.home.hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700 text-offwhite">
      <div className="absolute inset-0" aria-hidden>
        <HeroVisual />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36 lg:py-44 flex flex-col items-center text-center">
        <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold-400 mb-5">
          {hero.kicker}
        </span>
        <h1 className="font-serif-display text-[clamp(2.75rem,7vw,8rem)] leading-[0.95] tracking-[-0.02em]">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-offwhite/80">{hero.subtitle}</p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <CtaButton href={`/${locale}/contact#reservation`} variant="solid" className="px-7 py-3.5">
            {hero.ctaPrimary}
          </CtaButton>
          <CtaButton href={`/${locale}/aquapark`} variant="outline" className="px-7 py-3.5">
            {hero.ctaSecondary}
          </CtaButton>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 text-offwhite/50 text-xs">
          <span>{hero.scroll}</span>
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
        </div>
      </div>
    </section>
  );
}
