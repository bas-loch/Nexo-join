"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

/**
 * Animation scroll-driven "assiette vide → assiette de fruits de mer"
 * (121 frames JPG), pièce centrale de la page juste après le hero.
 *
 * Le composant :
 *  - détecte automatiquement si les frames sont présentes dans
 *    /public/animation/frames/frame-001.jpg … frame-121.jpg
 *  - si absentes : affiche un état placeholder élégant, sans rien inventer
 *  - si présentes : dessine la frame correspondante sur un <canvas>,
 *    pilotée par la progression du scroll dans la section, avec un texte
 *    éditorial qui se révèle par étapes au fil du défilement.
 */

const TOTAL_FRAMES = 121;
const FRAME_PATH = (index: number) =>
  `/animation/frames/frame-${String(index).padStart(3, "0")}.jpg`;

// Texte éditorial d'accompagnement — propositions de ton, pas des faits à
// vérifier (comme la phrase d'accroche du hero). À valider avec le
// restaurant avant publication finale.
const STAGES = [
  { from: 0, to: 0.22, text: "Tout commence par un geste simple." },
  { from: 0.22, to: 0.48, text: "La Méditerranée prend place, assiette après assiette." },
  { from: 0.48, to: 0.76, text: "Fruits de mer, fraîcheur et générosité." },
  { from: 0.76, to: 1, text: "Bienvenue à la table de Caicco Romano." },
];

export default function ScrollPlateAnimation() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [framesReady, setFramesReady] = useState(false);
  const [checked, setChecked] = useState(false);
  const [stageIndex, setStageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

  // Détecte la présence des frames sans jamais générer d'animation factice.
  useEffect(() => {
    let cancelled = false;
    const probe = new Image();
    probe.onload = () => {
      if (cancelled) return;
      setFramesReady(true);
      setChecked(true);
    };
    probe.onerror = () => {
      if (cancelled) return;
      setFramesReady(false);
      setChecked(true);
    };
    probe.src = FRAME_PATH(1);
    return () => {
      cancelled = true;
    };
  }, []);

  // Précharge les frames une fois leur présence confirmée.
  useEffect(() => {
    if (!framesReady) return;
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      images.push(img);
    }
    imagesRef.current = images;
  }, [framesReady]);

  // Dessine la frame courante sur le canvas en fonction du scroll.
  useEffect(() => {
    if (!framesReady) return;

    const draw = (index: number) => {
      const canvas = canvasRef.current;
      const img = imagesRef.current[index - 1];
      if (!canvas || !img || !img.complete) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const { clientWidth, clientHeight } = canvas;
      if (canvas.width !== clientWidth * dpr || canvas.height !== clientHeight * dpr) {
        canvas.width = clientWidth * dpr;
        canvas.height = clientHeight * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // "contain" plutôt que "cover" : les frames ont un fond noir qui se
      // fond dans le thème du site, donc on préserve l'assiette entière au
      // lieu de recadrer/zoomer (particulièrement important en portrait).
      const scale = Math.min(clientWidth / img.width, clientHeight / img.height);
      const w = img.width * scale;
      const h = img.height * scale;
      const x = (clientWidth - w) / 2;
      const y = (clientHeight - h) / 2;

      ctx.clearRect(0, 0, clientWidth, clientHeight);
      ctx.drawImage(img, x, y, w, h);
    };

    const unsubscribe = frameIndex.on("change", (latest) => {
      draw(Math.min(TOTAL_FRAMES, Math.max(1, Math.round(latest))));
    });

    draw(1);
    return () => unsubscribe();
  }, [framesReady, frameIndex]);

  // Fait avancer le texte éditorial par étapes au fil du scroll.
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const next = STAGES.findIndex((s) => progress >= s.from && progress < s.to);
      const resolved = next === -1 ? STAGES.length - 1 : next;
      setStageIndex((current) => (current === resolved ? current : resolved));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      id="animation"
      className="relative h-[400vh]"
      aria-label="Animation de l'assiette signature"
    >
      <div className="sticky top-0 h-[100svh] w-full flex items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-radial-fade opacity-70"
        />

        {framesReady ? (
          <canvas
            ref={canvasRef}
            className="h-full w-full"
            style={{ display: "block" }}
          />
        ) : (
          checked && <PlaceholderPlate />
        )}

        {framesReady && (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/25 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-16 sm:bottom-20 px-6 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={stageIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-2xl sm:text-3xl md:text-4xl italic text-ivory/90 text-center text-balance max-w-xl"
                >
                  {STAGES[stageIndex].text}
                </motion.p>
              </AnimatePresence>
            </div>
          </>
        )}

        {!framesReady && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-6">
            <p className="font-body text-[10px] tracking-widest2 uppercase text-ivory/35">
              Animation 3D au scroll — 121 frames à intégrer
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function PlaceholderPlate() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-56 h-56 sm:w-72 sm:h-72"
      >
        <span className="absolute inset-0 rounded-full border border-gold-400/25" />
        <span className="absolute inset-6 rounded-full border border-gold-400/15" />
        <span className="absolute inset-0 rounded-full bg-gold-400/[0.03] blur-2xl" />
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <ellipse cx="100" cy="100" rx="88" ry="88" className="text-ivory/20" />
          <ellipse cx="100" cy="100" rx="60" ry="60" className="text-ivory/12" />
        </svg>
      </motion.div>
      <div className="text-center max-w-sm">
        <p className="font-display text-2xl text-ivory/80 mb-2">
          Emplacement réservé
        </p>
        <p className="font-body text-sm text-ivory/45 leading-relaxed">
          Cette zone accueillera l&apos;animation pilotée par le scroll (assiette
          vide → assiette de fruits de mer, 121 frames). Les images seront
          ajoutées dans une prochaine étape.
        </p>
      </div>
    </div>
  );
}
