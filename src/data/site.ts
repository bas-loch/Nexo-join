// Données réelles de l'établissement. Ne rien ajouter ici qui ne soit
// confirmé par le client (voir historique de la commande).

export const site = {
  name: "Ben's Resto Café",
  legalAddress: "Bloc 6, Résidence Nesrine, Yasmine Hammamet 8057, Tunisie",
  phoneDisplay: "+216 55 455 431",
  phoneHref: "tel:+21655455431",
  whatsappNumber: "21655455431",
  gps: {
    lat: 36.37817,
    lng: 10.5383,
  },
  hours: {
    open: "07:00",
    close: "23:30",
    days: "7 jours sur 7",
  },
  googleRating: {
    value: 4.7,
    count: 143,
    asOfIso: "2026-08-17",
  },
  googleMapsUrl: "https://www.google.com/maps?q=36.37817,10.53830",
  googleDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=36.37817,10.53830",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=36.37817,10.53830&z=17&output=embed",
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
