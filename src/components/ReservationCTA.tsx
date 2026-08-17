"use client";

import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { contact } from "@/lib/restaurant-data";
import { useLanguage } from "./LanguageProvider";

export default function ReservationCTA() {
  const { t } = useLanguage();

  return (
    <section id="reservation" className="relative py-32 sm:py-44 px-6 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-radial-fade"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] max-w-[700px] max-h-[500px] rounded-full bg-gold-400/[0.05] blur-[130px]"
      />

      <div className="relative mx-auto max-w-3xl flex flex-col items-center text-center gap-8">
        <Reveal>
          <span className="font-body text-[11px] tracking-widest2 uppercase text-gold-400/80">
            {t.reservation.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium text-ivory text-balance leading-[1.05]">
            {t.reservation.title}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="font-body text-base sm:text-lg text-ivory/55 max-w-xl leading-relaxed text-balance">
            {t.reservation.description}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button href={contact.phone.href} variant="primary">
              {t.reservation.buttons.reserve}
            </Button>
            <Button
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              {t.reservation.buttons.whatsapp}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-2 font-body text-sm text-ivory/40">
            {contact.phone.display}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
