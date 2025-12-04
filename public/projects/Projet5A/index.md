---
title: "Projet de 5ème Année : Analyse Vibratoire d'un Ruban de Möbius, Modélisation et Expérimentation"
date: "2025-12-03"
cover: "/projects/Projet5A/mobius.png"
tags: ["Vibrations", "Modélisation", "Expérimentation", "ANSYS", "MATLAB", "Ruban de Möbius"]
---

# Étude Vibratoire d’un Ruban de Möbius — Résumé de Projet

Ce projet de fin d’année porte sur l’analyse vibratoire de structures à géométrie non conventionnelle, en particulier le **ruban de Möbius**, afin de comprendre l’impact d’une ou plusieurs vrilles sur leurs comportements dynamiques. Le travail combine **modélisation numérique (COMSOL)** et **analyse expérimentale (Testlab / analyse modale)**.

---

## 🎯 Objectifs du projet
- **Valider un dispositif expérimental** pour l’identification modale de structures légères.
- **Développer un modèle numérique cohérent** (éléments finis) et ajusté à la réalité.
- **Étudier l’influence d’une vrille** sur :
  - une poutre simple,
  - une poutre torsadée,
  - un anneau,
  - un ruban de Möbius.
- **Comparer structures planes et structures vrillées** afin de comprendre l’impact topologique sur les fréquences propres.

---

## 🛠️ Méthodologie
### 1. **Conception & Fabrication 3D**
- Conception 3D sous *SolidWorks*
- Impression résine via Formlabs pour garantir homogénéité des propriétés mécaniques
- Structures réalisées : poutre simple, poutre vrillée, anneau, ruban de Möbius

### 2. **Analyse expérimentale**

- Montage expérimentale
![Montage expérimental](/projects/Projet5A/experimental.png)


- Suspension des structures en conditions **libre-libre**
- Excitation par **marteau instrumenté**
- Mesure par accéléromètre et extraction des **FRF** & **modes propres** via **PolyMAX**

### 3. **Analyse numérique (COMSOL)**
- Modélisation via *Mécanique des structures*
- Études fréquentielles avec excitation & point de mesure identiques à l’expérience
- Ajustement des paramètres matériaux (module de Young, amortissement)

---

## 📊 Principaux Résultats
### ✔ Influence de la vrille sur une poutre
![Montage expérimental](/projects/Projet5A/influencevrille.png)
- L’ajout d’une torsion **diminue les fréquences propres** pour les modes supérieurs
- Le **premier mode** peut légèrement **augmenter**
- Relations établies :
  - dépendance **quadratique** entre fréquence et angle de torsion
  - dépendance **linéaire** entre fréquence et longueur de portée de vrille

### ✔ Influence de la vrille dans les structures annulaires
- Comparaison des modes propres Anneau vs Möbius :
![Montage expérimental](/projects/Projet5A/FRFAnneauMobius.png)
  - légère **augmentation du 1er mode**
  - **baisse significative des modes supérieurs**
- La topologie Möbius modifie la **propagation de l’onde de flexion**, nécessitant deux tours pour retrouver la même polarisation

---

## 🧠 Conclusions
- Les structures vrillées présentent des comportements vibratoires profondément modifiés.
- La vrille **accélère** ou **ralentit** certains modes selon la géométrie.
- Le modèle numérique validé permet d’explorer des configurations complexes.
- Des pistes futures incluent :
  - structures à **vrillage variable** en temps réel
  - dispositifs de **réduction ou exploitation des résonances** (matériaux piézoélectriques)

---

## 📁 À propos du projet
- **Auteurs** : Nathan Prunotto & Mohamed-Amine Slimi
- **Encadrants** : Maxime Lanoy & Filip Novkosky
- **Rapporteur** : Pascal Picart
- **Établissement** : ENSIM / Le Mans Université



