import { useState } from "react";
import { Menu, X } from "lucide-react";

import receptionHall from "@/assets/zodiac/slider4.webp";
import domeAerial from "@/assets/zodiac/slider2.webp";
import aquaparkHero from "@/assets/zodiac/hero.webp";
import aquapark1 from "@/assets/zodiac/aquapark1.webp";
import aquapark2 from "@/assets/zodiac/aquapark2.webp";
import slideCloseUp from "@/assets/zodiac/slider3.webp";
import spa1 from "@/assets/zodiac/spa1.webp";
import spa2 from "@/assets/zodiac/spa2.webp";
import beach1 from "@/assets/zodiac/plage1.webp";
import restaurant from "@/assets/zodiac/restaurant.webp";

import roomStandard from "@/assets/zodiac/chambre-standard.webp";
import roomTriple from "@/assets/zodiac/chambre-double-usage-triple.webp";
import roomQuadruple from "@/assets/zodiac/chambre-quadruple.webp";
import gardenView from "@/assets/zodiac/vue-jardin.webp";
import barLobby from "@/assets/zodiac/bar-salon.webp";
import loungeSalon from "@/assets/zodiac/cocktail.webp";
import outdoorPool from "@/assets/zodiac/piscine-exterieure.webp";
import kidsClub from "@/assets/zodiac/club-enfants.webp";
import eveningShow from "@/assets/zodiac/animation-soiree.webp";

import { Placeholder } from "@/components/Placeholder";

const navItems = [
  { href: "#hotel", label: "L'Hôtel" },
  { href: "#chambres", label: "Chambres" },
  { href: "#aquapark", label: "Aqua Park" },
  { href: "#bienetre", label: "Bien-être" },
  { href: "#contact", label: "Contact" },
];

// Repères vérifiés (voir CLAUDE.md) : à ne compléter qu'avec des faits confirmés.
const keyFigures = [
  { value: "218", label: "chambres" },
  { value: "350 + 200", label: "places au restaurant central, intérieur et terrasse" },
  { value: "300 m", label: "de la plage" },
  { value: "800 m", label: "de la marina" },
];

function todayISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

