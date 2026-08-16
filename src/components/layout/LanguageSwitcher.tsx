"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabelsShort, type Locale } from "@/i18n/locales";
import { cn } from "@/lib/cn";

function pathWithoutLocale(pathname: string, currentLocale: Locale): string {
  const prefix = `/${currentLocale}`;
  if (pathname === prefix) return "/";
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  return pathname;
}

export function LanguageSwitcher({ locale, className }: { locale: Locale; className?: string }) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathWithoutLocale(pathname, locale);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest === "/" ? "" : rest}`}
          aria-current={l === locale ? "true" : undefined}
          className={cn(
            "px-2 py-1 text-xs font-medium tracking-wide rounded-full transition-colors",
            l === locale
              ? "bg-navy-900 text-offwhite"
              : "text-navy-900/70 hover:text-navy-900 hover:bg-navy-900/10"
          )}
        >
          {localeLabelsShort[l]}
        </Link>
      ))}
    </div>
  );
}
