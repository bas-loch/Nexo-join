import { Quote } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ReviewsSection({ dict }: { dict: Dictionary }) {
  const { kicker, title, text, quotes } = dict.home.reviews;

  return (
    <section className="bg-sand-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <SectionHeading kicker={kicker} title={title} align="center" />
        <p className="mt-4 text-center text-navy-900/65 max-w-xl mx-auto">{text}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((quote) => (
            <figure key={quote.author} className="rounded-3xl bg-offwhite p-6 border border-navy-900/10">
              <Quote className="h-5 w-5 text-gold-500" aria-hidden />
              <blockquote className="mt-3 text-sm text-navy-900/80 leading-relaxed">
                {quote.text}
              </blockquote>
              <figcaption className="mt-4 text-xs text-navy-900/50">{quote.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
