"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import { LiquidGlassSurface } from "@/components/glass/LiquidGlassSurface";
import { cn } from "@/lib/cn";

export function StickyReserveButton({ locale, label }: { locale: Locale; label: string }) {
  const href = `/${locale}/contact#reservation`;
  const [hidden, setHidden] = useState(false);

  // Le formulaire de réservation a son propre CTA visible : inutile de
  // superposer le bouton flottant par-dessus quand cette section est à l'écran.
  useEffect(() => {
    const target = document.getElementById("reservation");
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), {
      threshold: 0.2,
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 sm:bottom-5 sm:right-5 sm:left-auto sm:inset-x-auto transition-all duration-300",
        hidden ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
      )}
    >
      <Link
        href={href}
        className="relative flex items-center justify-center gap-2 w-full sm:w-auto sm:rounded-full rounded-none px-6 py-4 sm:py-3.5 bg-gold-500/95 text-navy-950 font-semibold text-sm sm:text-base shadow-[0_10px_30px_-10px_rgba(6,21,39,0.5)] overflow-hidden hover:bg-gold-400 transition-colors"
      >
        <LiquidGlassSurface shape="pill" borderRadius={999} tintOpacity={0.1} />
        <CalendarCheck className="relative z-10 h-5 w-5" aria-hidden />
        <span className="relative z-10">{label}</span>
      </Link>
    </div>
  );
}