function ReservationForm() {
  const [arrival, setArrival] = useState(todayISO(30));
  const [departure, setDeparture] = useState(todayISO(37));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const travelers = data.get("travelers");
    const subject = encodeURIComponent("Demande de réservation — Hôtel Zodiac");
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite réserver un séjour :\n- Arrivée : ${data.get("arrival")}\n- Départ : ${data.get("departure")}\n- Voyageurs : ${travelers}\n\nMerci de me confirmer la disponibilité.`,
    );
    window.location.href = `mailto:resa@hotelzodiac.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 divide-y divide-stone-100 bg-white p-6 shadow-2xl sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
    >
      <label className="flex flex-col px-4 py-3 sm:py-0">
        <span className="text-[10px] font-bold uppercase tracking-tighter text-stone-500">
          Arrivée
        </span>
        <input
          type="date"
          name="arrival"
          required
          min={todayISO(0)}
          value={arrival}
          onChange={(e) => {
            setArrival(e.target.value);
            if (departure <= e.target.value) setDeparture(todayISO(0));
          }}
          className="mt-1 rounded-sm bg-transparent font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        />
      </label>
      <label className="flex flex-col px-4 py-3 sm:py-0">
        <span className="text-[10px] font-bold uppercase tracking-tighter text-stone-500">
          Départ
        </span>
        <input
          type="date"
          name="departure"
          required
          min={arrival}
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          className="mt-1 rounded-sm bg-transparent font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        />
      </label>
      <label className="flex flex-col px-4 py-3 sm:py-0">
        <span className="text-[10px] font-bold uppercase tracking-tighter text-stone-500">
          Voyageurs
        </span>
        <select
          name="travelers"
          defaultValue="2 Adultes"
          className="mt-1 rounded-sm bg-transparent font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <option>2 Adultes</option>
          <option>2 Adultes, 1 Enfant</option>
          <option>2 Adultes, 2 Enfants</option>
          <option>1 Adulte</option>
        </select>
      </label>
      <div className="flex items-center px-4 py-3 sm:py-0">
        <button
          type="submit"
          className="w-full cursor-pointer bg-gold py-3 text-xs font-bold uppercase tracking-widest text-white hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          Vérifier
        </button>
      </div>
    </form>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sand font-sans text-navy selection:bg-gold/30">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-stone-200/60">
        <div className="flex items-center justify-between px-6 py-4 lg:px-12">
          <a href="#top" className="flex items-center gap-3">
            <div className="size-10 bg-navy grid place-items-center text-white font-serif italic text-xl">
              Z
            </div>
            <span className="font-serif text-2xl tracking-tight uppercase">Zodiac</span>
          </a>
          <div className="hidden gap-8 text-xs font-semibold uppercase tracking-widest lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#reserver"
              className="hidden sm:inline-block bg-navy px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-gold transition-all duration-300 shadow-xl shadow-navy/10"
            >
              Réserver
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Ouvrir le menu"
              className="p-2 -mr-2 text-navy lg:hidden"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-stone-200/60 bg-white px-6 py-4">
            <div className="flex flex-col gap-1 text-sm font-semibold uppercase tracking-widest">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 border-b border-stone-100 last:border-none hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#reserver"
                onClick={() => setMenuOpen(false)}
                className="mt-3 bg-navy px-6 py-3 text-center text-xs font-bold text-white sm:hidden"
              >
                Réserver
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="top" className="relative h-[70vh] sm:h-[85vh] overflow-hidden">
        <img
          src={receptionHall}
          alt="Réception sous la coupole de l'Hôtel Zodiac"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-navy/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-4">
            Yasmine Hammamet · Tunisie
          </span>
          <h1 className="max-w-5xl font-serif text-[clamp(2.75rem,7vw,7rem)] leading-[0.95] tracking-[-0.02em]">
            L'Art de Vivre à <span className="italic">Yasmine Hammamet</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light opacity-90">
            Une escale 4 étoiles entre jardins luxuriants, plages de sable fin et l'excitation de
            notre Aqua Park exclusif.
          </p>
        </div>
      </section>

      {/* Booking bar : flux normal sur mobile, remonte sur le bas du hero à partir de lg */}
      <div id="reserver" className="relative z-20 px-6 lg:-mt-16 lg:max-w-5xl lg:mx-auto">
        <ReservationForm />
      </div>

      {/* Intro / L'Hôtel */}
      <section
        id="hotel"
        className="px-6 pt-24 md:pt-28 pb-16 lg:px-12 max-w-6xl mx-auto text-center"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-ink">
          L'Hôtel Zodiac
        </span>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
          Au cœur de la station balnéaire de <span className="italic">Yasmine Hammamet</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-stone-600 leading-relaxed">
          À 300 mètres d'une plage de sable fin, l'Hôtel Zodiac 4 étoiles vous invite à vivre une
          expérience mêlant détente, bien-être et divertissement en famille.
        </p>
      </section>

      {/* Key Features */}
      <section className="px-6 pb-20 lg:px-12 max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-3">
          <a href="#aquapark" className="group">
            <div className="aspect-[4/5] w-full overflow-hidden mb-6">
              <img
                src={aquaparkHero}
                alt="Toboggans de l'Aqua Park Zodiac"
                loading="lazy"
                width={800}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-2xl">Aqua Park Sensation</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              Des toboggans spectaculaires pour toute la famille, au cœur de notre complexe.
            </p>
          </a>

          <a href="#bienetre" className="group">
            <div className="aspect-[4/5] w-full overflow-hidden mb-6">
              <img
                src={spa1}
                alt="Espace spa et bien-être"
                loading="lazy"
                width={800}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-2xl">Spa & Bien-être</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              Retrouvez l'équilibre dans notre sanctuaire dédié à la détente et aux soins
              traditionnels tunisiens.
            </p>
          </a>

          <a href="#hotel" className="group">
            <div className="aspect-[4/5] w-full overflow-hidden mb-6">
              <img
                src={beach1}
                alt="Plage privée de sable fin"
                loading="lazy"
                width={800}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-2xl">Plage Privée</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              À seulement 300 mètres, profitez de notre accès exclusif à la plage de Yasmine
              Hammamet.
            </p>
          </a>
        </div>
      </section>

      {/* Chambres */}
      <section id="chambres" className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-ink">
                Séjour
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Nos Chambres & Suites</h2>
            </div>
            <p className="max-w-md text-sm text-stone-600 leading-relaxed">
              Chaque chambre a été pensée pour votre confort, avec vue sur les jardins, la piscine
              ou la Méditerranée.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { img: roomStandard, name: "Chambre Standard", meta: "1 à 2 personnes" },
              {
                img: roomTriple,
                name: "Chambre Double à Usage Triple",
                meta: "Jusqu'à 3 personnes",
              },
              { img: roomQuadruple, name: "Chambre Quadruple", meta: "Jusqu'à 4 personnes" },
            ].map((r) => (
              <article key={r.name} className="group">
                <div className="aspect-[4/5] overflow-hidden mb-5">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl">{r.name}</h3>
                </div>
                <p className="mt-2 text-sm text-stone-500">{r.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Aqua Park showcase */}
      <section id="aquapark" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] overflow-hidden order-2 lg:order-1">
            <img
              src={aquapark2}
              alt="Toboggans géants Aqua Park"
              loading="lazy"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-ink">
              Exclusivité Zodiac
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              Un aquapark pour toute la famille
            </h2>
            <p className="mt-6 text-stone-600 leading-relaxed max-w-lg">
              L'un des plus grands parcs aquatiques de Yasmine Hammamet. Entre toboggans multipistes
              et piscines relaxantes, l'accès est illimité pour tous nos résidents.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                "Piscines extérieures",
                "Toboggans multipistes",
                "Espace sécurisé pour les jeunes enfants",
                "Animations et clubs enfants",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-gold" />
                  <span className="uppercase tracking-widest text-xs font-semibold">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[aquapark1, slideCloseUp, kidsClub, eveningShow].map((img, i) => (
            <div key={i} className="aspect-[4/5] overflow-hidden">
              <img
                src={img}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Spa & Restaurant */}
      <section id="bienetre" className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden group">
            <img
              src={spa2}
              alt="Spa et hammam"
              loading="lazy"
              width={800}
              height={1000}
              className="h-full w-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                Bien-être
              </span>
              <h3 className="mt-2 font-serif text-3xl">Spa & Hammam Traditionnel</h3>
              <p className="mt-2 text-sm text-white/80 max-w-sm">
                Soins ancestraux tunisiens, gommage au savon noir, massages aux huiles de jasmin.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src={restaurant}
              alt="Restaurant gastronomique"
              loading="lazy"
              width={1200}
              height={800}
              className="h-full w-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                Gastronomie
              </span>
              <h3 className="mt-2 font-serif text-3xl">Saveurs Méditerranéennes</h3>
              <p className="mt-2 text-sm text-white/80 max-w-sm">
                Buffets à thème, restaurants à la carte et bars face à la piscine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Zodiac & Piscine */}
      <section id="spa" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-ink">
            Zodiac Spa & Piscines
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Un cocon de détente <span className="italic">toute l'année</span>
          </h2>
          <p className="mt-6 text-stone-600 leading-relaxed">
            Deux piscines extérieures d'eau douce, puis le Zodiac Spa : hammam, salon de repos aux
            zelliges tunisiens et cabines de massage pour un moment hors du temps.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden">
            <img
              src={outdoorPool}
              alt="Piscines extérieures de l'Hôtel Zodiac"
              loading="lazy"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="col-span-12 md:col-span-4 aspect-[4/5] md:aspect-auto overflow-hidden">
            <img
              src={loungeSalon}
              alt="Salon de repos du spa"
              loading="lazy"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="col-span-6 md:col-span-6 aspect-[16/10] overflow-hidden">
            <Placeholder label="spa-hammam.jpg" />
          </div>
          <div className="col-span-6 md:col-span-6 aspect-[16/10] overflow-hidden">
            <Placeholder label="spa-massage.jpg" />
          </div>
        </div>
      </section>

      {/* Réception & Bar */}
      <section id="reception" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-ink">
            Réception & Bar Lobby
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Une architecture inspirée du <span className="italic">zodiaque</span>
          </h2>
          <p className="mt-6 text-stone-600 leading-relaxed">
            Sous la coupole ornée, notre réception et notre bar-lobby vous accueillent dans un décor
            mêlant artisanat tunisien, arcs en pierre et lustres dorés.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden">
            <img
              src={receptionHall}
              alt="Réception sous la coupole du zodiaque"
              loading="lazy"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="col-span-12 md:col-span-4 aspect-[4/5] md:aspect-auto overflow-hidden">
            <img
              src={domeAerial}
              alt="Vue aérienne des coupoles et de la piscine"
              loading="lazy"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="col-span-12 md:col-span-6 aspect-[16/10] overflow-hidden">
            <img
              src={barLobby}
              alt="Bar-lobby aux arcs tunisiens"
              loading="lazy"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="col-span-12 md:col-span-6 aspect-[16/10] overflow-hidden">
            <img
              src={gardenView}
              alt="Chambre avec vue sur les jardins"
              loading="lazy"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* En chiffres — uniquement des données vérifiées, voir CLAUDE.md */}
      <section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-ink">
          L'hôtel en chiffres
        </span>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">Le Zodiac en un coup d'œil</h2>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {keyFigures.map((f) => (
            <div key={f.label}>
              <div className="font-serif text-4xl text-navy">{f.value}</div>
              <p className="mt-2 text-sm text-stone-600">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 px-6 text-center text-white lg:px-12">
        <div className="mx-auto max-w-2xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            Réservation directe
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Réservez directement pour bénéficier du meilleur tarif garanti
          </h2>
          <p className="mt-6 text-stone-300">
            Aucune commission d'intermédiaire, un contact direct avec notre équipe de réservation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#chambres"
              className="border border-white/20 bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-widest backdrop-blur-sm hover:bg-white hover:text-navy transition-all"
            >
              Voir les chambres
            </a>
            <a
              href="#reserver"
              className="bg-gold px-8 py-4 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
            >
              Réserver maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-ink">
              Contact
            </span>
            <h2 className="mt-3 font-serif text-3xl">Nous trouver</h2>
            <p className="mt-4 text-sm text-stone-600 leading-relaxed">
              BP 243, Zone touristique
              <br />
              8050 Yasmine Hammamet
              <br />
              Tunisie
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl">Réservations</h3>
            <p className="mt-3 text-sm text-stone-600">
              Tél :{" "}
              <a href="tel:+21672244085" className="hover:text-gold-ink transition-colors">
                +216 72 244 085
              </a>
            </p>
            <p className="text-sm text-stone-600">
              Email :{" "}
              <a
                href="mailto:resa@hotelzodiac.com"
                className="hover:text-gold-ink transition-colors"
              >
                resa@hotelzodiac.com
              </a>
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-stone-500">
              Réception ouverte 24/24
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl">Suivez-nous</h3>
            <div className="mt-3 flex flex-col gap-1 text-sm text-stone-400">
              <span>Instagram — bientôt disponible</span>
              <span>Facebook — bientôt disponible</span>
              <span>Tripadvisor — bientôt disponible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white px-6 py-12 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row max-w-7xl mx-auto">
          <div className="text-center md:text-left">
            <div className="font-serif text-2xl uppercase tracking-tighter">Hôtel Zodiac</div>
            <p className="mt-2 text-xs text-stone-500 italic">Yasmine Hammamet, Tunisie</p>
          </div>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
            <a href="#contact" className="hover:text-gold-ink">
              Contact
            </a>
          </div>
          <div className="text-[10px] text-stone-500">
            © 2026 Zodiac Hôtel & Aqua Park. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
