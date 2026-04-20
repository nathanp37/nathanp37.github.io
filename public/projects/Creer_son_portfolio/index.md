---
title: "Créer son portfolio : Le Guide pour Débutants (Version Template)"
date: "2020-05-20"
description: "Même sans expérience en code, téléchargez ce template vierge et mettez votre portfolio en ligne pas à pas."
tags: ["Débutant", "React", "Tutoriel"]
cover: "/projects/Creer_son_portfolio/cover.png"
password: "2002"
---

# Créez votre portfolio de A à Z (Guide pour débutants)

Ce projet a été conçu pour que vous n'ayez pas à créer un site en partant de zéro. L'idée est simple : vous téléchargez ma base "vierge", vous remplissez les textes avec vos informations, et le site s'occupe du reste !

Même si vous n'avez jamais écrit une ligne de code, ce guide va vous accompagner étape par étape.

---

## Étape 0 : Les outils indispensables

Avant de télécharger le portfolio, vous avez besoin de trois outils gratuits sur votre ordinateur :

* **Un éditeur de code (Visual Studio Code)** : C'est le logiciel qui permet de lire et modifier les fichiers du site de manière visuelle et claire. Cherchez "VS Code" sur Google et téléchargez-le.
* **Node.js** : C'est le moteur qui permet de faire tourner le site sur votre ordinateur avant de le mettre sur internet. Cherchez "Node.js" sur Google et installez la version recommandée pour la plupart des utilisateurs.
* **Un compte GitHub** : C'est le site web qui va héberger (stocker) gratuitement votre portfolio pour qu'il soit visible par tout le monde. Allez sur *github.com* et créez-vous un compte gratuit.

---

## Étape 1 : Récupérer et ouvrir le projet

Maintenant que vos outils sont prêts, récupérons la structure du site.

1. Téléchargez le dossier compressé du projet : [📥 Télécharger le Template Vierge (ZIP)](https://drive.google.com/drive/my-drive?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto)
2. Décompressez (extrayez) ce fichier ZIP dans un endroit facile à retrouver sur votre ordinateur, comme votre dossier "Documents".
3. Ouvrez le logiciel **Visual Studio Code** (VS Code).
4. Cliquez sur **Fichier** en haut à gauche, puis sur **Ouvrir le dossier...** (ou *Open Folder*).
5. Sélectionnez le dossier du portfolio que vous venez de décompresser.

Vous devriez maintenant voir une liste de fichiers apparaître sur le côté gauche de votre écran. C'est l'intérieur de votre site web !

---

## Étape 2 : Lancer le site sur votre ordinateur

Pour voir à quoi ressemble le site et tester vos modifications en direct, nous allons utiliser le "Terminal". C'est un outil qui permet de donner des ordres directs à l'ordinateur.

1. Dans VS Code, cliquez sur **Terminal** tout en haut de la fenêtre, puis sur **Nouveau terminal**. Un petit panneau s'ouvre en bas de l'écran.
2. Tapez la commande suivante puis appuyez sur "Entrée" : `npm install`
3. Attendez quelques minutes. L'ordinateur télécharge toutes les pièces nécessaires pour faire fonctionner le site.
4. Une fois terminé, tapez cette deuxième commande et appuyez sur "Entrée" : `npm run dev`
5. Un lien bleu du type `http://localhost:5173` va apparaître dans le terminal. Maintenez la touche **Ctrl** (ou **Cmd** sur Mac) de votre clavier et cliquez sur ce lien.

Félicitations ! Votre navigateur s'ouvre et affiche votre portfolio. Il se mettra à jour tout seul à chaque fois que vous modifierez un fichier.

---

## Étape 3 : Personnaliser votre portfolio (Remplir les blancs)

Dans les fichiers sur la gauche de VS Code, j'ai laissé des commentaires avec écrit `// REMPLIR ICI`. Voici les 4 endroits principaux à modifier :

### 1. Le nom du site
Ouvrez le fichier nommé `package.json`. Modifiez la ligne `"name"` pour y mettre votre nom (sans espaces). Modifiez la ligne `"homepage"` avec l'adresse finale de votre site (exemple : `https://votre-pseudo.github.io`).

### 2. Vos informations d'accueil
Ouvrez le dossier `src`, puis `components`, puis `HeroBanner`, et cliquez sur `index.jsx`. Descendez un peu et remplacez les textes entre crochets comme `[VOTRE NOM]` et `[VOTRE DOMAINE]`.

### 3. Les couleurs du site
Ouvrez le dossier `src`, puis `styles`, et cliquez sur `variables.module.scss`. C'est ici que vous pouvez changer la palette de couleurs. Modifiez les codes comme `#0055ff` par la couleur de votre choix (vous pouvez chercher "Color picker" sur Google pour trouver des codes couleurs).

### 4. Ajouter vos propres projets
Allez dans le dossier `public`, puis `projects`. Vous y trouverez un dossier nommé `PROJET_EXEMPLE`.
Pour créer un nouveau projet, faites un clic droit sur ce dossier et copiez-collez-le pour le dupliquer. Renommez-le avec le nom de votre nouveau projet (sans espaces). Ouvrez le fichier `index.md` à l'intérieur pour modifier le texte de présentation et changez l'image `cover.png` par la vôtre.

---

## Étape 4 : Publier le site sur internet (GitHub)

C'est la dernière ligne droite ! Le site est prêt sur votre ordinateur, il faut maintenant l'envoyer sur internet.

1. Connectez-vous sur **GitHub.com** et cliquez sur le petit **"+"** en haut à droite, puis sur **New repository** (Nouveau dépôt).
2. Nomnez-le avec le même nom que vous avez mis dans le fichier `package.json` à l'étape précédente. Laissez-le en "Public" et cliquez sur le bouton vert **Create repository**.
3. Retournez dans votre logiciel VS Code. Dans le terminal (en bas), arrêtez le site en appuyant sur **Ctrl + C**.
4. Tapez les commandes suivantes une par une, en appuyant sur Entrée à chaque fois :
   * `git init`
   * `git add .`
   * `git commit -m "Mon premier portfolio"`
5. Sur la page GitHub que vous venez de créer, copiez la ligne qui commence par `git remote add origin...` et collez-la dans votre terminal VS Code, puis faites Entrée.
6. Tapez ensuite : `git push -u origin main` (ou origin master). Cela envoie vos fichiers sur GitHub !
7. Tapez la commande magique finale : `npm run deploy`

### Activer l'affichage
Allez sur la page de votre projet sur GitHub. Cliquez sur l'onglet **Settings** (Paramètres), puis sur **Pages** (dans le menu à gauche). Sous "Source", vérifiez que "Deploy from a branch" est sélectionné, et choisissez la branche `gh-pages`.

Patientez environ 5 minutes. Votre portfolio est maintenant en ligne et accessible par le monde entier ! 🚀

---
*Astuce scientifique : Si vous avez besoin d'écrire des formules mathématiques dans vos projets, vous pouvez utiliser la syntaxe KaTeX (exemple : $E = mc^2$).*