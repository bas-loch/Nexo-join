export const hotel = {
  name: "Zodiac Hôtel & Aqua Park",
  stars: 4,
  phone: "+216 72 244 085",
  phoneHref: "tel:+21672244085",
  email: "resa@hotelzodiac.com",
  whatsapp: "21672244085",
  address: {
    line1: "BP 243, Zone touristique",
    postalCode: "8050",
    city: "Yasmine Hammamet",
    country: "Tunisie",
    countryCode: "TN",
  },
  geo: {
    lat: 36.36331,
    lng: 10.52941,
  },
  counts: {
    rooms: 218,
    restaurantIndoor: 350,
    restaurantTerrace: 200,
  },
  distances: {
    carthageLand: "200 m",
    beach: "300 m",
    marina: "800 m",
    golf: "10 min",
    airportTunis: "1h",
    airportEnfidha: "45 min",
  },
} as const;

export const siteUrl = "https://hotelzodiac-nouveau.netlify.app";
