import type { Dictionary } from "@/i18n/dictionaries";
import { SectionHeading } from "@/components/common/SectionHeading";
import { MapEmbed } from "@/components/common/MapEmbed";
import { hotel } from "@/lib/hotel";

export function LocationSection({ dict }: { dict: Dictionary }) {
  const { kicker, title, text, bullets } = dict.home.location;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid gap-10 lg:grid-cols-2 items-stretch">
      <div>
        <SectionHeading kicker={kicker} title={title} />
        <p className="mt-4 text-navy-900/70">{text}</p>
        <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5">
          {bullets.map((bullet) => (
            <div key={bullet.label}>
              <dt className="text-xs uppercase tracking-wide text-navy-900/50">{bullet.label}</dt>
              <dd className="text-navy-950 font-medium">{bullet.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <MapEmbed title={hotel.name} className="rounded-3xl overflow-hidden border border-navy-900/10 min-h-80" />
    </section>
  );
}
