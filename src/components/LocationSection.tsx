import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { contact, restaurant } from "@/lib/restaurant-data";

export default function LocationSection() {
  return (
    <section id="localisation" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Localisation"
              title="Au cœur de la médina"
              align="left"
            />
            <div>
              <p className="font-display text-2xl sm:text-3xl text-ivory">
                {restaurant.name}
              </p>
              <p className="mt-2 font-body text-ivory/55 leading-relaxed">
                {contact.address.line2}
                <br />
                {contact.address.line3}
              </p>
            </div>
            <Button
              href={contact.googleMaps.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-fit"
            >
              Ouvrir dans Google Maps
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ivory/10 bg-charcoal-900/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gallery/facade.jpg"
              alt="Façade de Caicco Romano, Médina Yasmine Hammamet"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/10 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 text-center px-6 py-6">
              <span className="w-2 h-2 rounded-full bg-gold-400 shadow-glow animate-shimmer" />
              <p className="font-display text-lg text-ivory/90">
                Médina Yasmine Hammamet
              </p>
              <p className="font-body text-xs tracking-widest2 uppercase text-ivory/40">
                Carte interactive à intégrer
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
