# Zodiac Hôtel & Aqua Park — site vitrine

Site vitrine trilingue (FR / EN / DE) pour le Zodiac Hôtel & Aqua Park 4*
(Yasmine Hammamet, Tunisie). Next.js 15 (App Router), TypeScript, Tailwind CSS 4.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) (redirige vers `/fr`).

## Structure

- `src/app/[locale]/` — pages du site (routing i18n `/fr`, `/en`, `/de`)
- `src/i18n/dictionaries/` — textes traduits, un fichier par langue, typés via `types.ts`
- `src/components/` — composants React (layout, home, chambres, spa, réservation…)
- `src/lib/` — données de l'hôtel, manifeste des photos, génération JSON-LD, logique du formulaire de réservation
- `public/images/` — photos réelles de l'hôtel (voir ci-dessous)
- `public/vendor/liquid-glass-js/` — copie locale de [liquid-glass-js](https://github.com/dashersw/liquid-glass-js), chargée dynamiquement côté client

## Photos de l'hôtel

Aucune image générée ni banque d'images : toutes les photos doivent provenir
du site de l'hôtel. Le manifeste des fichiers attendus est dans
`src/lib/images.ts`. Tant qu'un fichier n'existe pas dans `public/images/`,
la page affiche un bloc gris nommé à la place (composant `HotelImage`).

Pour ajouter une photo : la déposer dans `public/images/` avec le nom de
fichier attendu (WebP, 1920px de large maximum), puis relancer :

```bash
npm run check:images
```

Ce script régénère `src/lib/available-images.generated.ts` (liste des
fichiers détectés). Il tourne aussi automatiquement avant `npm run dev` et
`npm run build`.

## Build & déploiement

```bash
npm run build
```

Déploiement configuré pour Netlify via `netlify.toml` (`@netlify/plugin-nextjs`).
