---
title: "Projet de 5ème Année : Analyse Vibratoire d'un Ruban de Möbius, Modélisation et Expérimentation"
date: "2025-02-03"
cover: "/projects/Projet5A_Mobius/mode_1_mobius.gif"
tags: ["Vibrations", "Modélisation", "Expérimentation", "ANSYS", "MATLAB", "COMSOL"]
---

## Contexte du Projet : Comprendre l'Impact de la Topologie 🔄

Ce projet de fin d'année a été réalisé dans le cadre de ma 5ème année d'études. L'objectif principal était d'étudier l'**analyse vibratoire de structures à géométrie non conventionnelle**, en particulier le **ruban de Möbius**.

<figure style="text-align: center;">
  <img src="/projects/Projet5A_Mobius/image_8.png" alt="mobuis" style="width: 80%;">
</figure>

Le ruban de Möbius, caractérisé par son unique **vrille** et sa surface unique, présente un comportement dynamique (vibratoire) fondamentalement différent des structures planes classiques (poutres, anneaux). Le défi consistait à **comprendre l'impact de cette vrille** sur les fréquences propres et les modes de vibration de la structure.

Le travail a combiné l'**analyse expérimentale** (tests modaux) et la **modélisation numérique** (éléments finis) pour valider et expliquer les phénomènes observés.

---

## Méthodologie et Objectifs Atteints 🎯

La méthodologie s'est articulée autour de trois étapes principales pour assurer la cohérence entre le modèle physique et le modèle numérique.

### 1. Conception et Fabrication
Nous avons conçu les structures (poutre simple, poutre vrillée, anneau, ruban de Möbius) sous **SolidWorks** et les avons fabriquées par **impression 3D en résine** (Formlabs). Ce choix a permis de garantir l'**homogénéité** des propriétés mécaniques pour les tests.

![Montage expérimental de l'analyse vibratoire](/projects/Projet5A_Mobius/modele_3D.png)

### 2. Analyse Expérimentale (Identification Modale)

La phase expérimentale a permis d'obtenir les données vibratoires réelles.

* **Montage** : Les structures ont été suspendues en conditions **libre-libre** pour isoler leur dynamique intrinsèque.
* **Acquisition** : L'excitation a été réalisée à l'aide d'un **marteau instrumenté**, et les mesures ont été prises par accéléromètre.
* **Post-traitement** : L'extraction des **Fonctions de Réponse en Fréquence (FRF)** et des **modes propres** a été effectuée à l'aide de la méthode **PolyMAX** (logiciel Testlab).

![Montage expérimental de l'analyse vibratoire](/projects/Projet5A_Mobius/experimental.png)

### 3. Modélisation Numérique (COMSOL)

Un **modèle numérique par éléments finis** a été développé dans *COMSOL* (module *Mécanique des structures*).

* Des **études fréquentielles** ont été menées avec des conditions d'excitation et de mesure **identiques à l'expérience**.
* Le modèle a été **ajusté** en comparant les résultats expérimentaux et numériques, notamment en calibrant les paramètres matériaux (module de Young, amortissement).

---

## Résultats Clés et Impact de la Vrille 📊

Le projet a permis de quantifier et d'expliquer l'effet de la torsion sur la dynamique des structures.

### 1. Influence de la Vrille sur une Poutre

L'ajout d'une torsion a eu un impact non linéaire sur les fréquences de vibration :

* Le **premier mode** peut connaître une légère **augmentation**.
* Les **modes supérieurs** connaissent une **diminution** notable des fréquences propres.
* Nous avons établi une dépendance **quadratique** entre la fréquence et l'angle de torsion.

![Influence de l'angle de vrille sur les fréquences propres d'une poutre](/projects/Projet5A_Mobius/influencevrille.png)

### 2. Comportement du Ruban de Möbius

La comparaison entre un anneau classique et un ruban de Möbius a révélé une modification profonde des modes :

* Le ruban de Möbius montre une **baisse significative des modes supérieurs** par rapport à l'anneau.
* **Changement Topologique** : La topologie du Möbius modifie la **propagation de l'onde de flexion**, nécessitant deux tours complets de la structure pour retrouver la même polarisation de l'onde.

![Comparaison des FRF entre l'Anneau et le Ruban de Möbius](/projects/Projet5A_Mobius/FRFAnneauMobius.png)

---

## Conclusion et Compétences Développées 🛠️

Ce projet a démontré que les structures vrillées présentent des comportements vibratoires profondément modifiés par rapport à leurs homologues planes. Le modèle numérique validé sert d'outil précieux pour l'exploration de configurations complexes futures.

Ce projet m'a permis de développer une expertise dans :

* **Méthodologie expérimentale** : Mise en œuvre de l'identification modale (suspension, excitation, acquisition et PolyMAX).
* **Modélisation Numérique** : Utilisation du modèle par éléments finis (COMSOL) pour l'étude vibratoire.
* **Programmation scientifique** : Utilisation de **MATLAB** pour le post-traitement et l'analyse de données.
* **Analyse Physique** : Compréhension de l'impact de la topologie (vrille) sur la dynamique des structures.

---

## 📁 À propos du projet

* **Auteurs** : Nathan Prunotto & Mohamed-Amine Slimi
* **Encadrants** : Maxime Lanoy & Filip Novkosky
* **Rapporteur** : Pascal Picart
* **Établissement** : ENSIM / Le Mans Université