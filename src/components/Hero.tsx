"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-radial-fade"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-gold-400/[0.04] blur-[120px]"
      />

      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="font-body text-[11px] sm:text-xs tracking-widest2 uppercase text-gold-300/80 mb-8"
      >
        {t.hero.kicker}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-center leading-[0.95] text-ivory text-balance"
      >
        <span className="block text-[15vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[6.5vw] font-medium tracking-tight">
          Caicco Romano
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 font-body text-[11px] sm:text-sm tracking-[0.3em] uppercase text-ivory/55"
      >
        {t.hero.tagline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 max-w-md text-center font-display text-xl sm:text-2xl italic text-ivory/75 text-balance"
      >
        {t.hero.editorial}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
        className="mt-14 flex flex-col sm:flex-row items-center gap-4"
      >
        <Button href="#menu" variant="ghost">
          {t.hero.ctaMenu}
        </Button>
        <Button href="#reservation" variant="primary">
          {t.hero.ctaReserve}
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-body text-[10px] tracking-widest2 uppercase text-ivory/35">
          {t.hero.scrollHint}
        </span>
        <span className="w-px h-10 bg-gradient-to-b from-gold-400/60 to-transparent animate-shimmer" />
      </motion.div>
    </section>
  );
}
