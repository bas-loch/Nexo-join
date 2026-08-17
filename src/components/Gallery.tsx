"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

const tiles = [
  { label: "Ambiance", span: "sm:row-span-2" },
  { label: "Fruits de mer", span: "" },
  { label: "Terrasse", span: "" },
  { label: "Cuisine italienne", span: "" },
  { label: "Pâtes fraîches", span: "sm:row-span-2" },
  { label: "Soirée méditerranéenne", span: "" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Galerie"
          title="L'expérience en images"
          description="Les photographies du restaurant seront ajoutées prochainement."
        />

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] gap-4 sm:gap-5">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-ivory/10 ${tile.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-radial-fade opacity-60" />
              <div className="absolute inset-0 flex items-end p-5">
                <span className="font-display text-lg text-ivory/70 italic">
                  {tile.label}
                </span>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-inset ring-gold-400/30 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center font-body text-xs text-ivory/35 italic">
          Photographies à venir — emplacements préparés au format éditorial.
        </p>
      </div>
    </section>
  );
}
