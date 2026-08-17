export const locales = ["fr", "en", "ru", "de"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  ru: "RU",
  de: "DE",
};

type Dict = {
  nav: {
    restaurant: string;
    specialties: string;
    menu: string;
    gallery: string;
    info: string;
    location: string;
    reserve: string;
  };
  hero: {
    kicker: string;
    tagline: string;
    editorial: string;
    ctaMenu: string;
    ctaReserve: string;
    scrollHint: string;
  };
  about: {
    eyebrow: string;
    description: string;
    paragraphs: [string, string, string];
    highlights: [
      { label: string; description: string },
      { label: string; description: string },
      { label: string; description: string },
    ];
    reviewsWord: string;
  };
  specialties: {
    eyebrow: string;
    title: string;
    description: string;
    items: Record<string, { title: string; description: string }>;
  };
  menu: {
    eyebrow: string;
    title: string;
    description: string;
    categories: Record<string, string>;
    itemDescriptions: Record<string, string>;
    emptyMessage: string;
    footerNote: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    labels: Record<string, string>;
  };
  info: {
    eyebrow: string;
    title: string;
    labels: {
      adresse: string;
      telephone: string;
      horaires: string;
      reservation: string;
    };
    reservationValue: string;
    hoursFallback: string;
    contactBoxText: string;
    buttons: { itineraire: string; appeler: string; whatsapp: string };
  };
  location: {
    eyebrow: string;
    title: string;
    button: string;
  };
  reservation: {
    eyebrow: string;
    title: string;
    description: string;
    buttons: { reserve: string; whatsapp: string };
  };
  footer: {
    rights: string;
    headings: { adresse: string; contact: string; reservation: string };
    links: { appeler: string; whatsapp: string; googleMaps: string };
  };
};

