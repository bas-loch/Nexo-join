# Baka Burger — Hammamet

Démo de prospection pour Baka Burger, smash burger au 60 Av. Habib Bourguiba,
Hammamet. Site statique, sans build : `index.html` s'ouvre tel quel et se
déploie sur n'importe quel hébergeur (Netlify, Vercel, un simple dossier FTP).

## État actuel

Premier écran + planche de direction. Les sections menu / lieu / avis / venir
restent à faire — les liens de navigation pointent déjà vers leurs ancres.

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

## Photos

Aucune photo n'a été inventée. Chaque emplacement est un bloc gris marqué
**photo à remplacer**, aux dimensions attendues. À fournir en premier :

- **Burger héros** — détouré sur fond transparent, PNG 1200 × 1200.

## À savoir

- **Pas de prix** sur le site : ils ne sont pas connus. À ajouter quand ils le seront.
- **FR / EN** : bascule en haut à droite, choix mémorisé dans le navigateur.
  Prévu pour la clientèle britannique ; d'autres langues s'ajoutent avec un
  attribut `data-xx` sur les mêmes éléments.
- **Commander** = appel vers `+216 92 358 203`. À remplacer si un service de
  commande en ligne est mis en place.
- Le premier écran est calibré pour tenir dans la hauteur d'écran de 640 px à
  1080 px, bandeau défilant compris.
- Toutes les animations se coupent seules si le visiteur a activé « réduire les
  animations » sur son appareil.
