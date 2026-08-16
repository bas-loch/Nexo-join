"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ThreeScene = dynamic(() => import("./ThreeScene").then((m) => m.ThreeScene), {
  ssr: false,
  loading: () => null,
});

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

export function ThreeVisual() {
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
  return <ThreeScene />;
}
