---
title: "Stage de fin d'étude : Suivi d'essais mécaniques par Emission Acoustique"
date: "2025-08-22"
cover: "/projects/StageCEA/cea_logo.PNG"
tags: ["Emission Acoustique", "Matériaux", "CMC", "Python", "Traitement du signal", "Classification non supervisée"]
---

## Contexte du Stage : Étude de Composites à Matrice Céramique (CMC)

Ce stage de fin d'études a été réalisé au **Commissariat à l'énergie atomique et aux énergies alternatives (CEA)**, au centre du Ripault, spécialisé dans la conception de matériaux pour la Direction des applications militaires (DAM).

L'objectif principal était d'étudier le comportement mécanique d'une éprouvette technologique en **Composite à Matrice Céramique (CMC) oxyde/oxyde**. Ces matériaux sont essentiels pour les industries de l'aéronautique et de la défense en raison de leur légèreté et de leur excellente résistance aux températures extrêmes et à l'oxydation.

Le défi consistait à suivre l'apparition et l'évolution des dommages internes (fissures, délaminage) en temps réel, une information difficilement accessible par les méthodes optiques.

## Méthodologie et Objectifs Atteints 🎯

La méthode utilisée pour ce suivi est l'**Émission Acoustique (EA)**. L’**EA** est une méthode non destructive qui permet de suivre en temps réel l’évolution de l’endommagement d’un matériau sous sollicitation (mécanique, thermique ou physico-chimique). 
Cette technique consiste à détecter, par des capteurs placés en surface de la structure, des ondes acoustiques émises par un défaut nouveau.

La mise en œuvre a combiné une instrumentation spécifique (5 capteurs Micro80) et le post-traitement des données avec des scripts **Python** et des algorithmes de classification.

## Objet d'étude et Dispositif Expérimental

L'étude porte sur une **éprouvette technologique à cornière raidie**, une structure à échelle intermédiaire située entre l'éprouvette élémentaire et la pièce réelle. Elle est constituée d'un matériau composite stratifié (CMC Ox/Ox) composé d'un empilement de plis quasi-isotropes.

Sa géométrie particulière permet d'isoler et d'observer le comportement mécanique dans trois zones critiques :
1.  **Le raidisseur**.
2.  **La cornière**.
3.  **La liaison raidisseur-cornière**.

![Essai de fermeture localisé](/projects/StageCEA/schema_eprouvette.png)

### Déroulement des essais mécaniques

Les essais ont été réalisés sur une machine électromécanique **Zwick** équipée d'une cellule de charge de **2,5 kN**. Un outillage spécifique conçu en interne a permis d'appliquer deux types de sollicitations :

* **Essais d'ouverture :** Le mors supérieur se déplace vers le haut. Dans cette configuration, le raidisseur subit un mode de sollicitation comparable à de la traction hors-plan.
* **Essais de fermeture :** Le mors supérieur se déplace vers le bas. Cette sollicitation favorise la propagation de fissures principalement dans la liaison raidisseur-cornière.

### 1. Localisation des Endommagements

J'ai développé une méthodologie de localisation des sources d'EA pour identifier les zones critiques d'endommagement sur l'éprouvette à cornière raidie à l'aide de 5 capteurs EA situés sur l'éprouvette.

* **En essai d'ouverture :** Les premières sources acoustiques sont apparues dans le **raidisseur**.
![Essai d'ouverture localisé](/projects/StageCEA/ouverture_essai.JPG)
* **En essai de fermeture :** Les dommages étaient principalement localisés dans la **liaison raidisseur-cornière**.
![Essai de fermeture localisé](/projects/StageCEA/fermeture_essai.JPG)

Ces localisations étaient **cohérentes avec la Corrélation d'Images Numériques (CIN)** et ont démontré que l'EA permet de détecter les fissures **avant** qu'elles ne soient visibles par CIN.

### 2. Classification des Mécanismes d'endommagements

J'ai mis en place une **classification non supervisée** par algorithmes génétiques et k-moyennes pour distinguer les signatures acoustiques des différents mécanismes d'endommagement, notamment le délaminage.



1.  **Classe 1 : Fissuration matricielle** (signal court, temps de montée court).
2.  **Classe 2 : Décohésion fibre-matrice** (signal court, temps de montée plus long).
3.  **Classe 3 : Délaminage sur plis endommagés** (signal long, temps de montée court).
4.  **Classe 4 : Délaminage sur plis peu endommagés** (signal long, energie importante).


**Représentation temps-fréquence de signaux caractéristiques des classes obtenues**
![Essai de fermeture localisé](/projects/StageCEA/Classe.PNG)

## Conclusion et Compétences Développées 🛠️

Ce stage a confirmé l'intérêt de l'EA comme outil complémentaire et essentiel pour la caractérisation des matériaux composites.

Ce projet m'a permis de développer une expertise dans :
-   **Méthodologie expérimentale** : Instrumentation d'essais mécaniques et protocole d'acquisition de données (détermination du seuil, ajustement des paramètres temporels).
-   **Traitement du signal** : Analyse, filtrage, et classification (ACP, k-moyennes, dendrogramme) de données d'EA.
-   **Programmation scientifique** : Utilisation de **Python** pour la post-analyse et la visualisation de la localisation des sources acoustiques.
-   **Connaissances en matériaux** : Compréhension du scénario d'endommagement des CMC oxyde/oxyde.

## 📁 À propos du projet
- **Auteurs** : Nathan Prunotto
- **Encadrants** : Chalotte Piquet & Samuel Daguet & Alexandre Portal
- **Rapporteur** : Mourad Bentahar
- **Établissement** : ENSIM / Le Mans Université
- **Entreprise** : CEA / Le Ripault