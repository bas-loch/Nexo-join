"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { useLanguage } from "./LanguageProvider";

// Photos réelles du restaurant (sélection recadrée et optimisée à partir de
// photos publiques trouvées en ligne). Sans les droits confirmés du
// restaurant, elles restent temporaires — à remplacer dès que Caicco Romano
// fournit ses propres visuels en haute résolution.
const photos = [
  { src: "/gallery/facade.jpg", key: "facade", span: "sm:row-span-2" },
  {
    src: "/gallery/plateau-fruits-de-mer.jpg",
    key: "plateauFruitsDeMer",
    span: "sm:row-span-2",
  },
  { src: "/gallery/terrasse-soir-1.jpg", key: "terrasseSoir1", span: "" },
  { src: "/gallery/pizza-artisanale.jpg", key: "pizzaArtisanale", span: "" },
  {
    src: "/gallery/pates-fruits-de-mer.jpg",
    key: "patesFruitsDeMer",
    span: "sm:row-span-2",
  },
  { src: "/gallery/salle-voutee.jpg", key: "salleVoutee", span: "" },
  { src: "/gallery/chef-specialite.jpg", key: "chefSpecialite", span: "" },
  { src: "/gallery/terrasse-couverte.jpg", key: "terrasseCouverte", span: "" },
  { src: "/gallery/dessert-glace.jpg", key: "dessertGlace", span: "" },
  { src: "/gallery/terrasse-soir-2.jpg", key: "terrasseSoir2", span: "" },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  const openPhoto = openIndex !== null ? photos[openIndex] : null;
  const openLabel = openPhoto ? t.gallery.labels[openPhoto.key] ?? openPhoto.key : "";

  return (
    <section id="galerie" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          description={t.gallery.description}
        />

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] gap-4 sm:gap-5">
          {photos.map((photo, i) => {
            const label = t.gallery.labels[photo.key] ?? photo.key;
            return (
              <motion.button
                type="button"
                key={photo.src}
                onClick={() => setOpenIndex(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-2xl border border-ivory/10 text-left cursor-zoom-in ${photo.span}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/10 to-transparent"
                />
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="font-display text-lg text-ivory/90 italic">
                    {label}
                  </span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-inset ring-gold-400/30 rounded-2xl" />
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {openPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/92 px-6 py-16"
            onClick={() => setOpenIndex(null)}
          >
            <button
              type="button"
              aria-label="Fermer"
              onClick={() => setOpenIndex(null)}
              className="absolute top-8 right-8 sm:top-10 sm:right-12 flex h-10 w-10 items-center justify-center rounded-full border border-ivory/25 text-ivory/80 transition-colors duration-300 hover:border-gold-400 hover:text-gold-300"
            >
              &#10005;
            </button>
            <motion.figure
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[80vh] max-w-[88vw] text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={openPhoto.src}
                alt={openLabel}
                className="max-h-[70vh] max-w-full rounded-xl object-contain shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
              />
              <figcaption className="mt-6 font-display text-xl italic text-ivory/90">
                {openLabel}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
