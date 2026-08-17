import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { contact } from "@/lib/restaurant-data";

const items = [
  {
    label: "Adresse",
    value: `${contact.address.line1}, ${contact.address.line2}, ${contact.address.line3}`,
  },
  {
    label: "Téléphone",
    value: contact.phone.display,
  },
  {
    label: "Horaires",
    value: contact.hours.display,
  },
  {
    label: "Réservation",
    value: "Par téléphone ou WhatsApp",
  },
];

export default function PracticalInfo() {
  return (
    <section id="infos" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Informations pratiques"
          title="Nous rendre visite"
          align="left"
        />

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
                Contactez-nous directement pour toute réservation ou question
                concernant votre visite.
              </p>
              <Button href={contact.googleMaps.href} target="_blank" rel="noopener noreferrer" variant="ghost" className="w-full">
                Itinéraire
              </Button>
              <Button href={contact.phone.href} variant="ghost" className="w-full">
                Appeler
              </Button>
              <Button href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full">
                WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>

        <p className="mt-10 font-body text-xs text-ivory/35 italic">
          Horaires indicatifs à confirmer directement auprès du restaurant.
        </p>
      </div>
    </section>
  );
}
