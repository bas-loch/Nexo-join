"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import { useLanguage } from "./LanguageProvider";

const ingredients = [
  {
    // crevette
    style: { right: "8%", top: "18%" },
    delay: 0.9,
    duration: 6.5,
    path: (
      <>
        <path d="M14 46 C10 34 16 18 30 14 C40 11 46 18 44 26 C42 34 32 34 30 28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M30 14 L34 6M30 14 L38 8M14 46 L8 52M14 46 L20 54" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  {
    // coquillage
    style: { left: "6%", top: "26%" },
    delay: 1.15,
    duration: 7.2,
    path: (
      <>
        <path d="M32 8 C48 14 56 30 56 46 L8 46 C8 30 16 14 32 8 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M32 8 L32 46 M22 12 L26 46 M42 12 L38 46" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      </>
    ),
  },
  {
    // citron
    style: { left: "10%", bottom: "16%" },
    delay: 1.4,
    duration: 6.8,
    path: (
      <>
        <path d="M8 56 A48 48 0 0 1 56 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 56 L56 8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 48 L32 32 M22 42 L38 26 M28 36 L44 20" stroke="currentColor" strokeWidth="1" opacity="0.7" strokeLinecap="round" />
      </>
    ),
  },
];

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

      {/* Assiette flottante décorative, visible sur grand écran */}
      <div
        aria-hidden
        className="pointer-events-none hidden lg:block absolute right-[7%] top-1/2 -translate-y-1/2 w-[280px] h-[280px] xl:w-[320px] xl:h-[320px]"
      >
        <motion.div
          className="absolute inset-[-30%] rounded-full bg-gold-400/[0.14] blur-[50px]"
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-[-14px] rounded-full border border-gold-400/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-gold-300 shadow-[0_0_8px_rgba(201,168,106,0.9)]" />
        </motion.div>
        <motion.div
          className="relative w-full h-full rounded-full overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(201,168,106,0.25)]"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-plate.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>

      {ingredients.map((ing, i) => (
        <motion.svg
          key={i}
          aria-hidden
          viewBox="0 0 64 64"
          fill="none"
          className="pointer-events-none hidden xl:block absolute w-12 h-12 text-gold-400/60"
          style={ing.style}
          initial={{ opacity: 0, y: -10, scale: 0.85 }}
          animate={{ opacity: 0.6, y: [0, -10, 0], scale: 1 }}
          transition={{
            opacity: { duration: 1, delay: ing.delay },
            scale: { duration: 1, delay: ing.delay },
            y: { duration: ing.duration, delay: ing.delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {ing.path}
        </motion.svg>
      ))}

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
