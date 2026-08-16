export interface RoomType {
  id: string;
  imageId: string;
  name: string;
  capacity: string;
  description: string;
  features: string[];
}

export interface Cure {
  id: string;
  name: string;
  description: string;
}

export interface Venue {
  id: string;
  imageId: string;
  name: string;
  description: string;
}

export interface Activity {
  id: string;
  imageId: string;
  title: string;
  description: string;
}

export interface Quote {
  text: string;
  author: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface Dictionary {
  meta: {
    titleSuffix: string;
  };

  nav: {
    home: string;
    rooms: string;
    aquapark: string;
    spa: string;
    dining: string;
    leisure: string;
    gallery: string;
    contact: string;
    reserve: string;
    menuLabel: string;
  };

  banner: {
    text: string;
  };

  common: {
    from: string;
    perNight: string;
    discoverMore: string;
    viewAll: string;
    ctaReserve: string;
    ctaCall: string;
    ctaWhatsapp: string;
    adults: string;
    children: string;
    night: string;
    nights: string;
    stars4: string;
    address: string;
    phone: string;
    email: string;
  };

  footer: {
    tagline: string;
    addressTitle: string;
    contactTitle: string;
    navTitle: string;
    rights: string;
    designNote: string;
  };

  images: Record<string, string>;

  pagesMeta: {
    home: PageMeta;
    rooms: PageMeta;
    aquapark: PageMeta;
    spa: PageMeta;
    dining: PageMeta;
    leisure: PageMeta;
    gallery: PageMeta;
    contact: PageMeta;
  };

  home: {
    hero: {
      kicker: string;
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      scroll: string;
    };
    figures: {
      kicker: string;
      title: string;
      items: { value: string; label: string }[];
    };
    roomsPreview: {
      kicker: string;
      title: string;
      text: string;
      cta: string;
    };
    aquapark: {
      kicker: string;
      title: string;
      text: string;
      bullets: string[];
      cta: string;
      badge: string;
    };
    spaPreview: {
      kicker: string;
      title: string;
      text: string;
      cta: string;
    };
    location: {
      kicker: string;
      title: string;
      text: string;
      bullets: { label: string; value: string }[];
    };
    reviews: {
      kicker: string;
      title: string;
      text: string;
      quotes: Quote[];
    };
    ctaBand: {
      title: string;
      text: string;
      cta: string;
    };
    horizon: {
      kicker: string;
      title: string;
      text: string;
    };
  };

  rooms: {
    hero: { title: string; subtitle: string };
    intro: string;
    types: RoomType[];
    amenitiesTitle: string;
    amenities: string[];
    cta: { title: string; text: string; cta: string };
  };

  aquapark: {
    hero: { title: string; subtitle: string };
    intro: string;
    badge: string;
    features: { title: string; text: string; imageId: string }[];
    practicalTitle: string;
    practical: string[];
    cta: { title: string; text: string; cta: string };
  };

  spa: {
    hero: { title: string; subtitle: string };
    intro: string;
    facilitiesTitle: string;
    facilities: string[];
    curesTitle: string;
    curesIntro: string;
    cures: Cure[];
    cta: { title: string; text: string; cta: string };
  };

  dining: {
    hero: { title: string; subtitle: string };
    intro: string;
    venues: Venue[];
    cta: { title: string; text: string; cta: string };
  };

  leisure: {
    hero: { title: string; subtitle: string };
    intro: string;
    highlight: { title: string; text: string };
    activities: Activity[];
    cta: { title: string; text: string; cta: string };
  };

  gallery: {
    hero: { title: string; subtitle: string };
    categories: {
      rooms: string;
      dining: string;
      spa: string;
      aquapark: string;
      beach: string;
      leisure: string;
      exterior: string;
    };
  };

  contact: {
    hero: { title: string; subtitle: string };
    infoTitle: string;
    mapTitle: string;
    formTitle: string;
    formIntro: string;
  };

  booking: {
    title: string;
    subtitle: string;
    fields: {
      checkin: string;
      checkout: string;
      adults: string;
      children: string;
      roomType: string;
      plan: string;
      name: string;
      email: string;
      phone: string;
      message: string;
      messagePlaceholder: string;
    };
    roomTypeOptions: { value: string; label: string }[];
    planOptions: { value: string; label: string }[];
    submit: string;
    summaryTitle: string;
    summaryEmpty: string;
    sendEmail: string;
    sendWhatsapp: string;
    disclaimer: string;
    successNote: string;
    requiredNote: string;
  };
}
