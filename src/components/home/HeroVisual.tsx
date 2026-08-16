"use client";

import dynamic from "next/dynamic";
import { useRenderTier } from "@/lib/useRenderTier";
import { useInViewport } from "@/lib/useInViewport";
import { AnimatedGradientFallback } from "./AnimatedGradientFallback";

const HeroShaderScene = dynamic(
  () => import("./HeroShaderScene").then((m) => m.HeroShaderScene),
  { ssr: false, loading: () => null }
);

/**
 * Calque décoratif uniquement : le dégradé CSS statique du parent (Hero.tsx)
 * reste visible en permanence en dessous. Ce composant ajoute, selon le
 * niveau de rendu (voir CLAUDE.md) : le shader WebGL en COMPLET (coupé dès
 * qu'il sort du viewport), un dégradé CSS animé en RÉDUIT, rien en MINIMAL.
 */
export function HeroVisual() {
  const tier = useRenderTier();
  const { ref, inViewport } = useInViewport<HTMLDivElement>({ threshold: 0.05 });

  if (tier === "minimal") return null;

  return (
    <div ref={ref} className="absolute inset-0">
      {tier === "complet" ? (
        inViewport && <HeroShaderScene />
      ) : (
        <AnimatedGradientFallback />
      )}
    </div>
  );
}
