"use client";

import { contact, restaurant } from "@/lib/restaurant-data";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-ivory/[0.07] px-6 pt-16 pb-10">
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-2xl text-ivory">{restaurant.name}</p>
          <p className="mt-3 font-body text-sm text-ivory/45 leading-relaxed">
            {t.hero.tagline}
          </p>
        </div>

        <div>
          <span className="font-body text-[11px] tracking-widest2 uppercase text-gold-400/70">
            {t.footer.headings.adresse}
          </span>
          <p className="mt-3 font-body text-sm text-ivory/55 leading-relaxed">
            {contact.address.line1}
            <br />
            {contact.address.line2}
            <br />
            {contact.address.line3}
          </p>
        </div>

        <div>
          <span className="font-body text-[11px] tracking-widest2 uppercase text-gold-400/70">
            {t.footer.headings.contact}
          </span>
          <p className="mt-3 font-body text-sm text-ivory/55 leading-relaxed">
            {contact.phone.display}
            <br />
            {t.info.hoursFallback}
          </p>
        </div>

        <div>
          <span className="font-body text-[11px] tracking-widest2 uppercase text-gold-400/70">
            {t.footer.headings.reservation}
          </span>
          <div className="mt-3 flex flex-col gap-2 font-body text-sm text-ivory/55">
            <a href={contact.phone.href} className="hover:text-gold-300 transition-colors w-fit">
              {t.footer.links.appeler}
            </a>
            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300 transition-colors w-fit"
            >
              {t.footer.links.whatsapp}
            </a>
            <a
              href={contact.googleMaps.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300 transition-colors w-fit"
            >
              {t.footer.links.googleMaps}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-14 pt-8 border-t border-ivory/[0.06]">
        <p className="font-body text-xs text-ivory/30">
          © {new Date().getFullYear()} {restaurant.name} — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
