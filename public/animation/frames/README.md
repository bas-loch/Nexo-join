# Frames — animation scroll-driven

Les 121 images JPG de l'animation contrôlée par le scroll (assiette vide →
assiette de fruits de mer) sont présentes dans ce dossier, nommées selon la
convention attendue par `src/components/ScrollPlateAnimation.tsx` :

```
frame-001.jpg
frame-002.jpg
...
frame-121.jpg
```

Le composant détecte leur présence automatiquement au chargement et bascule
sur le rendu réel (canvas piloté par le scroll). Si ce dossier venait à être
vidé, le composant retomberait sur son état "placeholder" sans erreur.
