---
title: "Caractérisation de Matériaux Poreux & Isolation Acoustique"
date: "2023-11-20"
cover: "/projects/Caracterisation_Acoustique/cover.webp"
tags: ["Acoustique", "Matériaux Poreux", "Isolation", "Maine 3A", "Expérimentation"]
---

## Contexte du Projet : Caractérisation et Transparence 🔊

Ce projet académique, réalisé à l'ENSIM, a pour objectif d'effectuer des essais de caractérisation de matériaux absorbants et de mesurer la transparence de parois acoustiques. L'étude s'est divisée en deux approches expérimentales complémentaires :

1.  **Caractérisation intrinsèque** : Utilisation d'un tube de Kundt et d'un capteur d'impédance pour déterminer les paramètres microscopiques du matériau (porosité, tortuosité, absorption).
2.  **Transparence de paroi** : Mesure de l'indice d'affaiblissement (TL) en champ diffus dans une cabine Alpha.

Les résultats expérimentaux ont été confrontés aux modèles théoriques (Biot) et aux simulations numériques réalisées sur le logiciel **Maine 3A**.

---

## Méthodologie et Outils 🛠️

Nous avons mis en œuvre une chaîne de mesure complète pour analyser les propriétés des matériaux et des parois.

* **Matériel de mesure** : Tube de Kundt, Capteur d'impédance (CTTM), Cabine Alpha (champ diffus), Sonde intensimétrique.
* **Logiciels** : LabVIEW (acquisition), Maine 3A (simulation multicouche).
* **Modèles Analytiques** : Modèle de Biot, Loi de masse, Effet Masse-Ressort-Masse.

---

## Partie 1 : Caractérisation de Matériaux Absorbants 🔬

L'objectif était de déterminer le coefficient d'absorption et les paramètres intrinsèques de deux matériaux : la **Mélamine** et la **Laine de Roche**.

### 1.1 Tube de Kundt (Ondes Planes)
Le tube de Kundt permet de mesurer l'absorption sous incidence normale en générant des ondes planes dans un tube cylindrique. Nous avons utilisé la méthode à deux microphones pour séparer l'onde incidente de l'onde réfléchie.

**Configurations :** Deux diamètres ont été utilisés pour couvrir une large bande passante :
* **100 mm** : Pour les basses fréquences (185 Hz - 1991 Hz).
* **29 mm** : Pour les hautes fréquences (154 Hz - 6867 Hz).

**Résultats :**
* **Mélamine** : On observe une chute d'absorption caractéristique vers 1300 Hz due à une résonance de squelette (effet Biot).
* **Laine de Roche** : Elle présente une meilleure performance en haute fréquence, avec un coefficient d'absorption tendant vers 1.

### 1.2 Capteur à Impédance (Paramètres Intrinsèques)
Contrairement au tube de Kundt, le capteur à impédance permet de remonter aux paramètres physiques du modèle de fluide équivalent, incluant la dissipation thermique et visqueuse :
* **$\sigma$** : Résistivité au passage de l'air.
* **$\phi$** : Porosité.
* **$\alpha_{\infty}$** : Tortuosité.
* **$\Lambda, \Lambda'$** : Longueurs caractéristiques visqueuse et thermique.

---

## Partie 2 : Transparence de Paroi en Champ Diffus 🏗️

Cette partie se concentre sur la mesure de l'indice d'affaiblissement (TL) de parois dans une **Cabine Alpha** (enceinte réverbérante générant un champ diffus).

### 2.1 Protocole de Mesure
* **Principe** : Une source omnidirectionnelle génère un bruit blanc dans la cabine. L'intensité transmise à travers la paroi testée est mesurée de l'autre côté.
* **Mesure** : Utilisation d'une sonde intensimétrique avec un balayage manuel en forme de "S" pour moyenner le champ acoustique.
* **Calcul** : $TL = 10 \log(I_{incidente} / I_{transmise})$.

![Schéma du balayage à la sonde intensimétrique](/projects/Caracterisation_Acoustique/schema_balayage.png)

### 2.2 Résultats et Comparaison (Expérience vs Maine 3A)
Nous avons comparé nos mesures expérimentales avec des simulations numériques sur le logiciel **Maine 3A**. La comparaison montre une bonne corrélation, validant le modèle de prédiction pour des parois multicouches avec lame d'air.

![Comparaison Simulation vs Expérience](/projects/Caracterisation_Acoustique/comparaison_resultats.png)

---

## Conclusion 🏁

Ce TP a permis de valider l'importance des méthodes de caractérisation vibro-acoustique. Nous avons mis en évidence que l'optimisation de l'isolation phonique ne repose pas uniquement sur la masse, mais aussi sur l'utilisation de systèmes multicouches avec lames d'air pour bénéficier d'effets de découplage mécanique.

---

## 📁 À propos du projet

* **Auteurs** : Quentin GREGOIRE, Mikal FESSY, Arthur MALADIERE, Nathan PRUNOTTO
* **Établissement** : ENSIM / Le Mans Université
* **Matière** : Acoustique & Instrumentation