import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Caicco Romano — Restaurant Méditerranéen à Yasmine Hammamet",
  description:
    "Caicco Romano, restaurant italien, tunisien et méditerranéen au cœur de la Médina Yasmine Hammamet. Fruits de mer, poissons et pâtes fraîches dans un cadre élégant.",
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
        {children}
      </body>
    </html>
  );
}