// Traductions de tout le texte éditorial du site. Les faits (nom, adresse,
// téléphone, noms de plats, prix) restent dans restaurant-data.ts et ne
// sont pas traduits — ce sont des données, pas du contenu éditorial.
export const translations: Record<Locale, Dict> = {
  fr: {
    nav: {
      restaurant: "Le restaurant",
      specialties: "Spécialités",
      menu: "Menu",
      gallery: "Galerie",
      info: "Infos pratiques",
      location: "Localisation",
      reserve: "Réserver",
    },
    hero: {
      kicker: "Médina Yasmine Hammamet · Tunisie",
      tagline: "Restaurant • Fruits de mer • Cuisine méditerranéenne",
      editorial: "Une expérience méditerranéenne entre terre et mer.",
      ctaMenu: "Voir le menu",
      ctaReserve: "Réserver une table",
      scrollHint: "Découvrir",
    },
    about: {
      eyebrow: "Le restaurant",
      description: "Une table méditerranéenne au cœur de la Médina Yasmine Hammamet.",
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
      reviewsWord: "avis",
    },
    specialties: {
      eyebrow: "Nos spécialités",
      title: "Le meilleur de la Méditerranée",
      description: "Un aperçu de nos familles de plats, entre mer et tradition italo-tunisienne.",
      items: {
        seafood: { title: "Fruits de mer", description: "Crevettes, calamars et coquillages sublimés avec fraîcheur." },
        fish: { title: "Poissons", description: "Poissons méditerranéens préparés selon l'arrivage du jour." },
        pasta: { title: "Pâtes", description: "Pâtes fraîches, risottos et recettes italiennes de caractère." },
        mediterranean: { title: "Cuisine méditerranéenne", description: "Une palette de saveurs entre Italie et Tunisie." },
        signature: { title: "Spécialités du restaurant", description: "Pizzas au feu de bois et créations signature de la maison." },
        desserts: { title: "Desserts", description: "Notes sucrées pour clore le repas en douceur." },
      },
    },
    menu: {
      eyebrow: "Le menu",
      title: "Notre carte",
      description: "Une sélection de la carte, relevée sur place — prix en dinars tunisiens.",
      categories: {
        entrees: "Entrées",
        poissons: "Poissons",
        fruitsDeMer: "Fruits de mer",
        pates: "Pâtes",
        platsPrincipaux: "Plats principaux",
        desserts: "Desserts",
        boissons: "Boissons",
      },
      itemDescriptions: {
        "poissons-0": "Dorade, loup, rouget… (100 g)",
        "poissons-1": "(100 g)",
        "fruitsDeMer-2": "1 personne",
        "fruitsDeMer-3": "2 personnes",
        "fruitsDeMer-4": "(100 g)",
        "platsPrincipaux-4": "1 personne",
      },
      emptyMessage: "Cette catégorie sera complétée prochainement.",
      footerNote: "Sélection relevée sur place, prix indicatifs en dinars tunisiens (DT).",
    },
    gallery: {
      eyebrow: "Galerie",
      title: "L'expérience en images",
      description: "Un aperçu du restaurant, de ses plats et de son ambiance.",
      labels: {
        facade: "Façade",
        plateauFruitsDeMer: "Plateau de fruits de mer",
        terrasseSoir1: "Soirée en terrasse",
        pizzaArtisanale: "Pizza au feu de bois",
        patesFruitsDeMer: "Pâtes aux fruits de mer",
        salleVoutee: "Salle voûtée",
        chefSpecialite: "Spécialité maison",
        terrasseCouverte: "Terrasse couverte",
        dessertGlace: "Dessert glacé",
        terrasseSoir2: "Ambiance du soir",
      },
    },
    info: {
      eyebrow: "Informations pratiques",
      title: "Nous rendre visite",
      labels: {
        adresse: "Adresse",
        telephone: "Téléphone",
        horaires: "Horaires",
        reservation: "Réservation",
      },
      reservationValue: "Par téléphone ou WhatsApp",
      hoursFallback: "Nous contacter pour les horaires",
      contactBoxText: "Contactez-nous directement pour toute réservation ou question concernant votre visite.",
      buttons: { itineraire: "Itinéraire", appeler: "Appeler", whatsapp: "WhatsApp" },
    },
    location: {
      eyebrow: "Localisation",
      title: "Au cœur de la médina",
      button: "Ouvrir dans Google Maps",
    },
    reservation: {
      eyebrow: "Réservation",
      title: "Votre table vous attend",
      description: "Réservez votre moment au bord de la Méditerranée. Notre équipe se fera un plaisir de vous accueillir à Caicco Romano.",
      buttons: { reserve: "Réserver une table", whatsapp: "Écrire sur WhatsApp" },
    },
    footer: {
      rights: "Tous droits réservés.",
      headings: { adresse: "Adresse", contact: "Contact", reservation: "Réservation" },
      links: { appeler: "Appeler", whatsapp: "WhatsApp", googleMaps: "Google Maps" },
    },
  },
  en: {
    nav: {
      restaurant: "The restaurant",
      specialties: "Specialties",
      menu: "Menu",
      gallery: "Gallery",
      info: "Practical info",
      location: "Location",
      reserve: "Reserve",
    },
    hero: {
      kicker: "Medina Yasmine Hammamet · Tunisia",
      tagline: "Restaurant • Seafood • Mediterranean Cuisine",
      editorial: "A Mediterranean experience between land and sea.",
      ctaMenu: "View menu",
      ctaReserve: "Reserve a table",
      scrollHint: "Discover",
    },
    about: {
      eyebrow: "The restaurant",
      description: "A Mediterranean table in the heart of the Medina Yasmine Hammamet.",
      paragraphs: [
        "Nestled in the heart of the Medina Yasmine Hammamet, Caicco Romano invites you to a gourmet escape where the Mediterranean finds its way onto every plate. Here, Italian cuisine meets Tunisian flavours in a warm, refined atmosphere.",
        "Seafood, fish and seasonal produce are prepared with care to bring out the freshness and authenticity of Mediterranean recipes, balancing tradition with contemporary elegance.",
        "A setting designed to make you slow down — whether for a terrace lunch, a dinner among friends, or an evening by the Mediterranean.",
      ],
      highlights: [
        { label: "Freshness", description: "Seafood selected with the utmost care" },
        { label: "Mediterranean", description: "Italian and Tunisian cuisine, together" },
        { label: "Atmosphere", description: "An elegant setting in the heart of the medina" },
      ],
      reviewsWord: "reviews",
    },
    specialties: {
      eyebrow: "Our specialties",
      title: "The best of the Mediterranean",
      description: "A glimpse of our dish families, between the sea and Italian-Tunisian tradition.",
      items: {
        seafood: { title: "Seafood", description: "Shrimp, squid and shellfish, elevated by their freshness." },
        fish: { title: "Fish", description: "Mediterranean fish prepared according to the day's catch." },
        pasta: { title: "Pasta", description: "Fresh pasta, risottos and Italian recipes with character." },
        mediterranean: { title: "Mediterranean cuisine", description: "A range of flavours between Italy and Tunisia." },
        signature: { title: "House specialties", description: "Wood-fired pizzas and signature creations of the house." },
        desserts: { title: "Desserts", description: "Sweet notes to end the meal on a gentle touch." },
      },
    },
    menu: {
      eyebrow: "The menu",
      title: "Our menu",
      description: "A selection from the menu, noted on site — prices in Tunisian dinars.",
      categories: {
        entrees: "Starters",
        poissons: "Fish",
        fruitsDeMer: "Seafood",
        pates: "Pasta",
        platsPrincipaux: "Main courses",
        desserts: "Desserts",
        boissons: "Drinks",
      },
      itemDescriptions: {
        "poissons-0": "Sea bream, sea bass, red mullet… (100 g)",
        "poissons-1": "(100 g)",
        "fruitsDeMer-2": "1 person",
        "fruitsDeMer-3": "2 people",
        "fruitsDeMer-4": "(100 g)",
        "platsPrincipaux-4": "1 person",
      },
      emptyMessage: "This category will be completed soon.",
      footerNote: "Selection noted on site, indicative prices in Tunisian dinars (DT).",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "The experience in pictures",
      description: "A glimpse of the restaurant, its dishes and its atmosphere.",
      labels: {
        facade: "Facade",
        plateauFruitsDeMer: "Seafood platter",
        terrasseSoir1: "Evening on the terrace",
        pizzaArtisanale: "Wood-fired pizza",
        patesFruitsDeMer: "Seafood pasta",
        salleVoutee: "Vaulted dining room",
        chefSpecialite: "House specialty",
        terrasseCouverte: "Covered terrace",
        dessertGlace: "Iced dessert",
        terrasseSoir2: "Evening atmosphere",
      },
    },
    info: {
      eyebrow: "Practical information",
      title: "Visit us",
      labels: {
        adresse: "Address",
        telephone: "Phone",
        horaires: "Opening hours",
        reservation: "Reservation",
      },
      reservationValue: "By phone or WhatsApp",
      hoursFallback: "Contact us for opening hours",
      contactBoxText: "Contact us directly for any reservation or question about your visit.",
      buttons: { itineraire: "Directions", appeler: "Call", whatsapp: "WhatsApp" },
    },
    location: {
      eyebrow: "Location",
      title: "In the heart of the medina",
      button: "Open in Google Maps",
    },
    reservation: {
      eyebrow: "Reservation",
      title: "Your table awaits",
      description: "Reserve your moment by the Mediterranean. Our team will be delighted to welcome you at Caicco Romano.",
      buttons: { reserve: "Reserve a table", whatsapp: "Message on WhatsApp" },
    },
    footer: {
      rights: "All rights reserved.",
      headings: { adresse: "Address", contact: "Contact", reservation: "Reservation" },
      links: { appeler: "Call", whatsapp: "WhatsApp", googleMaps: "Google Maps" },
    },
  },
  ru: {
    nav: {
      restaurant: "О ресторане",
      specialties: "Особенности",
      menu: "Меню",
      gallery: "Галерея",
      info: "Полезная информация",
      location: "Расположение",
      reserve: "Забронировать",
    },
    hero: {
      kicker: "Медина Ясмин Хаммамет · Тунис",
      tagline: "Ресторан • Морепродукты • Средиземноморская кухня",
      editorial: "Средиземноморские впечатления на стыке земли и моря.",
      ctaMenu: "Смотреть меню",
      ctaReserve: "Забронировать столик",
      scrollHint: "Далее",
    },
    about: {
      eyebrow: "О ресторане",
      description: "Средиземноморский ресторан в самом сердце медины Ясмин Хаммамет.",
      paragraphs: [
        "Расположенный в самом сердце медины Ясмин Хаммамет, Caicco Romano приглашает вас в гастрономическое путешествие, где Средиземноморье присутствует в каждом блюде. Итальянская кухня здесь встречается с тунисскими вкусами в теплой, изысканной атмосфере.",
        "Морепродукты, рыба и сезонные продукты готовятся с особым вниманием, раскрывая свежесть и подлинность средиземноморских рецептов — на стыке традиции и современной элегантности.",
        "Пространство, созданное для того, чтобы никуда не спешить — будь то обед на террасе, ужин с близкими или вечер у Средиземного моря.",
      ],
      highlights: [
        { label: "Свежесть", description: "Морепродукты, отобранные с особой тщательностью" },
        { label: "Средиземноморье", description: "Итальянская и тунисская кухня в гармонии" },
        { label: "Атмосфера", description: "Элегантная обстановка в самом сердце медины" },
      ],
      reviewsWord: "отзывов",
    },
    specialties: {
      eyebrow: "Наши особенности",
      title: "Лучшее из Средиземноморья",
      description: "Обзор наших категорий блюд — на стыке моря и итало-тунисской традиции.",
      items: {
        seafood: { title: "Морепродукты", description: "Креветки, кальмары и моллюски, покоряющие своей свежестью." },
        fish: { title: "Рыба", description: "Средиземноморская рыба, приготовленная по улову дня." },
        pasta: { title: "Паста", description: "Свежая паста, ризотто и итальянские рецепты с характером." },
        mediterranean: { title: "Средиземноморская кухня", description: "Палитра вкусов на стыке Италии и Туниса." },
        signature: { title: "Фирменные блюда", description: "Пицца на дровах и фирменные творения заведения." },
        desserts: { title: "Десерты", description: "Сладкие ноты для мягкого завершения трапезы." },
      },
    },
    menu: {
      eyebrow: "Меню",
      title: "Наше меню",
      description: "Подборка блюд из меню, отмеченная на месте — цены в тунисских динарах.",
      categories: {
        entrees: "Закуски",
        poissons: "Рыба",
        fruitsDeMer: "Морепродукты",
        pates: "Паста",
        platsPrincipaux: "Основные блюда",
        desserts: "Десерты",
        boissons: "Напитки",
      },
      itemDescriptions: {
        "poissons-0": "Дорадо, сибас, барабулька... (100 г)",
        "poissons-1": "(100 г)",
        "fruitsDeMer-2": "1 персона",
        "fruitsDeMer-3": "2 персоны",
        "fruitsDeMer-4": "(100 г)",
        "platsPrincipaux-4": "1 персона",
      },
      emptyMessage: "Эта категория будет дополнена в ближайшее время.",
      footerNote: "Подборка отмечена на месте, ориентировочные цены в тунисских динарах (DT).",
    },
    gallery: {
      eyebrow: "Галерея",
      title: "Впечатления в фотографиях",
      description: "Обзор ресторана, его блюд и атмосферы.",
      labels: {
        facade: "Фасад",
        plateauFruitsDeMer: "Тарелка морепродуктов",
        terrasseSoir1: "Вечер на террасе",
        pizzaArtisanale: "Пицца на дровах",
        patesFruitsDeMer: "Паста с морепродуктами",
        salleVoutee: "Зал со сводчатым потолком",
        chefSpecialite: "Фирменное блюдо",
        terrasseCouverte: "Крытая терраса",
        dessertGlace: "Десерт со льдом",
        terrasseSoir2: "Вечерняя атмосфера",
      },
    },
    info: {
      eyebrow: "Полезная информация",
      title: "Как нас найти",
      labels: {
        adresse: "Адрес",
        telephone: "Телефон",
        horaires: "Часы работы",
        reservation: "Бронирование",
      },
      reservationValue: "По телефону или через WhatsApp",
      hoursFallback: "Уточняйте часы работы по телефону",
      contactBoxText: "Свяжитесь с нами напрямую по любым вопросам бронирования или посещения.",
      buttons: { itineraire: "Маршрут", appeler: "Позвонить", whatsapp: "WhatsApp" },
    },
    location: {
      eyebrow: "Расположение",
      title: "В самом сердце медины",
      button: "Открыть в Google Картах",
    },
    reservation: {
      eyebrow: "Бронирование",
      title: "Ваш столик уже ждёт",
      description: "Забронируйте свой момент у Средиземного моря. Наша команда будет рада приветствовать вас в Caicco Romano.",
      buttons: { reserve: "Забронировать столик", whatsapp: "Написать в WhatsApp" },
    },
    footer: {
      rights: "Все права защищены.",
      headings: { adresse: "Адрес", contact: "Контакты", reservation: "Бронирование" },
      links: { appeler: "Позвонить", whatsapp: "WhatsApp", googleMaps: "Google Карты" },
    },
  },
  de: {
    nav: {
      restaurant: "Das Restaurant",
      specialties: "Spezialitäten",
      menu: "Speisekarte",
      gallery: "Galerie",
      info: "Praktische Infos",
      location: "Lage",
      reserve: "Reservieren",
    },
    hero: {
      kicker: "Medina Yasmine Hammamet · Tunesien",
      tagline: "Restaurant • Meeresfrüchte • Mediterrane Küche",
      editorial: "Ein mediterranes Erlebnis zwischen Land und Meer.",
      ctaMenu: "Speisekarte ansehen",
      ctaReserve: "Tisch reservieren",
      scrollHint: "Entdecken",
    },
    about: {
      eyebrow: "Das Restaurant",
      description: "Ein mediterranes Restaurant im Herzen der Medina Yasmine Hammamet.",
      paragraphs: [
        "Mitten im Herzen der Medina Yasmine Hammamet gelegen, lädt Sie Caicco Romano zu einer kulinarischen Auszeit ein, bei der das Mittelmeer auf jedem Teller zu spüren ist. Hier trifft italienische Küche auf tunesische Aromen, in warmer, stilvoller Atmosphäre.",
        "Meeresfrüchte, Fisch und saisonale Zutaten werden mit Sorgfalt zubereitet, um die Frische und Authentizität mediterraner Rezepte zu betonen — zwischen Tradition und zeitgenössischer Eleganz.",
        "Ein Ort, der zum Verweilen einlädt — sei es beim Mittagessen auf der Terrasse, einem Abendessen mit Freunden oder einem Abend am Mittelmeer.",
      ],
      highlights: [
        { label: "Frische", description: "Meeresfrüchte, sorgfältig ausgewählt" },
        { label: "Mittelmeer", description: "Italienische und tunesische Küche vereint" },
        { label: "Ambiente", description: "Ein elegantes Ambiente im Herzen der Medina" },
      ],
      reviewsWord: "Bewertungen",
    },
    specialties: {
      eyebrow: "Unsere Spezialitäten",
      title: "Das Beste des Mittelmeers",
      description: "Ein Einblick in unsere Gerichtekategorien, zwischen Meer und italienisch-tunesischer Tradition.",
      items: {
        seafood: { title: "Meeresfrüchte", description: "Garnelen, Tintenfisch und Muscheln, veredelt durch ihre Frische." },
        fish: { title: "Fisch", description: "Mediterraner Fisch, zubereitet je nach Tagesfang." },
        pasta: { title: "Pasta", description: "Frische Pasta, Risotto und italienische Rezepte mit Charakter." },
        mediterranean: { title: "Mediterrane Küche", description: "Eine Geschmackspalette zwischen Italien und Tunesien." },
        signature: { title: "Spezialitäten des Hauses", description: "Pizza aus dem Holzofen und hauseigene Kreationen." },
        desserts: { title: "Desserts", description: "Süße Akzente für einen sanften Abschluss des Essens." },
      },
    },
    menu: {
      eyebrow: "Speisekarte",
      title: "Unsere Karte",
      description: "Eine Auswahl aus der Speisekarte, vor Ort erfasst — Preise in tunesischen Dinar.",
      categories: {
        entrees: "Vorspeisen",
        poissons: "Fisch",
        fruitsDeMer: "Meeresfrüchte",
        pates: "Pasta",
        platsPrincipaux: "Hauptgerichte",
        desserts: "Desserts",
        boissons: "Getränke",
      },
      itemDescriptions: {
        "poissons-0": "Dorade, Wolfsbarsch, Rotbarbe… (100 g)",
        "poissons-1": "(100 g)",
        "fruitsDeMer-2": "1 Person",
        "fruitsDeMer-3": "2 Personen",
        "fruitsDeMer-4": "(100 g)",
        "platsPrincipaux-4": "1 Person",
      },
      emptyMessage: "Diese Kategorie wird in Kürze ergänzt.",
      footerNote: "Auswahl vor Ort erfasst, Richtpreise in tunesischen Dinar (DT).",
    },
    gallery: {
      eyebrow: "Galerie",
      title: "Das Erlebnis in Bildern",
      description: "Ein Einblick in das Restaurant, seine Gerichte und seine Atmosphäre.",
      labels: {
        facade: "Fassade",
        plateauFruitsDeMer: "Meeresfrüchteplatte",
        terrasseSoir1: "Abend auf der Terrasse",
        pizzaArtisanale: "Pizza aus dem Holzofen",
        patesFruitsDeMer: "Meeresfrüchte-Pasta",
        salleVoutee: "Gewölbter Speisesaal",
        chefSpecialite: "Spezialität des Hauses",
        terrasseCouverte: "Überdachte Terrasse",
        dessertGlace: "Eisdessert",
        terrasseSoir2: "Abendstimmung",
      },
    },
    info: {
      eyebrow: "Praktische Informationen",
      title: "Besuchen Sie uns",
      labels: {
        adresse: "Adresse",
        telephone: "Telefon",
        horaires: "Öffnungszeiten",
        reservation: "Reservierung",
      },
      reservationValue: "Per Telefon oder WhatsApp",
      hoursFallback: "Für Öffnungszeiten bitte kontaktieren",
      contactBoxText: "Kontaktieren Sie uns direkt für Reservierungen oder Fragen zu Ihrem Besuch.",
      buttons: { itineraire: "Route", appeler: "Anrufen", whatsapp: "WhatsApp" },
    },
    location: {
      eyebrow: "Standort",
      title: "Im Herzen der Medina",
      button: "In Google Maps öffnen",
    },
    reservation: {
      eyebrow: "Reservierung",
      title: "Ihr Tisch wartet",
      description: "Reservieren Sie Ihren Moment am Mittelmeer. Unser Team freut sich darauf, Sie bei Caicco Romano willkommen zu heißen.",
      buttons: { reserve: "Tisch reservieren", whatsapp: "Auf WhatsApp schreiben" },
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      headings: { adresse: "Adresse", contact: "Kontakt", reservation: "Reservierung" },
      links: { appeler: "Anrufen", whatsapp: "WhatsApp", googleMaps: "Google Maps" },
    },
  },
};
