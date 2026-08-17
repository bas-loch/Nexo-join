import { createFileRoute } from "@tanstack/react-router";
import aquaparkAsset from "@/assets/zodiac/aquapark-slides.jpg.asset.json";
import beachAsset from "@/assets/zodiac/plage-aerial.jpg.asset.json";
const aquapark = aquaparkAsset.url;
const beach = beachAsset.url;
import spa from "@/assets/zodiac/spa1.jpg";

import roomSuiteAsset from "@/assets/zodiac/chambre-suite.jpg.asset.json";
import roomFamilyAsset from "@/assets/zodiac/chambre-familiale.jpg.asset.json";
import roomDoubleAsset from "@/assets/zodiac/chambre-double.jpg.asset.json";
const roomSuite = roomSuiteAsset.url;
const roomFamily = roomFamilyAsset.url;
const roomDouble = roomDoubleAsset.url;
import restaurant from "@/assets/zodiac/restaurant.jpg";
import receptionDome from "@/assets/zodiac/reception-dome.jpg.asset.json";
import domeZodiac from "@/assets/zodiac/dome-zodiac.jpg.asset.json";
import barLobby from "@/assets/zodiac/bar-lobby.jpg.asset.json";
import barArches from "@/assets/zodiac/bar-arches.jpg.asset.json";
import cocktail from "@/assets/zodiac/cocktail.jpg.asset.json";
import salon from "@/assets/zodiac/salon.jpg.asset.json";
import piscineChauffee from "@/assets/zodiac/piscine-chauffee.jpg.asset.json";
import spaMur from "@/assets/zodiac/spa-zodiac-mur.jpg.asset.json";
import spaSalon from "@/assets/zodiac/spa-salon.jpg.asset.json";
import spaMassage from "@/assets/zodiac/spa-massage.jpg.asset.json";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:image", content: receptionDome.url }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-sand font-sans text-navy selection:bg-gold/30">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/85 px-6 py-4 backdrop-blur-md lg:px-12 border-b border-stone-200/60">
        <a href="#top" className="flex items-center gap-3">
          <div className="size-10 bg-navy grid place-items-center text-white font-serif italic text-xl">Z</div>
          <span className="font-serif text-2xl tracking-tight uppercase">Zodiac</span>
        </a>
        <div className="hidden gap-8 text-xs font-semibold uppercase tracking-widest lg:flex">
          <a href="#hotel" className="hover:text-gold transition-colors">L'Hôtel</a>
          <a href="#chambres" className="hover:text-gold transition-colors">Chambres</a>
          <a href="#aquapark" className="hover:text-gold transition-colors">Aqua Park</a>
          <a href="#bienetre" className="hover:text-gold transition-colors">Bien-être</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <a href="#reserver" className="bg-navy px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-gold transition-all duration-300 shadow-xl shadow-navy/10">
          Réserver
        </a>
      </nav>

      {/* Hero */}
      <section id="top" className="relative h-[85vh] overflow-hidden">
        <img
          src={receptionDome.url}
          alt="Réception et coupole de l'Hôtel Zodiac"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-navy/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-4">Yasmine Hammamet · Tunisie</span>
          <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            L'Art de Vivre à <span className="italic">Yasmine Hammamet</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light opacity-90">
            Une escale 4 étoiles entre jardins luxuriants, plages de sable fin et l'excitation de notre Aqua Park exclusif.
          </p>
        </div>

        {/* Booking bar */}
        <div id="reserver" className="absolute bottom-0 left-1/2 w-full max-w-5xl -translate-x-1/2 translate-y-1/2 px-6 hidden md:block">
          <form className="grid grid-cols-4 divide-x divide-stone-100 bg-white p-6 shadow-2xl">
            <label className="px-4 flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-tighter text-stone-400">Arrivée</span>
              <input type="date" defaultValue="2026-06-12" className="mt-1 font-medium bg-transparent focus:outline-none" />
            </label>
            <label className="px-4 flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-tighter text-stone-400">Départ</span>
              <input type="date" defaultValue="2026-06-19" className="mt-1 font-medium bg-transparent focus:outline-none" />
            </label>
            <label className="px-4 flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-tighter text-stone-400">Voyageurs</span>
              <select className="mt-1 font-medium bg-transparent focus:outline-none">
                <option>2 Adultes</option>
                <option>2 Adultes, 1 Enfant</option>
                <option>2 Adultes, 2 Enfants</option>
                <option>1 Adulte</option>
              </select>
            </label>
            <div className="px-4 flex items-center">
              <button type="submit" className="w-full bg-gold py-3 text-xs font-bold uppercase tracking-widest text-white hover:brightness-110 cursor-pointer">Vérifier</button>
            </div>
          </form>
        </div>
      </section>

      {/* Intro / L'Hôtel */}
      <section id="hotel" className="px-6 pt-40 md:pt-44 pb-16 lg:px-12 max-w-6xl mx-auto text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">L'Hôtel Zodiac</span>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
          Au cœur de la station balnéaire de <span className="italic">Yasmine Hammamet</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-stone-600 leading-relaxed">
          À 300 mètres d'une superbe plage de sable fin et à 10 minutes des parcours de golf Citrus et Yasmine, l'Hôtel Zodiac 4 étoiles vous invite à vivre une expérience mêlant détente, bien-être et divertissement en famille.
        </p>
      </section>

      {/* Key Features */}
      <section className="px-6 pb-20 lg:px-12 max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-3">
          <a href="#aquapark" className="group">
            <div className="aspect-[4/5] w-full overflow-hidden mb-6">
              <img src={aquapark} alt="Toboggans de l'Aqua Park Zodiac" loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h3 className="font-serif text-2xl">Aqua Park Sensation</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">Des toboggans spectaculaires pour toute la famille, au cœur de notre complexe.</p>
          </a>

          <a href="#bienetre" className="group">
            <div className="aspect-[4/5] w-full overflow-hidden mb-6">
              <img src={spa} alt="Espace spa et bien-être" loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h3 className="font-serif text-2xl">Spa & Bien-être</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">Retrouvez l'équilibre dans notre sanctuaire dédié à la détente et aux soins traditionnels tunisiens.</p>
          </a>

          <a href="#hotel" className="group">
            <div className="aspect-[4/5] w-full overflow-hidden mb-6">
              <img src={beach} alt="Plage privée de sable fin" loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h3 className="font-serif text-2xl">Plage Privée</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">À seulement 300 mètres, profitez de notre accès exclusif à la plage de Yasmine Hammamet.</p>
          </a>
        </div>
      </section>

      {/* Chambres */}
      <section id="chambres" className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Séjour</span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Nos Chambres & Suites</h2>
            </div>
            <p className="max-w-md text-sm text-stone-600 leading-relaxed">
              Chaque chambre a été pensée pour votre confort, avec vue sur les jardins, la piscine ou la Méditerranée.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { img: roomDouble, name: "Chambre Double", meta: "28 m² · 2 personnes", price: "95€" },
              { img: roomSuite, name: "Suite Vue Mer", meta: "35 m² · Balcon privé", price: "180€" },
              { img: roomFamily, name: "Chambre Familiale", meta: "45 m² · 4 personnes", price: "210€" },
            ].map((r) => (
              <article key={r.name} className="group">
                <div className="aspect-[4/5] overflow-hidden mb-5">
                  <img src={r.img} alt={r.name} loading="lazy" width={900} height={1100} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl">{r.name}</h3>
                  <span className="text-xs uppercase tracking-widest text-stone-400">dès {r.price}</span>
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
            <img src={aquapark} alt="Toboggans géants Aqua Park" loading="lazy" width={800} height={1000} className="h-full w-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Exclusivité Zodiac</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">Un paradis aquatique pour toute la famille</h2>
            <p className="mt-6 text-stone-600 leading-relaxed max-w-lg">
              Découvrez l'un des plus grands parcs aquatiques de Yasmine Hammamet. Entre toboggans vertigineux et piscines relaxantes, l'accès est illimité pour tous nos résidents.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {["3 piscines extérieures", "Toboggans multipistes & piscine à vagues", "Espace sécurisé pour les jeunes enfants", "Animations et clubs enfants"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-gold" />
                  <span className="uppercase tracking-widest text-xs font-semibold">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Spa & Restaurant */}
      <section id="bienetre" className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden group">
            <img src={spa} alt="Spa et hammam" loading="lazy" width={800} height={1000} className="h-full w-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Bien-être</span>
              <h3 className="mt-2 font-serif text-3xl">Spa & Hammam Traditionnel</h3>
              <p className="mt-2 text-sm text-white/80 max-w-sm">Soins ancestraux tunisiens, gommage au savon noir, massages aux huiles de jasmin.</p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img src={restaurant} alt="Restaurant gastronomique" loading="lazy" width={1200} height={800} className="h-full w-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Gastronomie</span>
              <h3 className="mt-2 font-serif text-3xl">Saveurs Méditerranéennes</h3>
              <p className="mt-2 text-sm text-white/80 max-w-sm">Buffets à thème, restaurants à la carte et bars face à la piscine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Zodiac & Piscine chauffée */}
      <section id="spa" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Zodiac Spa & Piscine Couverte</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">Un cocon de détente <span className="italic">toute l'année</span></h2>
          <p className="mt-6 text-stone-600 leading-relaxed">
            Profitez de notre piscine intérieure chauffée sous verrière, puis prolongez l'expérience au Zodiac Spa : hammam, salon de repos aux zelliges tunisiens et cabines de massage pour un moment hors du temps.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden">
            <img src={piscineChauffee.url} alt="Piscine intérieure chauffée sous verrière avec zelliges tunisiens" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-12 md:col-span-4 aspect-[4/5] md:aspect-auto overflow-hidden">
            <img src={spaMur.url} alt="Mur d'accueil du Zodiac Spa avec les 12 signes en céramique" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-12 md:col-span-6 aspect-[16/10] overflow-hidden">
            <img src={spaSalon.url} alt="Salon de repos du spa avec banquettes et coussins colorés" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-12 md:col-span-6 aspect-[16/10] overflow-hidden">
            <img src={spaMassage.url} alt="Cabine de massage du Zodiac Spa" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Réception & Bar */}
      <section id="reception" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Réception & Bar Lobby</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">Une architecture inspirée du <span className="italic">zodiaque</span></h2>
          <p className="mt-6 text-stone-600 leading-relaxed">
            Sous la coupole ornée des douze signes, notre réception et notre bar-lobby vous accueillent dans un décor mêlant artisanat tunisien, arcs en pierre et lustres dorés.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden">
            <img src={receptionDome.url} alt="Réception sous la coupole du zodiaque" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-6 md:col-span-4 aspect-[4/5] md:aspect-auto overflow-hidden">
            <img src={domeZodiac.url} alt="Coupole ornée des signes du zodiaque" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-6 md:col-span-4 aspect-[4/5] overflow-hidden">
            <img src={cocktail.url} alt="Cocktail signature du bar Zodiac" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden">
            <img src={barLobby.url} alt="Bar-lobby avec lanternes et arcs tunisiens" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-6 md:col-span-6 aspect-[4/5] md:aspect-[16/10] overflow-hidden">
            <img src={barArches.url} alt="Comptoir du bar en arcs de pierre" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-6 md:col-span-6 aspect-[4/5] md:aspect-[16/10] overflow-hidden">
            <img src={salon.url} alt="Salon d'accueil aux fauteuils rouges" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>


      {/* Reviews */}
      <section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Ils ont séjourné chez nous</span>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">Une expérience notée <span className="italic">4.1/5</span></h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3 text-left">
          {[
            { q: "Un cadre idyllique, une piscine magnifique et un personnel aux petits soins. Nous reviendrons !", a: "Sarah L.", src: "Tripadvisor" },
            { q: "L'aqua park est devenu le terrain de jeu favori de nos enfants. Séjour inoubliable en famille.", a: "Karim B.", src: "Booking" },
            { q: "Le spa est un vrai havre de paix. Le hammam traditionnel vaut absolument le détour.", a: "Élise M.", src: "Google" },
          ].map((r) => (
            <figure key={r.a} className="bg-white p-8 border-t-2 border-gold">
              <blockquote className="font-serif text-lg italic text-navy leading-relaxed">« {r.q} »</blockquote>
              <figcaption className="mt-6 flex items-center justify-between text-xs uppercase tracking-widest">
                <span className="font-semibold">{r.a}</span>
                <span className="text-stone-400">{r.src}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 px-6 text-center text-white lg:px-12">
        <div className="mx-auto max-w-2xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Offre Exclusive</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Réservez directement pour bénéficier du meilleur tarif garanti
          </h2>
          <p className="mt-6 text-stone-300">
            Profitez d'un accès illimité à l'Aqua Park et de remises spéciales sur nos soins Spa.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#chambres" className="border border-white/20 bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-widest backdrop-blur-sm hover:bg-white hover:text-navy transition-all">Voir les chambres</a>
            <a href="#reserver" className="bg-gold px-8 py-4 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg">Réserver maintenant</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Contact</span>
            <h2 className="mt-3 font-serif text-3xl">Nous trouver</h2>
            <p className="mt-4 text-sm text-stone-600 leading-relaxed">
              Zone Touristique<br />8050 Yasmine Hammamet<br />Tunisie
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl">Réservations</h3>
            <p className="mt-3 text-sm text-stone-600">Tél : +216 72 244 850</p>
            <p className="text-sm text-stone-600">Email : contact@hotelzodiac.com</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-stone-400">Réception ouverte 24/24</p>
          </div>
          <div>
            <h3 className="font-serif text-xl">Suivez-nous</h3>
            <div className="mt-3 flex flex-col gap-1 text-sm">
              <a href="#" className="hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-gold transition-colors">Facebook</a>
              <a href="#" className="hover:text-gold transition-colors">Tripadvisor</a>
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
            <a href="#" className="hover:text-gold">Mentions Légales</a>
            <a href="#contact" className="hover:text-gold">Contact</a>
            <a href="#" className="hover:text-gold">Recrutement</a>
          </div>
          <div className="text-[10px] text-stone-400">
            © 2026 Zodiac Hôtel & Aqua Park. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
