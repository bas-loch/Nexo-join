import Image from "next/image";
import { ImageOff } from "lucide-react";
import { getImage } from "@/lib/images";
import { availableImages } from "@/lib/available-images.generated";
import { cn } from "@/lib/cn";

interface HotelImageProps {
  id: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
}

export function HotelImage({
  id,
  alt,
  className,
  sizes,
  priority = false,
  fill = true,
}: HotelImageProps) {
  const entry = getImage(id);
  const isAvailable = availableImages.has(entry.filename);

  if (!isAvailable) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-navy-900/[0.04] border border-dashed border-navy-900/15 text-navy-900/40",
          fill ? "absolute inset-0" : "w-full",
          className
        )}
        style={fill ? undefined : { aspectRatio: `${entry.width} / ${entry.height}` }}
      >
        <ImageOff className="h-6 w-6" strokeWidth={1.5} aria-hidden />
        <span className="font-mono text-[11px] px-3 text-center leading-snug">
          {entry.filename}
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={`/images/${entry.filename}`}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={`/images/${entry.filename}`}
      alt={alt}
      width={entry.width}
      height={entry.height}
      sizes={sizes}
      className={className}
      priority={priority}
    />
  );
}
