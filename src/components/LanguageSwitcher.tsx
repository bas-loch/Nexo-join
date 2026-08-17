"use client";

import { useState, useRef, useEffect } from "react";
import { locales, localeLabels } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Choisir la langue"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] tracking-widest2 uppercase font-body text-ivory/60 hover:text-gold-300 transition-colors duration-300 border border-ivory/10 hover:border-gold-400/40"
      >
        {localeLabels[locale]}
        <svg
          viewBox="0 0 12 8"
          className={`w-2.5 h-2.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
        >
          <path d="M1 1.5L6 6.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-24 bg-charcoal-950/95 backdrop-blur-md border border-ivory/10 z-50">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLocale(l);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2.5 text-[11px] tracking-widest2 uppercase font-body transition-colors duration-200 ${
                l === locale ? "text-gold-300" : "text-ivory/60 hover:text-ivory"
              }`}
            >
              {localeLabels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
