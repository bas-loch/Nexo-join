// Manifeste des photos attendues (voir Phase 1). Dépose les fichiers
// réels dans /public/images sous le nom exact indiqué ici : ils
// remplaceront automatiquement le bloc de substitution, aucun code à
// changer.

export type ImageSlot = {
  filename: string;
  alt: { fr: string; en: string };
  required: boolean;
};

export const images = {
  hero: {
    filename: "hero.jpg",
    alt: {
      fr: "Vue de la terrasse de Ben's Resto Café",
      en: "View of Ben's Resto Café's terrace",
    },
    required: true,
  },
  terrasse01: {
    filename: "terrasse-01.jpg",
    alt: {
      fr: "Terrasse extérieure avec tables espacées",
      en: "Outdoor terrace with well-spaced tables",
    },
    required: true,
  },
  terrasse02: {
    filename: "terrasse-02.jpg",
    alt: {
      fr: "Terrasse de Ben's Resto Café sous un autre angle",
      en: "Ben's Resto Café terrace from another angle",
    },
    required: false,
  },
  salleInterieure: {
    filename: "salle-interieure.jpg",
    alt: {
      fr: "Salle intérieure avec écran pour les matchs",
      en: "Indoor dining room with screen for matches",
    },
    required: true,
  },
  platSaladeCrevettes: {
    filename: "plat-salade-crevettes.jpg",
    alt: {
      fr: "Salade aux crevettes géantes",
      en: "Giant shrimp salad",
    },
    required: true,
  },
  platCouscous: {
    filename: "plat-couscous.jpg",
    alt: {
      fr: "Couscous de Ben's Resto Café",
      en: "Couscous at Ben's Resto Café",
    },
    required: true,
  },
  miseEnBouche: {
    filename: "mise-en-bouche.jpg",
    alt: {
      fr: "Mise en bouche offerte : thé, harissa, thon",
      en: "Complimentary starter: tea, harissa, tuna",
    },
    required: false,
  },
  facadeEntree: {
    filename: "facade-entree.jpg",
    alt: {
      fr: "Façade et entrée de Ben's Resto Café",
      en: "Ben's Resto Café entrance",
    },
    required: true,
  },
  logo: {
    filename: "logo.png",
    alt: {
      fr: "Logo Ben's Resto Café",
      en: "Ben's Resto Café logo",
    },
    required: true,
  },
  menuPage01: {
    filename: "menu-page-01.jpg",
    alt: { fr: "Carte du restaurant, page 1", en: "Restaurant menu, page 1" },
    required: true,
  },
  menuPage02: {
    filename: "menu-page-02.jpg",
    alt: { fr: "Carte du restaurant, page 2", en: "Restaurant menu, page 2" },
    required: true,
  },
  menuPage03: {
    filename: "menu-page-03.jpg",
    alt: { fr: "Carte du restaurant, page 3", en: "Restaurant menu, page 3" },
    required: true,
  },
  menuPage04: {
    filename: "menu-page-04.jpg",
    alt: { fr: "Carte du restaurant, page 4", en: "Restaurant menu, page 4" },
    required: true,
  },
  platPizza: {
    filename: "plat-pizza.jpg",
    alt: { fr: "Pizza de Ben's Resto Café", en: "Pizza at Ben's Resto Café" },
    required: false,
  },
  platPates: {
    filename: "plat-pates.jpg",
    alt: { fr: "Pâtes de Ben's Resto Café", en: "Pasta at Ben's Resto Café" },
    required: false,
  },
  platViande: {
    filename: "plat-viande.jpg",
    alt: { fr: "Plat de viande", en: "Meat dish" },
    required: false,
  },
  platFruitsDeMer: {
    filename: "plat-fruits-de-mer.jpg",
    alt: { fr: "Fruits de mer", en: "Seafood" },
    required: false,
  },
  petitDejeuner: {
    filename: "petit-dejeuner.jpg",
    alt: { fr: "Café du matin en terrasse", en: "Morning coffee on the terrace" },
    required: false,
  },
  interieurDetail: {
    filename: "interieur-detail.jpg",
    alt: { fr: "Détail de la décoration intérieure", en: "Interior decor detail" },
    required: false,
  },
} as const satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof images;
