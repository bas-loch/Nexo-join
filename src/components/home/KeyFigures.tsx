import type { Dictionary } from "@/i18n/dictionaries";
import { SectionHeading } from "@/components/common/SectionHeading";

export function KeyFigures({ dict }: { dict: Dictionary }) {
  const { kicker, title, items } = dict.home.figures;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <SectionHeading kicker={kicker} title={title} align="center" />
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <div className="font-serif-display text-3xl sm:text-4xl text-navy-950">{item.value}</div>
            <p className="mt-2 text-sm text-navy-900/60">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
