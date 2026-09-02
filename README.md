# Présentation CSI — Noureddine Khaous

Présentation HTML construite avec [Reveal.js](https://revealjs.com/) et Vite.

## Installation

```bash
npm install
```

## Lancer la présentation

```bash
npm run dev
```

Ouvrir ensuite l'adresse affichée par Vite. La page d'accueil redirige automatiquement vers la présentation.

## Générer la version de production

```bash
npm run build
npm run preview
```

Les fichiers générés sont placés dans `dist/`.

## Organisation

- `src/slidedecks/csi-nkhaous.html` : ordre et configuration des slides ;
- `src/slidedecks/slides/csi-nkhaous/` : contenu HTML de chaque slide ;
- `src/slidedecks/css/` : styles de la présentation ;
- `src/public/assets/` : logos et figures ;
- `src/public/revealjs_plugins/` : ressources statiques utilisées par le menu Reveal.js.

## Navigation

- flèches droite/gauche : changer de slide ;
- `F` : plein écran ;
- `Esc` : vue d'ensemble ;
- ajouter `?print-pdf` à l'URL pour préparer un export PDF depuis le navigateur.
