"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Détecte si l'élément référencé est visible à l'écran, pour couper les
 * boucles de rendu WebGL (useFrame, animations shader) hors viewport.
 */
export function useInViewport<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [inViewport, setInViewport] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(([entry]) => {
      setInViewport(entry.isIntersecting);
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inViewport };
}
