"use client";

import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { contact } from "@/lib/restaurant-data";
import { useLanguage } from "./LanguageProvider";

export default function PracticalInfo() {
  const { t } = useLanguage();

  const items = [
    {
      label: t.info.labels.adresse,
      value: `${contact.address.line1}, ${contact.address.line2}, ${contact.address.line3}`,
    },
    {
      label: t.info.labels.telephone,
      value: contact.phone.display,
    },
    {
      label: t.info.labels.horaires,
      value: t.info.hoursFallback,
    },
    {
      label: t.info.labels.reservation,
      value: t.info.reservationValue,
    },
  ];

  return (
    <section id="infos" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.info.eyebrow} title={t.info.title} align="left" />

        <div className="mt-16 grid md:grid-cols-2 gap-16">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {items.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div>
                  <span className="font-body text-[11px] tracking-widest2 uppercase text-gold-400/70">
                    {item.label}
                  </span>
                  <p className="mt-3 font-display text-xl text-ivory/85 leading-snug">
                    {item.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-4 border border-ivory/10 bg-charcoal-900/40 p-8 sm:p-10 h-full">
              <p className="font-body text-sm text-ivory/50 leading-relaxed mb-2">
                {t.info.contactBoxText}
              </p>
              <Button href={contact.googleMaps.href} target="_blank" rel="noopener noreferrer" variant="ghost" className="w-full">
                {t.info.buttons.itineraire}
              </Button>
              <Button href={contact.phone.href} variant="ghost" className="w-full">
                {t.info.buttons.appeler}
              </Button>
              <Button href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full">
                {t.info.buttons.whatsapp}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
