---
title: "Étude Vibroacoustique : Couplages Fluide-Structure sur Cavités et Conduits"
date: "2024-11-15"
cover: "/projects/Vibroacoustique/cover.png"
tags: ["Vibroacoustique", "Expérimentation", "Matlab", "Traitement du signal"]
---

## Contexte du Projet : Interaction Fluide-Structure 🎸

Ce projet a été réalisé dans le cadre des Travaux Pratiques de 5ème année (Option Vibrations). L'objectif était d'analyser les phénomènes de **couplage vibroacoustique** en basses fréquences, c'est-à-dire l'interaction entre les vibrations d'une structure et le champ acoustique qu'elle contient.

L'étude s'est divisée en deux volets distincts :
1.  **Vibroacoustique des cavités** : Analyse d'un résonateur de Helmholtz à parois élastiques (cas d'une guitare et d'un caisson test).
2.  **Vibroacoustique des conduits** : Étude des vibrations d'un tube en U induites par un champ acoustique interne (problématique industrielle type raffinerie).

---

## Méthodologie et Configurations Étudiées 🧪

Pour caractériser ces systèmes, nous avons mis en œuvre une chaîne de mesure complète : excitation (marteau de choc, source sonore), acquisition (accéléromètres, microphones, sonde intensimétrique) et post-traitement sur **Matlab**.

### 1. La Guitare (Résonateur de Helmholtz)
Nous avons cherché à distinguer les **modes de structure** (vibration de la table d'harmonie) des **modes de cavité** (résonance de l'air). Pour ce faire, nous avons comparé 4 configurations expérimentales :
* **Normale** : Configuration standard de l'instrument.
* **Évent bouché** : Pour supprimer le mode de Helmholtz.
* **Masse additionnelle** : Ajout de pâte (200g) sur la table pour décaler les modes de structure.
* **Évent avec col** : Modification de la géométrie de l'évent pour décaler la fréquence de Helmholtz.

![Comparaison des FRF selon les configurations](/projects/Vibroacoustique/comparaison_frf.png)

### 2. Le Tube en U
L'objectif était de comprendre comment une pression acoustique interne peut générer des vibrations mécaniques importantes sur une tuyauterie industrielle. Nous avons étudié un **mode de balancement** du tube excité par une onde plane acoustique.

---

## Résultats et Analyse Physique 📊

### Identification des Modes de la Guitare
L'analyse des Fonctions de Réponse en Fréquence (FRF) et des modélisations analytiques a permis d'identifier clairement les couplages :

* **Mode Acoustique (~100 Hz)** : Dominé par la résonance de Helmholtz. Il disparaît lorsque l'évent est bouché et se décale avec l'ajout d'un col.
* **Mode Structural (~180 Hz)** : Lié à la flexion de la plaque supérieure. Il est très sensible à l'ajout de masse (sa fréquence chute) mais peu sensible aux modifications de l'évent.

Le modèle numérique développé a permis de recaler les paramètres physiques (masse équivalente, raideur) sur les mesures expérimentales avec une bonne précision.

### Instabilité du Tube en U
Pour la conduite, nous avons mis en évidence un mode de balancement à **38.5 Hz**.
L'analyse théorique et expérimentale a montré que les vibrations sont maximales lorsque la fréquence acoustique génère un **nœud de pression** situé à mi-distance des coudes, créant des forces de pression opposées qui excitent la structure.

![Déformée modale du tube en U](/projects/Vibroacoustique/deformee_tube.png)

---

## Conclusion et Compétences Développées 🛠️

Ce TP a permis de valider expérimentalement les théories de couplage vibroacoustique. Il a mis en lumière l'importance de l'accordage des fréquences (ou du désaccordage) dans la conception d'instruments de musique ou la sécurisation d'installations industrielles.

Compétences techniques acquises :
* **Instrumentation** : Calibration de capteurs (accéléromètres, microphones, sonde intensimétrique).
* **Analyse Modale** : Identification de modes couplés et découplage par modification physique du système.
* **Modélisation** : Implémentation de modèles analytiques sous **Matlab** et recalage modèle/expérience.
* **Physique** : Compréhension fine des résonateurs de Helmholtz et des ondes planes dans les conduits.

---

## 📁 À propos du projet

* **Auteurs** : Nathan Prunotto, Thomas Dufresne, Léo Boumaraf
* **Période** : Automne 2024
* **Établissement** : ENSIM / Le Mans Université