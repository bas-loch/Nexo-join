"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#restaurant", label: "Le restaurant" },
  { href: "#specialites", label: "Spécialités" },
  { href: "#menu", label: "Menu" },
  { href: "#galerie", label: "Galerie" },
  { href: "#infos", label: "Infos pratiques" },
  { href: "#localisation", label: "Localisation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal-950/80 backdrop-blur-md border-b border-ivory/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 flex items-center justify-between h-20">
        <a href="#top" className="font-display text-xl tracking-[0.15em] text-ivory">
          CAICCO <span className="text-gold-400">ROMANO</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[12px] tracking-widest2 uppercase text-ivory/65 hover:text-gold-300 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#reservation"
          className="hidden lg:inline-flex items-center px-6 py-2.5 text-[11px] tracking-widest2 uppercase font-body font-medium border border-gold-400/60 text-gold-300 hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-400"
        >
          Réserver
        </a>

        <button
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[6px]"
        >
          <span
            className={`block h-px w-6 bg-ivory transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ivory transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-ivory transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${
          open ? "max-h-[420px]" : "max-h-0"
        } bg-charcoal-950/95 backdrop-blur-md border-b border-ivory/[0.06]`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-sm tracking-widest2 uppercase text-ivory/75"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center px-6 py-3 text-[11px] tracking-widest2 uppercase font-body font-medium border border-gold-400/60 text-gold-300"
          >
            Réserver une table
          </a>
        </nav>
      </div>
    </header>
  );
}
