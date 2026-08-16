"use client";

import dynamic from "next/dynamic";
import { useRenderTier } from "@/lib/useRenderTier";
import { useInViewport } from "@/lib/useInViewport";

const ThreeScene = dynamic(() => import("./ThreeScene").then((m) => m.ThreeScene), {
  ssr: false,
  loading: () => null,
});

/**
 * Scène 3D réservée au niveau COMPLET (voir CLAUDE.md : post-processing et
 * 3D coupés dès le niveau RÉDUIT). La boucle de rendu s'arrête dès que la
 * scène sort du viewport.
 */
export function ThreeVisual() {
  const tier = useRenderTier();
  const { ref, inViewport } = useInViewport<HTMLDivElement>({ threshold: 0.05 });

  if (tier !== "complet") return null;

  return (
    <div ref={ref} className="absolute inset-0">
      <ThreeScene active={inViewport} />
    </div>
  );
}
