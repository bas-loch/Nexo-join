# Direction artistique — projet Hôtel Zodiac

Ce fichier s'applique à toute la session. Relis-le avant chaque nouvelle section.

## Contexte

Site vitrine haut de gamme pour le Zodiac Hôtel & Aqua Park, 4 étoiles à
Yasmine Hammamet (Tunisie). Refonte de démarchage : leur site actuel
(hotelzodiac.com) est un Joomla figé depuis 2020, en français uniquement,
sans réservation en ligne. Le site doit impressionner visuellement dès la
première seconde.

## Interdits absolus

- Aucun style de template générique. Pas de cartes à coins arrondis
  uniformes avec ombre douce et icône bleue en haut.
- Jamais de couleur Tailwind par défaut (blue-500, gray-100, slate-800...).
  Utilise uniquement les tokens définis dans tailwind.config.
- Pas d'emojis dans l'interface.
- Pas de police système par défaut.
- Aucune image inventée, aucune banque d'images, aucun téléchargement en
  ligne. Uniquement les photos réelles de public/images/.
- Pas de superlatifs creux ni de ton publicitaire artificiel dans les textes.

## Identité visuelle

Référence : pages produit d'Apple et sites d'hôtels de luxe type Aman ou
Six Senses. Grand, lent, aéré, cinématographique.

Palette : bleu nuit méditerranéen profond en fond, sable chaud, blanc cassé,
un accent doré très discret. Contraste fort.

Typographie : serif à fort caractère pour les titres, en très grande taille
(clamp jusqu'à 8rem sur desktop), interlignage serré, letter-spacing négatif.
Sans-serif neutre pour le texte courant. Jamais deux niveaux de titre de
taille proche : soit énorme, soit petit.

Espacement : très généreux. Chaque section principale respire sur au moins
100vh.

## Règles techniques fixes

- Toute animation passe par `motion` ou GSAP, jamais par transition CSS
  ad hoc — sauf au niveau de rendu minimal.
- Tout composant WebGL respecte `useRenderTier()` et coupe sa boucle de
  rendu dès qu'il sort du viewport.
- Tout composant 3D ou shader est chargé en dynamic import sans SSR, avec
  un fallback statique propre pendant le chargement.
- `next/image` partout, format WebP, lazy loading.
- Tout texte est écrit dans les trois langues (fr / en / de) avant d'être
  considéré comme fini.
- Après chaque section terminée, lance `npm run build`.

## Les trois niveaux de rendu

Détectés automatiquement par le hook `useRenderTier()`, à respecter partout.

**COMPLET** — desktop, > 1024px, pas de `prefers-reduced-motion`
Tous les effets : verre, shaders, 3D, post-processing, scroll GSAP,
micro-interactions.

**RÉDUIT** — 768 à 1024px
Verre et scroll conservés. 3D et post-processing désactivés. Shaders
remplacés par des dégradés CSS animés.

**MINIMAL** — < 768px, `prefers-reduced-motion`, ou pas de support WebGL
Aucun effet. Transitions CSS simples, images statiques, dégradés fixes.

## Performance

Objectif : Lighthouse performance mobile au-dessus de 85. Si un effet fait
passer sous ce seuil, retire-le et signale-le.

Le formulaire de réservation reste sobre et instantané, quel que soit le
niveau de rendu. C'est la page qui doit convertir.

## Ton des textes

Professionnel de l'hôtellerie, sobre, factuel. Phrases courtes. Pas
d'emojis. Écrits en français d'abord, puis traduits en anglais et en
allemand.
