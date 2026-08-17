"use client";

import { useState } from "react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { menu } from "@/lib/restaurant-data";

export default function Menu() {
  const [active, setActive] = useState(0);
  const category = menu[active];
  const hasItems = category.items.some((item) => item.name);

  return (
    <section id="menu" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Le menu"
          title="Notre carte"
          description="Une sélection de la carte, relevée sur place — prix en dinars tunisiens."
        />

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-wrap justify-center gap-x-2 gap-y-3">
            {menu.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 text-[11px] sm:text-xs tracking-widest2 uppercase font-body transition-colors duration-300 border ${
                  active === i
                    ? "border-gold-400 text-gold-300 bg-gold-400/[0.06]"
                    : "border-ivory/10 text-ivory/50 hover:text-ivory/80 hover:border-ivory/25"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </Reveal>

        {hasItems ? (
          <div className="mt-16 divide-y divide-ivory/[0.07] border-y border-ivory/[0.07]">
            {category.items
              .filter((item) => item.name)
              .map((item, i) => (
                <Reveal key={item.name} delay={i * 0.06}>
                  <div className="flex items-start justify-between gap-6 py-7">
                    <div className="flex-1">
                      <h3 className="font-display text-xl sm:text-2xl text-ivory/90">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="mt-1.5 font-body text-sm text-ivory/45 leading-relaxed max-w-md">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 font-display text-lg text-gold-300/80 pt-1">
                      {item.price}
                    </span>
                  </div>
                </Reveal>
              ))}
          </div>
        ) : (
          <Reveal>
            <div className="mt-16 border-y border-ivory/[0.07] py-16 text-center">
              <p className="font-display text-xl text-ivory/60 italic">
                Cette catégorie sera complétée prochainement.
              </p>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.15}>
          <p className="mt-8 text-center font-body text-xs text-ivory/40 italic">
            Sélection relevée sur place, prix indicatifs en dinars tunisiens
            (DT).
          </p>
        </Reveal>
      </div>
    </section>
  );
}
