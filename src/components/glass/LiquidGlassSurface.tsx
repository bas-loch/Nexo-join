"use client";

import { useEffect, useRef } from "react";

interface LiquidGlassContainerInstance {
  element: HTMLElement;
  updateSizeFromDOM: () => void;
}

interface LiquidGlassContainerCtor {
  new (options: {
    type?: "rounded" | "pill" | "circle";
    borderRadius?: number;
    tintOpacity?: number;
  }): LiquidGlassContainerInstance;
}

declare global {
  interface Window {
    html2canvas?: unknown;
    Container?: LiquidGlassContainerCtor;
  }
}

let containerScriptPromise: Promise<void> | null = null;

function loadContainerScript(): Promise<void> {
  if (typeof window !== "undefined" && window.Container) return Promise.resolve();
  if (containerScriptPromise) return containerScriptPromise;

  containerScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "/vendor/liquid-glass-js/container.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("liquid-glass-js: échec de chargement"));
    document.body.appendChild(script);
  });

  return containerScriptPromise;
}

function canUseLiquidGlass(): boolean {
  if (typeof window === "undefined") return false;
  if (window.innerWidth < 768) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

interface LiquidGlassSurfaceProps {
  shape?: "rounded" | "pill" | "circle";
  borderRadius?: number;
  tintOpacity?: number;
  className?: string;
}

/**
 * Décoration WebGL purement optionnelle : un canvas de réfraction posé en
 * arrière-plan derrière un contenu HTML normal. Le contenu réel (nav, bouton)
 * est toujours rendu séparément par le composant appelant avec une classe
 * CSS de repli (backdrop-blur), donc rien ne dépend visuellement de ce calque.
 */
export function LiquidGlassSurface({
  shape = "pill",
  borderRadius = 999,
  tintOpacity = 0.18,
  className = "absolute inset-0 -z-10 overflow-hidden pointer-events-none",
}: LiquidGlassSurfaceProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    if (!canUseLiquidGlass()) return;
    initialized.current = true;

    let cancelled = false;

    (async () => {
      try {
        if (!window.html2canvas) {
          const mod = await import("html2canvas");
          window.html2canvas = mod.default;
        }
        await loadContainerScript();
        if (cancelled || !hostRef.current || !window.Container) return;

        const container = new window.Container({ type: shape, borderRadius, tintOpacity });
        container.element.style.width = "100%";
        container.element.style.height = "100%";
        container.element.style.pointerEvents = "none";
        hostRef.current.appendChild(container.element);
        requestAnimationFrame(() => container.updateSizeFromDOM());
      } catch {
        // Effet purement décoratif : en cas d'échec, le repli CSS reste visible.
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [shape, borderRadius, tintOpacity]);

  return <div ref={hostRef} aria-hidden className={className} />;
}
