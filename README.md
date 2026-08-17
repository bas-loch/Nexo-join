# Ben's Resto Café — site vitrine

Site vitrine bilingue (FR/EN) pour Ben's Resto Café, Yasmine Hammamet.
Next.js 15, TypeScript, Tailwind CSS, App Router, déploiement Netlify.

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) (redirige vers
`/fr` ou `/en` selon la langue du navigateur).

## Ajouter les vraies photos

Tant qu'un fichier n'existe pas dans `public/images`, le site affiche
un bloc de substitution avec la légende attendue — aucun code à
modifier. Il suffit de déposer les fichiers réels dans
`public/images` sous le nom exact listé dans `src/data/images.ts`
(ex. `hero.jpg`, `terrasse-01.jpg`, `menu-page-01.jpg`, `logo.png`).

## Mettre à jour la carte (menu)

Les catégories et les deux plats vedettes sont dans
`src/data/menu.ts`. Les prix ne sont volontairement pas encore
renseignés : à ajouter une fois la carte physique transcrite depuis
les photos `menu-page-01.jpg` à `menu-page-04.jpg`.

## Traductions

Les textes FR/EN sont dans `messages/fr.json` et `messages/en.json`.

## Déploiement

Le dépôt est prêt pour Netlify (`netlify.toml` +
`@netlify/plugin-nextjs`) : connecter le dépôt sur Netlify, la
commande de build (`npm run build`) et le plugin sont déjà configurés.
