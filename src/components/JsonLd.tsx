import fs from "node:fs";
import path from "node:path";
import { site } from "@/data/site";
import { images } from "@/data/images";
import type { Locale } from "@/i18n/routing";

const SITE_URL = "https://bens-resto-cafe.netlify.app";

function fileExists(filename: string): boolean {
  try {
    return fs
      .statSync(path.join(process.cwd(), "public", "images", filename))
      .isFile();
  } catch {
    return false;
  }
}

export default function JsonLd({ locale }: { locale: Locale }) {
  const heroExists = fileExists(images.hero.filename);

  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    url: `${SITE_URL}/${locale}`,
    ...(heroExists
      ? { image: [`${SITE_URL}/images/${images.hero.filename}`] }
      : {}),
    telephone: site.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bloc 6, Résidence Nesrine",
      addressLocality: "Yasmine Hammamet",
      postalCode: "8057",
      addressCountry: "TN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.gps.lat,
      longitude: site.gps.lng,
    },
    servesCuisine: ["Tunisian", "Italian"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: site.hours.open,
      closes: site.hours.close,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.googleRating.value,
      reviewCount: site.googleRating.count,
    },
    hasMap: site.googleMapsUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
