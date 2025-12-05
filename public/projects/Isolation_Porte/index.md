---
title: "Projet Acoustique : Optimisation de l'Isolation d'une Porte de Navire"
date: "2024-04-10"
cover: "/projects/Isolation_Porte/cover.png"
tags: ["Acoustique du Bâtiment", "Simulation", "Maine 3A", "Matériaux Poreux", "Isolation"]
---

## Contexte du Projet : Confort Acoustique Naval 🚢

Ce projet, réalisé en collaboration avec le **CTTM** (Centre de Transfert de Technologie du Mans), visait à améliorer l'isolation acoustique d'une porte de cabine pour navire de plaisance.

L'objectif était double :
1.  **Diagnostiquer** les faiblesses de la porte actuelle via des mesures normalisées et la simulation numérique.
2.  **Optimiser** le panneau de porte pour gagner en isolation sans ajouter de masse ni d'épaisseur (contraintes strictes de l'industrie navale).

---

## Méthodologie : Mesures et Modélisation 🖥️

La démarche s'est appuyée sur une approche hybride expérimental/numérique :

### 1. Mesures Expérimentales (ISO 15186-1)
Nous avons mesuré l'indice d'affaiblissement acoustique (R) par intensimétrie entre une salle réverbérante et une salle semi-anéchoïque.
* **Constat** : Un déficit d'isolation marqué (creux d'isolation) a été identifié autour de **250-300 Hz**, dû au comportement du panneau seul.

### 2. Modélisation sous Maine 3A
Pour comprendre l'origine de ce défaut, nous avons modélisé le panneau (sandwich Acier / Laine de roche / Acier) sur le logiciel **Maine 3A**.
Une phase de **recalage de modèle** a été nécessaire pour déterminer les paramètres inconnus de la laine de roche :
* **Module d'Young (E')** : 0.4 MPa
* **Facteur de perte (η)** : 0.12

![Comparaison Modèle vs Expérience](/projects/Isolation_Porte/recalage_modele.png)

---

## Optimisation : Le Découplage Mécanique 📉

L'analyse a montré que le défaut d'isolation provenait d'un **couplage mécanique fort** entre les parois d'acier à travers la laine de roche.

### La Solution
Pour briser ce pont phonique sans changer l'épaisseur totale (40mm), nous avons introduit une **lame d'air** au cœur du matériau absorbant.
* Configuration initiale : 40mm de laine de roche.
* Configuration optimisée : 26mm Laine + **4mm Air** + 10mm Laine.

![Schéma du panneau optimisé avec lame d'air](/projects/Isolation_Porte/schema_couches.png)

### Résultats
La simulation de cette nouvelle configuration a montré un gain significatif. Nous avons également étudié l'influence de la symétrie des couches. La configuration asymétrique (26mm/10mm) s'est révélée plus performante que la symétrique (18mm/18mm).

* **Gain obtenu** : Environ **+5 dB** sur la zone critique des basses fréquences.
* **Respect des contraintes** : Aucune masse ajoutée, épaisseur inchangée.

![Gain d'isolation acoustique après optimisation](/projects/Isolation_Porte/resultats_comparaison.png)

---

## Conclusion et Compétences Développées 🛠️

Ce projet a mis en évidence l'importance du **découplage mécanique** dans les systèmes double-paroi. Il a permis de valider une solution industrielle concrète applicable à l'aménagement intérieur des navires.

Compétences techniques acquises :
* **Métrologie Acoustique** : Mesure de perte par transmission (TL) et intensimétrie.
* **Simulation Numérique** : Modélisation de matériaux poro-élastiques (Biot) sous Maine 3A.
* **Caractérisation Matériaux** : Identification inverse de paramètres mécaniques (Module d'Young, facteur de perte).

---

## 📁 À propos du projet

* **Auteur** : Nathan Prunotto
* **Établissement** : ENSIM / Le Mans Université
* **Partenaire** : CTTM