import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const title = "Caicco Romano — Restaurant Méditerranéen à Yasmine Hammamet";
const description =
  "Caicco Romano, restaurant italien, tunisien et méditerranéen au cœur de la Médina Yasmine Hammamet. Fruits de mer, poissons et pâtes fraîches dans un cadre élégant.";

// Remplacer par le nom de domaine définitif une fois le site déployé.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://caicco-romano.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Caicco Romano",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

// Données structurées schema.org — uniquement les champs vérifiés (nom,
// adresse, téléphone, type de cuisine). Volontairement sans horaires ni
// note moyenne, ces informations n'étant pas confirmées de façon fiable ;
// les ajouter ici impliquerait de les tenir à jour en continu.
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Caicco Romano",
  servesCuisine: ["Italian", "Tunisian", "Mediterranean", "Seafood"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "4 Rue des Éléphants",
    addressLocality: "Médina Yasmine Hammamet",
    postalCode: "8050",
    addressCountry: "TN",
  },
  telephone: "+216-90-388-880",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="cinematic-ground" aria-hidden="true" />
        <LanguageProvider>{children}</LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </body>
    </html>
  );
}
