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
 *    éditorial qui se déplace autour de l'assiette par étapes.
 *
 * Plein format (pas de cadre qui réduit la taille) : seuls deux liserés en
 * haut et en bas marquent la démarcation avec le reste du site.
 */

const TOTAL_FRAMES = 121;
const FRAME_PATH = (index: number) =>
  `/animation/frames/frame-${String(index).padStart(3, "0")}.jpg`;

// Hauteur totale de la section de scroll, en multiples de la hauteur
// d'écran. Réduite par rapport à une première version jugée trop longue
// (impression de "pause" en fin de course).
const SCROLL_LENGTH_VH = 340;

// Mapping non-linéaire scroll -> frame : avance lentement au début (le
// remplissage de l'assiette reste lisible, pas "trop vite") puis
// accélère en fin de séquence pour ne pas s'attarder sur les dernières
// frames, presque identiques les unes aux autres (effet de "pause").
const FRAME_EASE = 1.45;

type StagePosition = "top" | "right" | "left" | "bottom";

// Texte éditorial d'accompagnement — propositions de ton, pas des faits à
// vérifier (comme la phrase d'accroche du hero). À valider avec le
// restaurant avant publication finale.
const STAGES: { from: number; to: number; text: string; position: StagePosition }[] = [
  { from: 0, to: 0.22, text: "Tout commence par un geste simple.", position: "top" },
  {
    from: 0.22,
    to: 0.48,
    text: "La Méditerranée prend place, assiette après assiette.",
    position: "right",
  },
  {
    from: 0.48,
    to: 0.76,
    text: "Fruits de mer, fraîcheur et générosité.",
    position: "left",
  },
  {
    from: 0.76,
    to: 1,
    text: "Bienvenue à la table de Caicco Romano.",
    position: "bottom",
  },
];

const POSITION_CLASSES: Record<StagePosition, string> = {
  top: "top-24 sm:top-28 inset-x-0 flex justify-center text-center px-8",
  bottom: "bottom-12 sm:bottom-16 inset-x-0 flex justify-center text-center px-8",
  right:
    "right-6 sm:right-16 top-1/2 -translate-y-1/2 max-w-[180px] sm:max-w-xs text-right",
  left:
    "left-6 sm:left-16 top-1/2 -translate-y-1/2 max-w-[180px] sm:max-w-xs text-left",
};

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

  const frameIndex = useTransform(scrollYProgress, (p) => {
    const clamped = Math.min(Math.max(p, 0), 1);
    return 1 + (TOTAL_FRAMES - 1) * Math.pow(clamped, FRAME_EASE);
  });

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

  const stage = STAGES[stageIndex];

  return (
    <section
      ref={sectionRef}
      id="animation"
      className="relative"
      style={{ height: `${SCROLL_LENGTH_VH}vh` }}
      aria-label="Animation de l'assiette signature"
    >
      <div className="hairline absolute top-0 inset-x-0 z-10" aria-hidden="true" />

      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-charcoal-950">
        <span className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 z-10 font-body text-[10px] sm:text-[11px] tracking-widest2 uppercase text-gold-400/70">
          L&apos;expérience Caicco Romano
        </span>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-radial-fade opacity-70 z-[1]"
        />

        {framesReady ? (
          <canvas
            ref={canvasRef}
            className="h-full w-full"
            style={{ display: "block" }}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            {checked && <PlaceholderPlate />}
          </div>
        )}

        {framesReady && (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/10 to-transparent z-[2]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/0 to-transparent z-[2]"
            />

            <div className="absolute inset-0 z-[3]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={stageIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute font-display text-xl sm:text-2xl md:text-3xl italic text-ivory/90 text-balance leading-snug ${POSITION_CLASSES[stage.position]}`}
                >
                  {stage.text}
                </motion.p>
              </AnimatePresence>
            </div>
          </>
        )}

        {!framesReady && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center px-6 z-[3]">
            <p className="font-body text-[10px] tracking-widest2 uppercase text-ivory/35">
              Animation 3D au scroll — 121 frames à intégrer
            </p>
          </div>
        )}
      </div>

      <div className="hairline absolute bottom-0 inset-x-0 z-10" aria-hidden="true" />
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
