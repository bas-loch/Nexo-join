import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/dictionaries";
import { HeroVisual } from "./HeroVisual";

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
        <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-offwhite/80">{hero.subtitle}</p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href={`/${locale}/contact#reservation`}
            className="rounded-full bg-gold-500 text-navy-950 font-semibold px-7 py-3.5 hover:bg-gold-400 transition-colors"
          >
            {hero.ctaPrimary}
          </Link>
          <Link
            href={`/${locale}/aquapark`}
            className="rounded-full border border-offwhite/30 px-7 py-3.5 hover:bg-offwhite/10 transition-colors"
          >
            {hero.ctaSecondary}
          </Link>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 text-offwhite/50 text-xs">
          <span>{hero.scroll}</span>
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
        </div>
      </div>
    </section>
  );
}
