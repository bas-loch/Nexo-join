# Zodiac Hôtel & Aqua Park — site vitrine

Site vitrine one-page pour le Zodiac Hôtel & Aqua Park 4* (Yasmine Hammamet,
Tunisie). Vite + React 19 + TypeScript + Tailwind CSS 4.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173).

## Structure

- `src/App.tsx` — toute la page (navigation par ancres : `#hotel`,
  `#chambres`, `#aquapark`, `#bienetre`, `#spa`, `#reception`, `#contact`)
- `src/assets/zodiac/` — photos réelles de l'hôtel
- `src/components/Placeholder.tsx` — repli visuel pour un emplacement sans
  photo (aucune banque d'images, voir CLAUDE.md)
- `src/components/ui/` — composants shadcn/ui disponibles mais non utilisés
  pour l'instant
- `src/styles.css` — tokens de couleur/typographie (Tailwind v4, `@theme`)

## Build & déploiement

```bash
npm run build
```

Site 100% statique (dossier `dist/`), déployé sur Netlify via `netlify.toml`.

## Écarts connus avec CLAUDE.md

Cette base (fournie par le client, générée initialement avec Lovable) a
remplacé la précédente version Next.js. Quelques règles de CLAUDE.md ne sont
pas encore respectées et restent à traiter :

- **i18n** : le site est en français uniquement, pas de FR/EN/DE.
- **Animations** : micro-interactions en transition CSS (`transition-transform`),
  pas encore migrées vers `motion`/GSAP.
- **Photos manquantes** : hammam et cabine de massage du spa n'ont pas encore
  de vraie photo (bloc de repli affiché à la place).
