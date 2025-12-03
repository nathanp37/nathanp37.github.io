---
title: "Suivi d'essais mécaniques sur éprouvettes de géométries complexes par Emission Acoustique"
date: "2025-08-22"
cover: "/projects/StageCEA/cea_logo.png"
tags: ["Acoustique", "Matériaux", "CEA", "Recherche", "Python", "Traitement du signal"]
---

## Contexte du Stage : Étude de Composites à Matrice Céramique (CMC)

[cite_start]Ce stage de fin d'études a été réalisé au **Commissariat à l'énergie atomique et aux énergies alternatives (CEA)**, au centre du Ripault, spécialisé dans la conception de matériaux pour la Direction des applications militaires (DAM)[cite: 83, 154, 175].

[cite_start]L'objectif principal était d'étudier le comportement mécanique d'une éprouvette technologique en **Composite à Matrice Céramique (CMC) oxyde/oxyde**[cite: 100, 108, 746]. [cite_start]Ces matériaux sont essentiels pour les industries de l'aéronautique et de la défense en raison de leur légèreté et de leur excellente résistance aux températures extrêmes et à l'oxydation[cite: 205, 206, 208].

[cite_start]Le défi consistait à suivre l'apparition et l'évolution des dommages internes (fissures, délaminage) en temps réel, une information difficilement accessible par les méthodes optiques[cite: 209, 211, 289].

## Méthodologie et Objectifs Atteints 🎯

[cite_start]La méthode utilisée pour ce suivi est l'**Émission Acoustique (EA)**[cite: 75, 76, 99]. [cite_start]La mise en œuvre a combiné une instrumentation spécifique (capteurs Micro80) et le post-traitement des données avec des scripts **Python** et des algorithmes de classification[cite: 102, 890].

### 1. Localisation des Endommagements

[cite_start]J'ai développé une méthodologie de localisation des sources d'EA pour identifier les zones critiques d'endommagement sur l'éprouvette à cornière raidie[cite: 101, 220, 746].

* [cite_start]**En essai d'ouverture :** Les premières sources acoustiques sont apparues dans le **raidisseur**[cite: 103, 111, 1424].
* [cite_start]**En essai de fermeture :** Les dommages étaient principalement localisés dans la **liaison raidisseur-cornière**[cite: 103, 111, 1424].

[cite_start]Ces localisations étaient **cohérentes avec la Corrélation d'Images Numériques (CIN)** [cite: 104, 1425] [cite_start]et ont démontré que l'EA permet de détecter les fissures **avant** qu'elles ne soient visibles par CIN[cite: 1524, 1429].

### 2. Classification des Mécanismes de Dommage

[cite_start]J'ai mis en place une **classification non supervisée** par algorithmes génétiques et k-moyennes pour distinguer les signatures acoustiques des différents mécanismes d'endommagement, notamment le délaminage[cite: 101, 109, 1201].

[cite_start]L'analyse a permis d'identifier quatre classes de signaux, qui ont ensuite été labellisées pour correspondre aux phénomènes suivants[cite: 1399, 1400, 1402]:

1.  **Fissuration matricielle** (signal court, temps de montée court).
2.  **Décohésion fibre-matrice** (temps de montée plus long).
3.  **Délaminage** sur plis endommagés.
4.  [cite_start]**Délaminage** sur plis peu endommagés (signaux les plus énergétiques)[cite: 1402, 1403].

## Conclusion et Compétences Développées 🛠️

[cite_start]Ce stage a confirmé l'intérêt de l'EA comme outil complémentaire et essentiel pour la caractérisation des matériaux composites[cite: 1430].

Ce projet m'a permis de développer une expertise dans :
-   [cite_start]**Méthodologie expérimentale** : Instrumentation d'essais mécaniques et protocole d'acquisition de données (détermination du seuil, ajustement des paramètres temporels)[cite: 376, 423, 425].
-   [cite_start]**Traitement du signal** : Analyse, filtrage, et classification (ACP, k-moyennes, dendrogramme) de données d'EA[cite: 826, 865, 866].
-   [cite_start]**Programmation scientifique** : Utilisation de **Python** pour la post-analyse et la visualisation de la localisation des sources acoustiques[cite: 825, 960].
-   [cite_start]**Connaissances en matériaux** : Compréhension du scénario d'endommagement des CMC oxyde/oxyde[cite: 261].

---
[cite_start]_**Note :** Les perspectives du stage incluent l'exploitation des capteurs large-bande (Pico, Nano30) et la préparation d'essais sous haute température[cite: 1434, 1447]._