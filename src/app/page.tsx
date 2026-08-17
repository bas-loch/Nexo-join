import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureDish from "@/components/SignatureDish";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import PracticalInfo from "@/components/PracticalInfo";
import LocationSection from "@/components/LocationSection";
import ReservationCTA from "@/components/ReservationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SignatureDish />
        <About />
        <Specialties />
        <Menu />
        <Gallery />
        <PracticalInfo />
        <LocationSection />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
