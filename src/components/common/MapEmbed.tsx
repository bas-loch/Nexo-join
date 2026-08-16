import { hotel } from "@/lib/hotel";

export function MapEmbed({ title, className }: { title: string; className?: string }) {
  return (
    <div className={className ?? "rounded-3xl overflow-hidden border border-navy-900/10 h-80"}>
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${hotel.geo.lat},${hotel.geo.lng}&z=15&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0"
      />
    </div>
  );
}
