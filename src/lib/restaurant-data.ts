// Données du restaurant Caicco Romano.
//
// Les champs marqués `verified: true` proviennent de recherches croisées sur
// plusieurs sources publiques (fiches restaurant, avis) au moment de la
// construction du site. Les champs marqués `verified: false` doivent être
// confirmés directement auprès du restaurant avant publication.

export const restaurant = {
  name: "Caicco Romano",
  tagline: "Restaurant • Seafood • Mediterranean Cuisine",
  // Proposition éditoriale temporaire — aucun slogan officiel confirmé.
  editorialLine: "Une expérience méditerranéenne entre terre et mer.",
  cuisineTypes: ["Italienne", "Tunisienne", "Méditerranéenne", "Fruits de mer"],
};

export const contact = {
  address: {
    line1: "4 Rue des Éléphants",
    line2: "Médina Yasmine Hammamet",
    line3: "8050, Tunisie",
    verified: true,
  },
  phone: {
    display: "+216 90 388 880",
    href: "tel:+21690388880",
    verified: true,
  },
  whatsapp: {
    // Numéro identique au téléphone affiché publiquement — à confirmer que
    // la ligne WhatsApp est bien active avant mise en ligne.
    href: "https://wa.me/21690388880",
    verified: false,
  },
  hours: {
    // Trouvé sur une seule source secondaire — à confirmer avec le restaurant.
    display: "09h00 – 02h00 (à confirmer)",
    verified: false,
  },
  googleMaps: {
    href: "https://www.google.com/maps/search/?api=1&query=Caicco+Romano+Medina+Yasmine+Hammamet+Tunisie",
    verified: false,
  },
  social: {
    // Plusieurs pages Facebook similaires existent en ligne ; la page
    // officielle doit être confirmée avant publication.
    facebook: null as string | null,
    instagram: null as string | null,
  },
};

export const about = {
  paragraphs: [
    "Niché au cœur de la Médina Yasmine Hammamet, Caicco Romano invite à une parenthèse gourmande où la Méditerranée s'invite à chaque assiette. Ici, la cuisine italienne dialogue avec les saveurs tunisiennes dans une ambiance chaleureuse et raffinée.",
    "Fruits de mer, poissons et produits de saison sont travaillés avec attention pour révéler la fraîcheur et l'authenticité des recettes méditerranéennes, entre tradition et élégance contemporaine.",
    "Un cadre pensé pour prendre le temps — celui d'un déjeuner en terrasse, d'un dîner entre proches ou d'une soirée au bord de la Méditerranée.",
  ],
  highlights: [
    { label: "Fraîcheur", description: "Produits de la mer sélectionnés avec exigence" },
    { label: "Méditerranée", description: "Cuisine italienne et tunisienne réunies" },
    { label: "Ambiance", description: "Un cadre élégant au cœur de la médina" },
  ],
};

export type SpecialtyCategory = {
  title: string;
  description: string;
};

export const specialties: SpecialtyCategory[] = [
  {
    title: "Fruits de mer",
    description: "Crevettes, calamars et coquillages sublimés avec fraîcheur.",
  },
  {
    title: "Poissons",
    description: "Poissons méditerranéens préparés selon l'arrivage du jour.",
  },
  {
    title: "Pâtes",
    description: "Pâtes fraîches, risottos et recettes italiennes de caractère.",
  },
  {
    title: "Cuisine méditerranéenne",
    description: "Une palette de saveurs entre Italie et Tunisie.",
  },
  {
    title: "Spécialités du restaurant",
    description: "Pizzas au feu de bois et créations signature de la maison.",
  },
  {
    title: "Desserts",
    description: "Notes sucrées pour clore le repas en douceur.",
  },
];

export type MenuItem = {
  name: string | null; // null = plat à confirmer
  description: string | null;
  price: string | null; // null = prix à confirmer
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

// Aucun plat ni prix précis n'a pu être vérifié à partir de sources
// officielles. La structure ci-dessous prépare l'affichage du menu ;
// chaque entrée doit être complétée avec les informations confirmées par
// le restaurant avant publication.
export const menu: MenuCategory[] = [
  {
    title: "Entrées",
    items: [
      { name: null, description: null, price: null },
      { name: null, description: null, price: null },
    ],
  },
  {
    title: "Poissons",
    items: [
      { name: null, description: null, price: null },
      { name: null, description: null, price: null },
    ],
  },
  {
    title: "Fruits de mer",
    items: [
      { name: null, description: null, price: null },
      { name: null, description: null, price: null },
    ],
  },
  {
    title: "Pâtes",
    items: [
      { name: null, description: null, price: null },
      { name: null, description: null, price: null },
    ],
  },
  {
    title: "Plats principaux",
    items: [
      { name: null, description: null, price: null },
      { name: null, description: null, price: null },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: null, description: null, price: null },
      { name: null, description: null, price: null },
    ],
  },
  {
    title: "Boissons",
    items: [
      { name: null, description: null, price: null },
      { name: null, description: null, price: null },
    ],
  },
];
