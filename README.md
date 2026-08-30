# Baka Burger — Hammamet

Démo de prospection pour Baka Burger, smash burger au 60 Av. Habib Bourguiba,
Hammamet. Site statique, sans build : `index.html` s'ouvre tel quel et se
déploie sur n'importe quel hébergeur (Netlify, Vercel, un simple dossier FTP).

## État actuel

Site complet : premier écran, menu, le lieu, les avis, venir, pied de page.
Tout le contenu factuel vient de ce qu'on sait du restaurant. Rien n'a été
inventé — voir « Ce qui reste à fournir ».

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | Le site. Tout est dedans : styles, script, textures. Aucune dépendance sauf Google Fonts. |
| `tools/direction-bloc.html` | La planche de direction (palette, typo, matières, mouvements). |
| `tools/build-direction.sh` | Assemble `build/direction.html` = premier écran + planche, en une page. |

```sh
./tools/build-direction.sh   # regénère build/direction.html après une modif du hero
```

## Direction

| Rôle | Valeur |
| --- | --- |
| Dominante | Vermillon `#E42313` |
| Fond | Papier os `#F1E7D6` + trame de points 7 px |
| Encre | `#17110F` |
| Accent | Jaune acide `#FFC300`, en micro-doses |
| Profondeur | Braise `#8E1207` |
| Provisoire | Gris calé `#BDB2A2` (blocs photo) |

Titres **Anton** (jusqu'à 17,5 vw, interlignage 0,78), signature **Zen Kaku
Gothic New 900** pour バカ, textes **Archivo**.

Le nom « baka » (バカ) veut dire « fou / idiot » en japonais : d'où le katakana
en signature et l'accroche « Bêtement bon » / « Stupidly good ».

## Accroche : deux versions prêtes

Le nom « baka » (バカ) veut dire « fou / idiot » en japonais. L'accroche en
ligne joue dessus. Tant que le patron n'a pas confirmé qu'il assume ce sens,
une version neutre est prête à prendre sa place.

| Version | FR | EN |
| --- | --- | --- |
| `baka` (en ligne) | BÊTEMENT BON. | STUPIDLY GOOD. |
| `neutre` (prête) | FRANCHEMENT BON. | SERIOUSLY GOOD. |

Pour basculer, une seule ligne en haut du `<script>` de `index.html` :

```js
var ACCROCHE = "baka";   // -> "neutre"
```

Les deux textes sont déjà dans la page, en français et en anglais. Le titre se
réduit tout seul si le mot est trop long pour la colonne, donc n'importe quelle
autre accroche tiendra aussi.

Le katakana バカ de la signature reste dans les deux cas : c'est le nom écrit en
japonais, pas la blague. Le retirer est une décision séparée.

## Ce qui reste à fournir

Aucune photo, aucun prix, aucun avis n'a été inventé. Chaque emplacement est un
bloc gris marqué **photo à remplacer**, aux dimensions attendues.

| Quoi | Où | Format |
| --- | --- | --- |
| Burger héros | Premier écran | PNG 1200 × 1200, **détouré sur fond transparent** |
| 6 photos produits | Menu | 1000 × 1250 |
| La devanture | Le lieu | 1600 × 1100 |
| La plancha | Le lieu | 1100 × 1400 |
| Carte Google Maps | Venir | iframe à intégrer |
| Prix | Menu, 6 emplacements | — |
| Descriptions des burgers | Menu | à valider avec le patron |
| 3 avis Google réels | Les avis | texte + prénom + date |
| Jours exacts du week-end | Venir | pour l'horaire 1h |

## À savoir

- **FR / EN** : bascule en haut à droite, choix mémorisé dans le navigateur.
  Prévu pour la clientèle britannique ; d'autres langues s'ajoutent avec un
  attribut `data-xx` sur les mêmes éléments.
- **Commander** = appel vers `+216 92 358 203`. À remplacer si un service de
  commande en ligne est mis en place.
- Le premier écran est calibré pour tenir dans la hauteur d'écran de 640 px à
  1080 px, bandeau défilant compris.
- Les descriptions des burgers découlent de leur nom, elles ne sont pas
  confirmées : la section porte l'étiquette « descriptions et prix à compléter ».
- Toutes les animations se coupent seules si le visiteur a activé « réduire les
  animations » sur son appareil.
