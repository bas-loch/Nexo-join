"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroShaderScene = dynamic(
  () => import("./HeroShaderScene").then((m) => m.HeroShaderScene),
  { ssr: false, loading: () => null }
);

function checkEligible(): boolean {
  if (typeof window === "undefined") return false;
  if (window.innerWidth < 768) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Calque décoratif uniquement : le dégradé CSS statique du parent (Hero.tsx)
 * reste visible en permanence en dessous. Ce composant n'ajoute que
 * l'animation WebGL par-dessus, et seulement quand les conditions le permettent.
 */
export function HeroVisual() {
  const [eligible, setEligible] = useState(false);

  useEffect(() => {
    setEligible(checkEligible());
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setEligible(checkEligible());
    mq.addEventListener("change", onChange);
    window.addEventListener("resize", onChange);
    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, []);

  if (!eligible) return null;
  return <HeroShaderScene />;
}
