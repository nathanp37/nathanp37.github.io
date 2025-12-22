---
title: "Étude des Vitesses Critiques d'un Arbre en Rotation"
date: "2024-05-20"
cover: "/projects/Vitesse_Critique/cover.png"
tags: ["Vibrations", "RDM", "Analyse d'Ordre", "OROS", "Mécanique"]
---

## Contexte et Objectifs 🎯

L'objectif de ce travail est de mettre en évidence les premières vitesses critiques de flexion d'un arbre rotatif. Ces vitesses correspondent aux fréquences propres de flexion de la structure, entraînant une mise en vibration forcée lors de la rotation. L'étude compare les résultats expérimentaux obtenus via une chaîne de mesure spécialisée aux prédictions théoriques issues de la résistance des matériaux.

---

## Dispositif Expérimental et Instrumentation 🛠️

Le banc d'essai permet de tester différentes configurations de masses (volants d'inertie) positionnées le long d'un arbre en acier.

### Architecture de Mesure
* **Capteurs de proximité** : Quatre capteurs sont utilisés pour mesurer les déplacements selon les axes **x** et **y** de chaque côté de l'arbre.
* **Acquisition** : Les signaux sont collectés via un module **OROS OR35** relié à un ordinateur pour l'analyse spectrale.
* **Contrôle de vitesse** : Deux capteurs tachymétriques permettent d'asservir le moteur et de fournir la vitesse de rotation précise au système.



![Schéma expérimental](/projects/Vitesse_Critique/schema_dispositif.png)
*Figure 1 : Schéma du dispositif incluant le moteur, les volants d'inertie et la chaîne d'acquisition OROS[cite: 13, 88].*

---

## Modélisation Théorique 📐

[cite_start]Pour déterminer les vitesses critiques, nous modélisons la raideur de l'arbre en fonction de la position **x** des volants d'inertie[cite: 30, 90].

### Paramètres de l'arbre
* **Matériau** : Acier avec un module de Young **E = 210 GPa**.
* **Dimensions** : Diamètre **D = 10 mm** à **10,4 mm** et longueur **L** comprise entre **44,4 cm** et **46,2 cm**.

### Équations de Raideur et Fréquence
La raideur $k(x)$ est déduite de la flèche de la poutre:
$$k(x) = \frac{3\pi ED^4}{4L^3} \left( \frac{1}{3\frac{x}{L} - \frac{4x^3}{L^3}} \right)$$

La vitesse critique théorique (en rad/s) est ensuite calculée par la relation:
$$\omega_0 = \sqrt{\frac{k}{m}}$$

---

## Analyse des Résultats et Comparaisons 📊

L'étude s'est concentrée sur deux configurations principales pour identifier les modes de flexion.

### 1. Volants au milieu de la tige ($x = L/2$)
Cette configuration simule un système à un seul degré de liberté.
* **Vitesse théorique** : Entre **1794 RPM** et **1823 RPM**.
* **Vitesse expérimentale** : Identifiée entre **1627 RPM** et **1707 RPM** par l'analyse des pics d'énergie.
* **Écart relatif** : Les erreurs constatées varient de **4,85%** à **10,75%**.



![Analyse d'ordre](/projects/Vitesse_Critique/spectrogramme.png)
*Figure 2 : Spectrogramme montrant la zone de résonance rouge à la vitesse critique.*

### 2. Volants au quart et aux trois-quarts ($L/4$ et $3L/4$)
Ici, le système présente deux degrés de liberté.
* **Première vitesse critique** : Mesurée entre **1969 RPM** et **2021 RPM**.
* **Comparaison** : La valeur théorique est calculée à environ **2164 RPM** à **2170 RPM**.
* **Note** : La seconde vitesse critique théorique (**~5300 RPM**) n'a pas été testée pour garantir la sécurité du matériel.

---

## Conclusion et Compétences 🏁

Les écarts entre théorie et expérience sont jugés raisonnables et s'expliquent principalement par des imprécisions de positionnement manuel des volants sur l'arbre. Cette étude souligne l'importance de surveiller les vitesses critiques pour assurer la sécurité et la longévité des systèmes mécaniques rotatifs.

**Compétences acquises :**
* Utilisation d'une chaîne d'acquisition vibratoire professionnelle (**OROS**).
* Interprétation de graphiques d'analyse d'ordre et de spectrogrammes.
* Validation de modèles de mécanique des structures par l'expérimentation.

---

## 📁 Informations Projet

* **Auteurs** : Nathan PRUNOTTO & Lucas BODIN
* **Encadrement** : O. Aklouche, M. Cesbron, M. Vicente 
* **Établissement** : ENSIM (4A VA) 