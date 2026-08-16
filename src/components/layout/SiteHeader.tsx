"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/dictionaries";
import { LiquidGlassSurface } from "@/components/glass/LiquidGlassSurface";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { cn } from "@/lib/cn";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? `/${locale}`;

  const navItems: { href: string; label: string }[] = [
    { href: `/${locale}/chambres`, label: dict.nav.rooms },
    { href: `/${locale}/aquapark`, label: dict.nav.aquapark },
    { href: `/${locale}/spa`, label: dict.nav.spa },
    { href: `/${locale}/restaurants`, label: dict.nav.dining },
    { href: `/${locale}/animations`, label: dict.nav.leisure },
    { href: `/${locale}/galerie`, label: dict.nav.gallery },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between gap-3 h-16 lg:h-[4.5rem] rounded-full mt-3 px-3 sm:px-4 lg:px-6 bg-offwhite/85 backdrop-blur-md border border-navy-900/10 shadow-[0_8px_30px_-12px_rgba(6,21,39,0.25)]">
          <LiquidGlassSurface shape="pill" borderRadius={999} tintOpacity={0.12} />

          <Link href={`/${locale}`} className="relative z-10 flex flex-col leading-none shrink-0">
            <span className="font-serif-display text-xl lg:text-2xl tracking-wide text-navy-950">
              Zodiac
            </span>
            <span className="text-[9px] lg:text-[10px] tracking-[0.22em] uppercase text-gold-600">
              Hôtel &amp; Aqua Park
            </span>
          </Link>

          <nav className="relative z-10 hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-navy-900/75">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-navy-950",
                    active && "text-navy-950"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="relative z-10 hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher locale={locale} />
            <Link
              href={`/${locale}/contact`}
              className="rounded-full bg-navy-950 text-offwhite text-sm font-medium px-4 py-2 hover:bg-navy-900 transition-colors"
            >
              {dict.nav.reserve}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={dict.nav.menuLabel}
            className="relative z-10 lg:hidden p-2 -mr-1 text-navy-950"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-3xl bg-offwhite/95 backdrop-blur-md border border-navy-900/10 shadow-xl p-5">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-base font-medium text-navy-900/85 border-b border-navy-900/5 last:border-none"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex items-center justify-between gap-3">
              <LanguageSwitcher locale={locale} />
              <Link
                href={`/${locale}/contact`}
                onClick={() => setOpen(false)}
                className="rounded-full bg-navy-950 text-offwhite text-sm font-medium px-4 py-2.5"
              >
                {dict.nav.reserve}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
