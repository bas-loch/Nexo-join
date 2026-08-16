import { Check } from "lucide-react";
import { HotelImage } from "@/components/common/HotelImage";
import type { RoomType } from "@/i18n/dictionaries/types";

export function RoomCard({ room, imageAlt }: { room: RoomType; imageAlt: string }) {
  return (
    <div className="rounded-3xl overflow-hidden border border-navy-900/10 bg-offwhite flex flex-col">
      <div className="relative aspect-[4/3] bg-navy-900/5">
        <HotelImage id={room.imageId} alt={imageAlt} className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif-display text-xl text-navy-950">{room.name}</h3>
          <span className="text-xs font-medium text-gold-600 shrink-0">{room.capacity}</span>
        </div>
        <p className="mt-3 text-sm text-navy-900/70 flex-1">{room.description}</p>
        <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-navy-900/70">
          {room.features.map((feature) => (
            <li key={feature} className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-gold-600 shrink-0" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
