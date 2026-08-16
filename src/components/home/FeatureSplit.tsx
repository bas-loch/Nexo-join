import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { HotelImage } from "@/components/common/HotelImage";
import { SectionHeading } from "@/components/common/SectionHeading";
import { cn } from "@/lib/cn";

interface FeatureSplitProps {
  kicker: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  imageId: string;
  imageAlt: string;
  bullets?: string[];
  badge?: string;
  reverse?: boolean;
}

export function FeatureSplit({
  kicker,
  title,
  text,
  cta,
  href,
  imageId,
  imageAlt,
  bullets,
  badge,
  reverse = false,
}: FeatureSplitProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div
          className={cn(
            "relative aspect-[4/3] rounded-3xl overflow-hidden bg-navy-900/5",
            reverse ? "lg:order-2" : "lg:order-1"
          )}
        >
          <HotelImage id={imageId} alt={imageAlt} className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          {badge && (
            <span className="absolute top-4 left-4 rounded-full bg-gold-500 text-navy-950 text-xs font-semibold px-3 py-1.5 shadow">
              {badge}
            </span>
          )}
        </div>

        <div className={reverse ? "lg:order-1" : "lg:order-2"}>
          <SectionHeading kicker={kicker} title={title} />
          <p className="mt-4 text-navy-900/70">{text}</p>

          {bullets && (
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-navy-900/75">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold-600 shrink-0" aria-hidden />
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          <Link
            href={href}
            className="mt-7 inline-flex items-center gap-2 text-navy-950 font-medium border-b border-gold-500 pb-0.5 hover:gap-3 transition-all"
          >
            {cta} <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
