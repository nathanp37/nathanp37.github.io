---
title: "Analyse Modale Expérimentale de Structures Mécaniques"
date: "2024-12-20" 
cover: "/projects/Analyse_Modale/accueil.png" 
tags: ["Vibrations", "Analyse Modale", "FRF", "LMS Testlab", "MODAN/OROS"]
---

## Contexte du Projet : Caractérisation Dynamique en Basses Fréquences 🔔

Ce projet a été réalisé dans le cadre de travaux pratiques de 5ème année (Option Vibrations). L'objectif principal était de réaliser l'**analyse modale expérimentale** de différentes structures mécaniques pour déterminer leur **base modale**. La base modale (fréquences propres, amortissements et déformées modales) est essentielle pour la prédiction du comportement dynamique des systèmes en basses fréquences.

Nous avons mis en œuvre deux techniques de mesure principales :
1.  **Test modal par marteau d'impact** : Analyse d'une cloche, d'un panneau sandwich et d'une poutre revêtue.
2.  **Test modal par pot vibrant** : Analyse d'une table d'harmonie de piano et d'une raquette de tennis.

---

## Méthodologie : Des FRF aux Modes Propres 🛠️

L'analyse modale utilise les **Fonctions de Réponse en Fréquence (FRF)**, spécifiquement les fonctions de transfert accélération / force. Ces fonctions de réponse sont définies par $H_{ij}=\frac{a_{i}}{F_{j}}$. La détermination des modes repose sur la mesure de ces FRF sur un maillage de points (DDL) de la structure.

### 1. Systèmes de Mesure Employés

L'architecture générale du système de mesure typique est donnée sur la figure ci-dessous.

![Chaîne de mesure pour l'analyse modale](/projects/Analyse_Modale/schema_experimental.png)

Deux stratégies d'excitation sont possibles pour collecter les FRF :

* **Marteau d'Impact** : Accéléromètres fixes, excitation en différents points du maillage.
* **Pot Vibrant** : Source d'excitation fixe, déplacement de plusieurs accéléromètres.

### 2. Procédure d'Acquisition

Une attention particulière a été portée à la qualité des mesures :
* **Vérification de l'impact** : S'assurer de l'absence de **double impact** du marteau, qui fausserait la mesure.
* **Cohérence** : La cohérence indique le lien linéaire entre excitation et réponse dans le domaine fréquentiel. Une mesure correcte donne une cohérence élevée, proche de **100%**.
* **Extraction** : Les paramètres modaux (fréquences propres, amortissements) ont été extraits des FRF via la méthode LSCE (Least Squares Complex Exponential), ici appelée Time Domain MDOF.

---

## Résultats Détaillés des Analyses 📊

### 1. Analyse de la Cloche (Marteau d'Impact)

L'analyse modale complexe a révélé l'existence de **modes doubles**, typiques des structures quasi-symétriques. Ces modes sont très proches en fréquence (ex. : 786 Hz et 792 Hz).

* **Mode 1** : Déformée modale à **786 Hz**.
* **Mode 2** : Déformée modale à **792 Hz**.

Nous avons observé une **alternance d'énergie** entre la partie supérieure (plus petite) et la partie inférieure (plus grosse) de la cloche en fonction du mode double.

![Déformée modale à 786 Hz](/projects/Analyse_Modale/mode_double.png)

### 2. Analyse d'un Panneau (Marteau d'Impact)

L'analyse a été réalisée en fixant l'accéléromètre au dos et en tapant à chaque point du maillage. La FRF mesurée a montré clairement trois modes vibratoires principaux :
* Mode 1 : **182.152 Hz** (Amortissement 4.18%)
* Mode 2 : **331.642 Hz** (Amortissement 0.58%)
* Mode 3 : **468.888 Hz** (Amortissement 1.83%)

![Déformée modale à 786 Hz](/projects/Analyse_Modale/panneau.png)

### 3. Analyse d'une Poutre Revêtue (Méthode Oberst)

La **méthode Oberst** est utilisée pour mesurer les propriétés mécaniques de matériaux amortissants fixés sur une poutre. L'étude comparative, avec et sans scotch (revêtement), a montré :

![Déformée modale à 786 Hz](/projects/Analyse_Modale/oberst.png)

* **Impact du revêtement** : L'ajout d'un revêtement augmente le **facteur de perte**. Les fréquences sont plus basses lorsque le revêtement est présent. On en déduit que le revêtement contribue à l'**amortissement total** de la structure.
* **Propriétés matériaux** : Le module de Young est logiquement plus faible pour le scotch que pour la poutre. Le facteur de perte est lui plus grand pour le scotch.

### 4. Analyse de la Table d'Harmonie (Pot Vibrant)

L'excitation a été assurée par un pot vibrant, avec 10 accéléromètres déplacés sur la structure. L'extraction des modes a été réalisée avec le logiciel **MODAN/OROS**.

![Table d'harmonie de piano](/projects/Analyse_Modale/installation_experience_teble_harmonie_piano.png)

* **Résultats** : 14 modes ont été comptabilisés dans la plage 15-200 Hz.
* **Validation** : La fonction de transfert simulée (basée sur les modes identifiés) est proche de la FRF réelle entre 50 et 200 Hz, mais s'en éloigne en plus haute fréquence.

### 5. Analyse de la Raquette de Tennis (Pot Vibrant & Vibromètre Laser)

Cette analyse a utilisé une technique sans contact : excitation par pot vibrant (fixé sur le manche) et mesure de la réponse par **vibromètre laser** (déplacé sur le maillage).

![Déformée modale à 786 Hz](/projects/Analyse_Modale/raquette.png)

Deux types de modes ont été distingués :

* **Modes de cordage** : Mouvement uniquement du cordage.

![Déformée modale à 786 Hz](/projects/Analyse_Modale/mode_cordage.png)

* **Modes de cadre** : Mouvement du cadre qui entraîne les cordages.

![Déformée modale à 786 Hz](/projects/Analyse_Modale/mode_structure.png)

Pour la réduction des vibrations :
* Les **amortisseurs** en caoutchouc/silicone sont utilisés pour les modes de cordage.
* Le changement du matériau du cadre ou l'ajout d'inserts peut réduire les modes de cadre.

---

## 📁 À propos du projet
* **Auteurs** : Thomas Dufresne, Léo Boumaraf, Nathan Prunotto
* **Établissement** : ENSIM / Le Mans Université
* **Période** : Automne 2024