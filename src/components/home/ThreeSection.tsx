import type { Dictionary } from "@/i18n/dictionaries";
import { ThreeVisual } from "./ThreeVisual";

export function ThreeSection({ dict }: { dict: Dictionary }) {
  const { kicker, title, text } = dict.home.horizon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 text-offwhite">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 40%, rgba(200,162,77,0.25), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold-400">
            {kicker}
          </span>
          <h2 className="mt-4 font-serif-display text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-md text-offwhite/75">{text}</p>
        </div>
        <div className="relative h-64 sm:h-80 lg:h-96" aria-hidden>
          <ThreeVisual />
        </div>
      </div>
    </section>
  );
}
