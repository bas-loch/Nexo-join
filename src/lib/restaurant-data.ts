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
    // Horaires précis non confirmés par une source fiable : on évite
    // d'afficher un créneau deviné et on renvoie vers un contact direct.
    display: "Nous contacter pour les horaires",
    verified: false,
  },
  googleMaps: {
    href: "https://www.google.com/maps/search/?api=1&query=Caicco+Romano+4+Rue+des+Elephants+Medina+Yasmine+Hammamet+Tunisie",
    verified: false,
  },
  social: {
    // Plusieurs pages Facebook similaires existent en ligne ; la page
    // officielle doit être confirmée avant publication.
    facebook: null as string | null,
    instagram: null as string | null,
  },
};

// Notes relevées sur les plateformes d'avis publiques au moment de la
// construction du site. Elles évoluent en continu — à rafraîchir
// périodiquement plutôt que traitées comme définitives.
export const ratings = [
  { source: "TripAdvisor", score: "4.3/5", reviews: "63 avis" },
  { source: "RestaurantGuru", score: "4/5", reviews: "199 avis" },
];

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

// Plats et prix relevés directement sur le panneau-menu affiché sur place
// (photo fournie par l'utilisateur, en Dinars Tunisiens). Il s'agit donc de
// données sourcées et non inventées — mais un menu papier peut évoluer :
// à reconfirmer auprès du restaurant avant publication définitive.
// Desserts et boissons n'apparaissaient pas sur le panneau photographié.
export const menu: MenuCategory[] = [
  {
    title: "Entrées",
    items: [
      { name: "Carpaccio de bœuf", description: null, price: "13 DT" },
      { name: "Festival de tapas tunisienne", description: null, price: "14 DT" },
      { name: "Calamars dorés", description: null, price: "16 DT" },
      { name: "Cocktail de crevettes", description: null, price: "17 DT" },
      { name: "Dialogue de fruits de mer sauté", description: null, price: "19 DT" },
    ],
  },
  {
    title: "Poissons",
    items: [
      {
        name: "Poisson du jour grillé selon arrivage",
        description: "Dorade, loup, rouget… (100 g)",
        price: "9.5 DT",
      },
      { name: "Dorade à la Sfaxienne", description: "(100 g)", price: "10 DT" },
      { name: "Filet de loup sauce safranée", description: null, price: "29 DT" },
      { name: "Grillade mixte de poisson", description: null, price: "32 DT" },
    ],
  },
  {
    title: "Fruits de mer",
    items: [
      { name: "Gambas grillées", description: null, price: "34 DT" },
      { name: "Seiche ou calamar grillé", description: null, price: "21 DT" },
      {
        name: "Assiette de délices de la mer",
        description: "1 personne",
        price: "35 DT",
      },
      {
        name: "Symphonie de la mer",
        description: "2 personnes",
        price: "79 DT",
      },
      { name: "Langouste selon votre goût", description: "(100 g)", price: "19 DT" },
    ],
  },
  {
    title: "Pâtes",
    items: [
      { name: "Spaghetti aglio, olio, peperoncino", description: null, price: "12 DT" },
      { name: "Spaghetti carbonara", description: null, price: "15 DT" },
      { name: "Spaghetti aux fruits de mer", description: null, price: "20 DT" },
      { name: "Tagliatelle aux crevettes", description: null, price: "19 DT" },
      { name: "Risotto aux fruits de mer", description: null, price: "20 DT" },
    ],
  },
  {
    title: "Plats principaux",
    items: [
      { name: "Steak de bœuf grillé", description: null, price: "26 DT" },
      { name: "Filet de bœuf à l'échalote", description: null, price: "34 DT" },
      { name: "Poulet grillé", description: null, price: "16 DT" },
      { name: "Marmite du pêcheur", description: null, price: "28 DT" },
      { name: "Paëlla pêcheur", description: "1 personne", price: "29 DT" },
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
