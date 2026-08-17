import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { images, type ImageKey } from "@/data/images";
import type { Locale } from "@/i18n/routing";

function fileExists(filename: string): boolean {
  const filePath = path.join(process.cwd(), "public", "images", filename);
  try {
    return fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

type Props = {
  imageKey: ImageKey;
  locale: Locale;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function SiteImage({
  imageKey,
  locale,
  className,
  priority,
  sizes = "100vw",
}: Props) {
  const slot = images[imageKey];
  const alt = slot.alt[locale];
  const hasFile = fileExists(slot.filename);

  if (!hasFile) {
    return (
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 border border-olive/30 bg-sable p-6 text-center ${className ?? ""}`}
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-olive/70">
          {locale === "fr" ? "Photo a venir" : "Photo pending"}
        </span>
        <span className="font-serif text-base leading-snug text-terracotta-dark">
          {alt}
        </span>
        <span className="font-mono text-[10px] text-olive/50">
          {slot.filename}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={`/images/${slot.filename}`}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className ?? ""}`}
    />
  );
}
