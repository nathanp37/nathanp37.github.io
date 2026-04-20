---
title: "Créer son portfolio : Le Guide Complet (Version Template)"
date: "2026-04-20"
description: "Téléchargez mon template vierge et apprenez à le personnaliser de A à Z."
tags: ["React", "Vite", "Open Source", "Tutoriel"]
cover: "cover.png"
---

# Guide de démarrage rapide : Votre Portfolio en 10 minutes

Ce projet a été conçu pour que vous n'ayez pas à réinventer la roue. Vous pouvez partir de ma base "vierge" et simplement remplir les cases.

## Étape 1 : Télécharger le Template
Commencez par récupérer la structure du projet :
[📥 Télécharger le Template Vierge (ZIP)](/portfolio-template.zip)

Une fois téléchargé, décompressez le fichier et ouvrez le dossier dans votre éditeur de code (VS Code recommandé).

## Étape 2 : Installation
Ouvrez votre terminal dans le dossier et lancez :
\`\`\`bash
npm install
npm run dev
\`\`\`

## Étape 3 : Personnalisation "Remplir les blancs"
J'ai marqué tous les endroits modifiables avec le commentaire `// REMPLIR ICI`. Voici les fichiers principaux à ouvrir :

### 1. L'identité du site (`package.json`)
Modifiez les lignes suivantes pour que GitHub sache où publier votre site :
- **"name"** : Votre nom ou pseudo.
- **"homepage"** : L'adresse de votre futur site (ex: `https://votre-pseudo.github.io`).

### 2. Le Header et l'Accueil (`src/components/HeroBanner/index.jsx`)
Cherchez les balises de texte :
\`\`\`jsx
<h1>Bonjour, je suis [VOTRE NOM]</h1>
<p>Je suis passionné par [VOTRE DOMAINE]...</p>
\`\`\`
N'oubliez pas de remplacer le fichier `public/hero_banner.png` par votre propre photo !

### 3. Les Couleurs (`src/styles/variables.module.scss`)
Vous pouvez changer l'ambiance du site en modifiant les codes couleurs :
- **$primary-color** : La couleur de vos boutons et liens.
- **$background-color** : La couleur de fond du site.

### 4. Vos Projets (`public/projects/`)
Le template contient un dossier nommé `PROJET_EXEMPLE`. 
1. Dupliquez ce dossier pour chaque projet que vous voulez ajouter.
2. Modifiez le fichier `index.md` à l'intérieur avec vos textes et images.
3. Le script automatique s'occupera du reste !

## Étape 4 : Mise en ligne
Quand vous êtes prêt, liez votre dossier à un dépôt GitHub et lancez :
\`\`\`bash
npm run deploy
\`\`\`
Votre portfolio sera en ligne quelques minutes après.

---
*Astuce : Si vous avez besoin d'écrire des formules mathématiques, utilisez la syntaxe KaTeX intégrée : $E = mc^2$.*