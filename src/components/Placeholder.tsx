import { ImageOff } from "lucide-react";

/**
 * Repli visuel pour un emplacement qui n'a pas encore de vraie photo.
 * Aucune image générée ou de banque ne doit remplacer ceci (voir CLAUDE.md).
 */
export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-navy/15 bg-navy/[0.04] text-navy/40 ${className}`}
    >
      <ImageOff className="h-6 w-6" strokeWidth={1.5} aria-hidden />
      <span className="px-3 text-center font-mono text-[11px] leading-snug">{label}</span>
    </div>
  );
}
