"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

// Photos réelles du restaurant (sélection recadrée et optimisée à partir de
// photos publiques trouvées en ligne). Sans les droits confirmés du
// restaurant, elles restent temporaires — à remplacer dès que Caicco Romano
// fournit ses propres visuels en haute résolution.
const photos = [
  { src: "/gallery/facade.jpg", label: "Façade", span: "sm:row-span-2" },
  {
    src: "/gallery/plateau-fruits-de-mer.jpg",
    label: "Plateau de fruits de mer",
    span: "sm:row-span-2",
  },
  { src: "/gallery/terrasse-soir-1.jpg", label: "Soirée en terrasse", span: "" },
  { src: "/gallery/pizza-artisanale.jpg", label: "Pizza au feu de bois", span: "" },
  {
    src: "/gallery/pates-fruits-de-mer.jpg",
    label: "Pâtes aux fruits de mer",
    span: "sm:row-span-2",
  },
  { src: "/gallery/salle-voutee.jpg", label: "Salle voûtée", span: "" },
  { src: "/gallery/chef-specialite.jpg", label: "Spécialité maison", span: "" },
  { src: "/gallery/terrasse-couverte.jpg", label: "Terrasse couverte", span: "" },
  { src: "/gallery/dessert-glace.jpg", label: "Dessert glacé", span: "" },
  { src: "/gallery/terrasse-soir-2.jpg", label: "Ambiance du soir", span: "" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Galerie"
          title="L'expérience en images"
          description="Un aperçu du restaurant, de ses plats et de son ambiance."
        />

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] gap-4 sm:gap-5">
          {photos.map((photo, i) => (
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
                alt={photo.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/10 to-transparent"
              />
              <div className="absolute inset-0 flex items-end p-5">
                <span className="font-display text-lg text-ivory/90 italic">
                  {photo.label}
                </span>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-inset ring-gold-400/30 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center font-body text-xs text-ivory/35 italic">
          Photos publiques temporaires — à remplacer par les visuels officiels du
          restaurant.
        </p>
      </div>
    </section>
  );
}
