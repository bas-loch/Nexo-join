"use client";

import { useEffect, useState } from "react";

export type RenderTier = "complet" | "reduit" | "minimal";

function hasWebGLSupport(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function computeTier(): RenderTier {
  if (typeof window === "undefined") return "minimal";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "minimal";
  if (!hasWebGLSupport()) return "minimal";

  const width = window.innerWidth;
  if (width < 768) return "minimal";
  if (width <= 1024) return "reduit";
  return "complet";
}

/**
 * Niveau de rendu courant (COMPLET / RÉDUIT / MINIMAL), voir CLAUDE.md.
 * "minimal" tant que non monté côté client, pour rester cohérent avec le SSR.
 */
export function useRenderTier(): RenderTier {
  const [tier, setTier] = useState<RenderTier>("minimal");

  useEffect(() => {
    setTier(computeTier());
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setTier(computeTier());
    reduceMotionQuery.addEventListener("change", update);
    window.addEventListener("resize", update);
    return () => {
      reduceMotionQuery.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return tier;
}
