import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/dictionaries";
import { hotel } from "@/lib/hotel";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  const navItems: { href: string; label: string }[] = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/chambres`, label: dict.nav.rooms },
    { href: `/${locale}/aquapark`, label: dict.nav.aquapark },
    { href: `/${locale}/spa`, label: dict.nav.spa },
    { href: `/${locale}/restaurants`, label: dict.nav.dining },
    { href: `/${locale}/animations`, label: dict.nav.leisure },
    { href: `/${locale}/galerie`, label: dict.nav.gallery },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-navy-950 text-offwhite mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-serif-display text-2xl">Zodiac</span>
          <p className="mt-3 text-sm text-offwhite/70 max-w-xs">{dict.footer.tagline}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4">
            {dict.footer.addressTitle}
          </h3>
          <p className="flex gap-2 text-sm text-offwhite/80">
            <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-gold-400" aria-hidden />
            <span>
              {hotel.address.line1}
              <br />
              {hotel.address.postalCode} {hotel.address.city}
              <br />
              {hotel.address.country}
            </span>
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4">
            {dict.footer.contactTitle}
          </h3>
          <ul className="space-y-2 text-sm text-offwhite/80">
            <li>
              <a href={hotel.phoneHref} className="flex items-center gap-2 hover:text-offwhite">
                <Phone className="h-4 w-4 text-gold-400" aria-hidden /> {hotel.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${hotel.email}`} className="flex items-center gap-2 hover:text-offwhite">
                <Mail className="h-4 w-4 text-gold-400" aria-hidden /> {hotel.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4">
            {dict.footer.navTitle}
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-offwhite/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-offwhite">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-offwhite/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-offwhite/50">
          <p>
            © {year} {hotel.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.designNote}</p>
        </div>
      </div>
    </footer>
  );
}
