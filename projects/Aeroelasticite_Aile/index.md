---
title: "Aéroélasticité : Étude Statique et Dynamique d'une Aile d'Avion"
date: "2024-04-15"
cover: "/projects/Aeroelasticite_Aile/cover_avion.png"
tags: ["Éléments Finis", "Aéroélasticité", "COMSOL", "Mécanique des Structures", "Fluides"]
---

## Contexte du Projet : Entre Portance et Flexion ✈️

Ce projet, réalisé dans le cadre du module "Éléments Finis", porte sur l'étude du comportement mécanique d'une aile d'avion soumise à des sollicitations aérodynamiques. L'objectif était de simuler, via le logiciel **COMSOL Multiphysics**, les interactions entre la structure de l'aile (alliage d'aluminium) et les forces de pression induites par l'écoulement de l'air.

L'étude s'est articulée autour de trois axes principaux :
1.  **Étude Statique** : Analyse des contraintes et déformations sous charge constante (vol stationnaire).
2.  **Étude Dynamique** : Identification des modes propres de vibration de l'aile.
3.  **Analyse Paramétrique (CFD)** : Étude de l'influence de l'angle d'attaque ($\alpha$) sur les champs de pression et de vitesse.

---

## Méthodologie et Modélisation Numérique 🛠️

Pour garantir la fiabilité des résultats, une attention particulière a été portée à la qualité du maillage et à la définition des conditions aux limites.

### 1. Configuration du Modèle
* [cite_start]**Matériau** : Alliage d'aluminium ($E = 76\text{ GPa}$, $\nu = 0.33$, $\rho = 2780\text{ kg/m}^3$)[cite: 10, 17].
* [cite_start]**Conditions limites** : Encastrement parfait de l'aile au niveau du fuselage[cite: 20, 24].

![conditions limites](/projects/Aeroelasticite_Aile/condition_limite.png)

* [cite_start]**Chargement** : Application d'une force de portance compensant le poids de l'avion ($F = \frac{m_{tow} \cdot g}{2}$) appliquée sur l'intrados[cite: 30, 40].

![conditions limites](/projects/Aeroelasticite_Aile/intrados.png)

### 2. Convergence du Maillage
Afin de valider les simulations, nous avons comparé plusieurs finesses de maillage (extra fin vs extrêmement fin). [cite_start]La convergence des résultats (contraintes de Von Mises et déplacements) a permis de confirmer la robustesse du modèle[cite: 54, 76].

---

## Résultats et Analyse Physique 📊

### Analyse Statique : Résistance de la Structure
[cite_start]Les simulations ont montré que la contrainte maximale subie par l'aile ($16,9\text{ MPa}$) reste très largement inférieure à la limite d'élasticité de l'aluminium ($300\text{ MPa}$)[cite: 74]. 
* [cite_start]**Déformation** : La flèche maximale en bout d'aile est de $8,35\text{ cm}$, ce qui reste négligeable face aux $15\text{ m}$ de longueur de l'aile[cite: 105].

![conditions limites](/projects/Aeroelasticite_Aile/deformation.png)

* [cite_start]**Observation** : L'extrados travaille en compression tandis que l'intrados subit une traction[cite: 97, 104].

### Analyse Dynamique : Modes de Vibration
L'étude fréquentielle a permis d'extraire les 10 premiers modes propres. [cite_start]On observe une excellente corrélation entre les différents maillages[cite: 317, 357]:
* [cite_start]**Mode 1 (~3.17 Hz)** : Premier mode de flexion sur l'axe vertical[cite: 317].
* [cite_start]**Mode 5 (~30.4 Hz)** : Premier mode de torsion, critique pour la stabilité aéroélastique car il modifie l'angle d'attaque en temps réel[cite: 216, 361].

![conditions limites](/projects/Aeroelasticite_Aile/mode_1_5.png)

### Simulation Fluide (CFD) et Angle d'Attaque
[cite_start]Une étude paramétrique en 2D sur un profil **NACA 4422** a mis en évidence l'évolution de la portance[cite: 376, 518]:
* [cite_start]Plus l'angle d'attaque $\alpha$ augmente, plus la zone de surpression à l'intrados s'élargit, augmentant ainsi la portance[cite: 917, 918].

![conditions limites](/projects/Aeroelasticite_Aile/vitesse_pression.png)

* [cite_start]**Phénomène de Phugoïde** : Les oscillations couplées entre flexion et variations de vitesse ont été identifiées comme un point de vigilance pour le pilotage[cite: 363].

---

## Conclusion et Compétences Développées 🏁

Ce projet a permis de comprendre comment une structure aéronautique réagit dynamiquement à son environnement fluide. Il souligne l'importance du couplage aéroélastique dans la conception pour éviter des phénomènes d'instabilité.

Compétences techniques acquises :
* [cite_start]**Simulation MEF & CFD** : Maîtrise de COMSOL pour des études de couplage structure/fluide[cite: 6, 367].
* [cite_start]**Analyse de Convergence** : Validation de modèles numériques par double maillage[cite: 54].
* [cite_start]**Aérodynamique** : Compréhension des profils NACA et de l'influence de l'angle d'attaque sur la portance[cite: 376, 919].
* [cite_start]**Analyse Modale** : Identification de modes de flexion et de torsion sur une structure complexe[cite: 359].

---

## 📁 À propos du projet

* [cite_start]**Auteur** : Nathan PRUNOTTO [cite: 1]
* **Logiciels** : COMSOL Multiphysics
* [cite_start]**Établissement** : ENSIM (4A VA) [cite: 7]