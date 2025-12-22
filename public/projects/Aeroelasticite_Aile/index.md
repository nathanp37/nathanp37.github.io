---
title: "Aéroélasticité : Étude Statique et Dynamique d'une Aile d'Avion"
date: "2024-04-15"
cover: "/projects/Aeroelasticite_Aile/cover_avion.png"
tags: ["Éléments Finis", "Aéroélasticité", "COMSOL", "Mécanique des Structures", "Fluides"]
---

## Contexte du Projet : Entre Portance et Flexion ✈️

Ce projet, réalisé dans le cadre du module "Éléments Finis", porte sur l'étude du comportement mécanique d'une aile d'avion soumise à des sollicitations aérodynamiques. L'objectif était de simuler, via le logiciel **COMSOL Multiphysics**, les interactions entre la structure de l'aile (alliage d'aluminium) et les forces de pression induites par l'écoulement de l'air.

L'étude s'est articulée autour de trois axes principaux :
1.  **Étude Statique** : Analyse des contraintes et de la déformation sous charge constante.
2.  **Étude Dynamique** : Identification des modes propres de vibration de l'aile.
3.  **Analyse Paramétrique (CFD)** : Étude de l'influence de l'angle d'attaque $\alpha$ sur les champs de pression et de vitesse.

---

## Méthodologie et Modélisation Numérique 🛠️

Pour garantir la fiabilité des résultats, une attention particulière a été portée à la qualité du maillage et à la définition des conditions aux limites.

### 1. Configuration du Modèle
* **Matériau** : Alliage d'aluminium ($E = 76$ GPa, $\nu = 0.33$, $\rho = 2780$ kg/m³).
* **Conditions limites** : Encastrement parfait de l'aile au niveau du fuselage.

![conditions limites](/projects/Aeroelasticite_Aile/condition_limite.png)

* **Chargement** : Application d'une force de portance compensant le poids de l'avion :
$$F = \frac{m_{tow} \cdot g}{2}$$
appliquée sur l'intrados.

![conditions limites](/projects/Aeroelasticite_Aile/intrados.png)

### 2. Convergence du Maillage
Afin de valider les simulations, nous avons comparé plusieurs finesses de maillage. La convergence des résultats (contraintes de Von Mises et déplacements) a permis de confirmer la robustesse du modèle numérique.

---

## Résultats et Analyse Physique 📊

### Analyse Statique : Résistance de la Structure
Les simulations ont montré que la contrainte maximale subie par l'aile ($16,9$ MPa) reste très largement inférieure à la limite d'élasticité de l'aluminium ($300$ MPa). 
* **Déformation** : La flèche maximale en bout d'aile est de $8,35$ cm, ce qui reste négligeable face aux $15$ m de longueur de l'aile.

![conditions limites](/projects/Aeroelasticite_Aile/deformation.png)

* **Observation** : L'extrados travaille en compression tandis que l'intrados subit une traction.

### Analyse Dynamique : Modes de Vibration
L'étude fréquentielle a permis d'extraire les 10 premiers modes propres :
* **Mode 1 (~$3,17$ Hz)** : Premier mode de flexion sur l'axe vertical.
* **Mode 5 (~$30,4$ Hz)** : Premier mode de torsion, critique pour la stabilité aéroélastique car il modifie l'angle d'attaque $\alpha$ en temps réel.

![conditions limites](/projects/Aeroelasticite_Aile/mode_1_5.png)

### Simulation Fluide (CFD) et Angle d'Attaque
Une étude paramétrique en 2D sur un profil **NACA 4422** a mis en évidence l'évolution de la portance :
* Plus l'angle d'attaque $\alpha$ augmente, plus la zone de surpression à l'intrados s'élargit, augmentant ainsi la portance.

![conditions limites](/projects/Aeroelasticite_Aile/vitesse_pression.png)

* **Phénomène de Phugoïde** : Les oscillations couplées entre flexion et variations de vitesse ont été identifiées comme un point de vigilance pour le pilotage.

---

## Conclusion et Compétences Développées 🏁

Ce projet a permis de comprendre comment une structure aéronautique réagit dynamiquement à son environnement fluide. Il souligne l'importance du couplage aéroélastique dans la conception pour éviter des phénomènes d'instabilité.

Compétences techniques acquises :
* **Simulation MEF & CFD** : Maîtrise de COMSOL pour des études de couplage structure/fluide.
* **Analyse de Convergence** : Validation de modèles numériques par double maillage.
* **Aérodynamique** : Compréhension des profils NACA et de l'influence de l'angle $\alpha$ sur la portance.
* **Analyse Modale** : Identification de modes de flexion et de torsion.

---

## 📁 À propos du projet

* **Auteur** : Nathan PRUNOTTO
* **Logiciels** : COMSOL Multiphysics
* **Établissement** : ENSIM (4A VA)