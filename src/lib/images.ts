export type ImageCategory =
  | "rooms"
  | "dining"
  | "spa"
  | "aquapark"
  | "beach"
  | "leisure"
  | "exterior";

export interface ImageEntry {
  id: string;
  filename: string;
  category: ImageCategory;
  width: number;
  height: number;
}

// Chaque photo listée ici doit provenir de l'hôtel lui-même (aucune banque
// d'images). Tant que le fichier n'existe pas dans /public/images, le
// composant HotelImage affiche un bloc gris nommé au lieu de l'image.
export const imageManifest: ImageEntry[] = [
  { id: "room-standard", filename: "chambre-standard.webp", category: "rooms", width: 1600, height: 1067 },
  { id: "room-triple", filename: "chambre-double-usage-triple.webp", category: "rooms", width: 1600, height: 1067 },
  { id: "room-quadruple", filename: "chambre-quadruple.webp", category: "rooms", width: 1600, height: 1067 },
  { id: "room-sea-view", filename: "vue-mer-piscine.webp", category: "rooms", width: 1600, height: 1067 },
  { id: "room-garden-view", filename: "vue-jardin.webp", category: "rooms", width: 1600, height: 1067 },

  { id: "restaurant-central", filename: "restaurant-central.webp", category: "dining", width: 1600, height: 1067 },
  { id: "snackbar", filename: "snackbar.webp", category: "dining", width: 1600, height: 1067 },
  { id: "bar-lounge", filename: "bar-salon.webp", category: "dining", width: 1600, height: 1067 },
  { id: "bar-pool", filename: "bar-piscine.webp", category: "dining", width: 1600, height: 1067 },
  { id: "cocktail", filename: "cocktail.webp", category: "dining", width: 1600, height: 1067 },

  { id: "spa-hammam", filename: "spa-hammam.webp", category: "spa", width: 1600, height: 1067 },
  { id: "spa-massage", filename: "spa-massage.webp", category: "spa", width: 1600, height: 1067 },

  { id: "aquapark-slides", filename: "aquapark-toboggans.webp", category: "aquapark", width: 1600, height: 1067 },
  { id: "pool-outdoor", filename: "piscine-exterieure.webp", category: "aquapark", width: 1600, height: 1067 },
  { id: "pool-indoor", filename: "piscine-interieure.webp", category: "aquapark", width: 1600, height: 1067 },
  { id: "kids-pool", filename: "pataugeoire-enfants.webp", category: "aquapark", width: 1600, height: 1067 },

  { id: "beach", filename: "plage.webp", category: "beach", width: 1600, height: 1067 },

  { id: "evening-animation", filename: "animation-soiree.webp", category: "leisure", width: 1600, height: 1067 },
  { id: "kids-club", filename: "club-enfants.webp", category: "leisure", width: 1600, height: 1067 },
  { id: "gym", filename: "salle-sport.webp", category: "leisure", width: 1600, height: 1067 },
  { id: "minigolf", filename: "mini-golf.webp", category: "leisure", width: 1600, height: 1067 },

  { id: "exterior", filename: "exterieur-hotel.webp", category: "exterior", width: 1600, height: 1067 },
  { id: "logo", filename: "logo.webp", category: "exterior", width: 800, height: 800 },
];

export function getImage(id: string): ImageEntry {
  const entry = imageManifest.find((image) => image.id === id);
  if (!entry) {
    throw new Error(`Image inconnue dans le manifeste : ${id}`);
  }
  return entry;
}

export function imagesByCategory(category: ImageCategory): ImageEntry[] {
  return imageManifest.filter((image) => image.category === category);
}
