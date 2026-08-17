// Carte : en attente des photos de la carte physique
// (menu-page-01.jpg à menu-page-04.jpg) pour transcription des plats
// et des prix réels. Ne rien inventer ici.

export type MenuCategory = {
  key: string;
  label: { fr: string; en: string };
};

export const menuCategories: MenuCategory[] = [
  { key: "couscous", label: { fr: "Couscous", en: "Couscous" } },
  { key: "salades", label: { fr: "Salades", en: "Salads" } },
  { key: "pizzas", label: { fr: "Pizzas", en: "Pizzas" } },
  { key: "calzones", label: { fr: "Calzones", en: "Calzones" } },
  { key: "pates", label: { fr: "Pâtes", en: "Pasta" } },
  { key: "viandes", label: { fr: "Viandes", en: "Meat dishes" } },
  { key: "fruitsDeMer", label: { fr: "Fruits de mer", en: "Seafood" } },
];

export type SignatureDish = {
  key: string;
  name: { fr: string; en: string };
  description: { fr: string; en: string };
  imageKey: "platSaladeCrevettes" | "platCouscous";
};

// Prix volontairement absents : à ajouter à la transcription de la
// carte réelle, jamais devinés.
export const signatureDishes: SignatureDish[] = [
  {
    key: "salade-crevettes",
    name: { fr: "Salade aux crevettes géantes", en: "Giant shrimp salad" },
    description: {
      fr: "Le plat le plus cité par les clients.",
      en: "The dish customers mention most.",
    },
    imageKey: "platSaladeCrevettes",
  },
  {
    key: "couscous",
    name: { fr: "Couscous", en: "Couscous" },
    description: {
      fr: "Un classique de la maison, très apprécié.",
      en: "A house classic, well liked by regulars.",
    },
    imageKey: "platCouscous",
  },
];
