import { HotelImage } from "@/components/common/HotelImage";

export function PageHero({
  title,
  subtitle,
  imageId,
  imageAlt,
}: {
  title: string;
  subtitle: string;
  imageId?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative bg-navy-950 text-offwhite">
      {imageId && imageAlt && (
        <div className="absolute inset-0 opacity-50">
          <HotelImage id={imageId} alt={imageAlt} className="object-cover" priority />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-navy-950/75 to-navy-950" />
      <div className="relative mx-auto max-w-4xl px-6 py-20 sm:py-28 text-center">
        <h1 className="font-serif-display text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-4 text-offwhite/80 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}
