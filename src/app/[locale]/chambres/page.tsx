import type { Metadata } from "next";
import { Check } from "lucide-react";
import { resolveLocale, pageMetadata } from "@/lib/metadata";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CtaBand } from "@/components/common/CtaBand";
import { RoomCard } from "@/components/rooms/RoomCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/chambres", dict.pagesMeta.rooms);
}

export default async function RoomsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const { rooms } = dict;

  return (
    <>
      <PageHero title={rooms.hero.title} subtitle={rooms.hero.subtitle} imageId="room-quadruple" imageAlt={dict.images["room-quadruple"]} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 text-center">
        <p className="text-navy-900/70">{rooms.intro}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {rooms.types.map((room) => (
            <RoomCard key={room.id} room={room} imageAlt={dict.images[room.imageId] ?? room.name} />
          ))}
        </div>
      </section>

      <section className="bg-sand-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading title={rooms.amenitiesTitle} align="center" />
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4 text-sm text-navy-900/75">
            {rooms.amenities.map((amenity) => (
              <li key={amenity} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-gold-600 shrink-0 mt-0.5" aria-hidden />
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand locale={locale} title={rooms.cta.title} text={rooms.cta.text} cta={rooms.cta.cta} />
    </>
  );
}
