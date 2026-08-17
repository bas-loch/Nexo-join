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
            <div className="absolute inset-0 bg-gradient-to-br from-sea-600/20 via-charcoal-900 to-charcoal-950" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(244,239,230,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,230,0.05) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
              <span className="w-3 h-3 rounded-full bg-gold-400 shadow-glow animate-shimmer" />
              <p className="font-display text-lg text-ivory/80">
                Médina Yasmine Hammamet
              </p>
              <p className="font-body text-xs tracking-widest2 uppercase text-ivory/35">
                Carte interactive à intégrer
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
