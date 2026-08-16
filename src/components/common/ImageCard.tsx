import { HotelImage } from "@/components/common/HotelImage";

export function ImageCard({
  imageId,
  imageAlt,
  title,
  text,
}: {
  imageId: string;
  imageAlt: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl overflow-hidden border border-navy-900/10 bg-offwhite">
      <div className="relative aspect-[4/3] bg-navy-900/5">
        <HotelImage id={imageId} alt={imageAlt} className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
      </div>
      <div className="p-5">
        <h3 className="font-serif-display text-lg text-navy-950">{title}</h3>
        <p className="mt-2 text-sm text-navy-900/70">{text}</p>
      </div>
    </div>
  );
}
