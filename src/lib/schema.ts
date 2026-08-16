import type { Locale } from "@/i18n/locales";
import { hotel, siteUrl } from "@/lib/hotel";

export function hotelJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    description:
      "Hôtel 4 étoiles avec aqua park, spa et 218 chambres à Yasmine Hammamet, Tunisie.",
    url: `${siteUrl}/${locale}`,
    telephone: hotel.phone,
    email: hotel.email,
    starRating: {
      "@type": "Rating",
      ratingValue: hotel.stars,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.address.line1,
      postalCode: hotel.address.postalCode,
      addressLocality: hotel.address.city,
      addressCountry: hotel.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hotel.geo.lat,
      longitude: hotel.geo.lng,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Aqua Park", value: true },
      { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wifi gratuit", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parking gratuit", value: true },
      { "@type": "LocationFeatureSpecification", name: "Piscine intérieure chauffée", value: true },
      { "@type": "LocationFeatureSpecification", name: "Accès PMR", value: true },
    ],
    numberOfRooms: hotel.counts.rooms,
    petsAllowed: false,
  } as const;
}
