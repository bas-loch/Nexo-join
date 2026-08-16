import type { Metadata } from "next";
import { resolveLocale, pageMetadata } from "@/lib/metadata";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { HotelImage } from "@/components/common/HotelImage";
import { imagesByCategory, type ImageCategory } from "@/lib/images";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/galerie", dict.pagesMeta.gallery);
}

const categoryOrder: ImageCategory[] = [
  "rooms",
  "aquapark",
  "beach",
  "spa",
  "dining",
  "leisure",
  "exterior",
];

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const { gallery } = dict;

  return (
    <>
      <PageHero title={gallery.hero.title} subtitle={gallery.hero.subtitle} imageId="exterior" imageAlt={dict.images.exterior} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {categoryOrder.map((category) => {
          const images = imagesByCategory(category);
          if (images.length === 0) return null;

          return (
            <section key={category}>
              <SectionHeading title={gallery.categories[category]} />
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-navy-900/5">
                    <HotelImage
                      id={image.id}
                      alt={dict.images[image.id] ?? image.id}
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
