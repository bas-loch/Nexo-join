import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { resolveLocale, pageMetadata } from "@/lib/metadata";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { MapEmbed } from "@/components/common/MapEmbed";
import { ReservationForm } from "@/components/reservation/ReservationForm";
import { hotel } from "@/lib/hotel";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/contact", dict.pagesMeta.contact);
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const { contact } = dict;

  return (
    <>
      <PageHero title={contact.hero.title} subtitle={contact.hero.subtitle} />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <SectionHeading title={contact.infoTitle} />
          <ul className="mt-6 space-y-4 text-navy-900/80">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gold-600 shrink-0 mt-0.5" aria-hidden />
              <span>
                {hotel.address.line1}
                <br />
                {hotel.address.postalCode} {hotel.address.city}, {hotel.address.country}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gold-600 shrink-0" aria-hidden />
              <a href={hotel.phoneHref} className="hover:text-navy-950">
                {hotel.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gold-600 shrink-0" aria-hidden />
              <a href={`mailto:${hotel.email}`} className="hover:text-navy-950">
                {hotel.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-gold-600 shrink-0" aria-hidden />
              <span>{dict.common.stars4}</span>
            </li>
          </ul>

          <h3 className="mt-10 text-xs font-semibold tracking-[0.2em] uppercase text-navy-900/50">
            {contact.mapTitle}
          </h3>
          <MapEmbed title={hotel.name} className="mt-4 rounded-3xl overflow-hidden border border-navy-900/10 h-72" />
        </div>

        <div id="reservation" className="scroll-mt-28">
          <SectionHeading title={contact.formTitle} />
          <p className="mt-3 text-navy-900/70">{contact.formIntro}</p>
          <div className="mt-8">
            <ReservationForm dict={dict} />
          </div>
        </div>
      </section>
    </>
  );
}
