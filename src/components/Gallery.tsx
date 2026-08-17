"use client";

import { motion } from "framer-motion";
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
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-2xl border border-ivory/10 ${photo.span}`}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
