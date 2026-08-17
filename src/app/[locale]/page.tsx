import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import Matchs from "@/components/Matchs";
import Reviews from "@/components/Reviews";
import PracticalInfo from "@/components/PracticalInfo";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import JsonLd from "@/components/JsonLd";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale as Locale);
  const l = locale as Locale;

  return (
    <>
      <JsonLd locale={l} />
      <Header locale={l} />
      <main className="pb-16 md:pb-0">
        <Hero locale={l} />
        <About locale={l} />
        <MenuSection locale={l} />
        <Gallery locale={l} />
        <Matchs locale={l} />
        <Reviews locale={l} />
        <PracticalInfo locale={l} />
      </main>
      <Footer locale={l} />
      <MobileContactBar locale={l} />
    </>
  );
}
