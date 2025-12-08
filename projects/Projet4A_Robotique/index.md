---
title: "Coupe de France de Robotique 2024 : Farming Mars"
date: "2024-05-27"
cover: "/projects/Projet4A_Robotique/robot.png"
tags: ["Robotique", "Systèmes Embarqués", "Conception PCB", "STM32", "KiCad", "Arduino"]
---

## Contexte : Mission sur Mars 🪐

Ce projet marque l'aboutissement de ma 4ème année d'école d'ingénieur : la participation à la **Coupe de France de Robotique 2024** sur le thème "Farming Mars". La table de jeu est représenté ci dessous.

![Vue CAD du robot complet](/projects/Projet4A_Robotique/table_jeu.png)


L'objectif ? Concevoir un robot **100% autonome** capable de marquer un maximum de points en 90 secondes. Pour relever ce défi, nous avons développé un robot mobile doté de pinces pour la préhension de plantes et d'un système de navigation précis.

![Vue CAD du robot complet](/projects/Projet4A_Robotique/robot.png)

---

## Mon Expertise : Architecture Électronique ⚡

Responsable de la chaîne électronique, j'ai conçu une architecture modulaire séparant la **commande** de la **puissance**. Ce choix stratégique visait à sécuriser les composants coûteux et à faciliter la maintenance en cas de panne critique.

![Vue du routage de la carte connectique](/projects/Projet4A_Robotique/carte_electronique.png)


### 1. La Carte Connectique (Shield) 🧠
J'ai conçu cette carte comme un **shield** venant s'enficher sur les headers de la **STM32 Nucleo F446RE**. Elle centralise toutes les connexions du robot sans aucun fil volant.

* **Architecture "Plug & Play"** : La carte mère accueille la Nucleo et la Raspberry Pi sur des rangées de pins femelles. Cela permet de remplacer instantanément un microcontrôleur grillé sans toucher au câblage global, un atout majeur en compétition.
* **Interfaçage** : Elle assure le lien entre le "cerveau" (Raspberry Pi / Nucleo) et les périphériques : pont en H pour les moteurs, roues codeuses pour l'odométrie et Jack de départ.

![Vue du routage de la carte connectique](/projects/Projet4A_Robotique/schema_connect.png)

### 2. La Carte de Puissance 🔋
Dédiée à la gestion de l'énergie, cette carte convertit la tension batterie (Lipo 4S, ~16V) en tensions utilisables via des régulateurs à découpage **PTN78020W**. J'ai structuré l'alimentation en 4 réseaux distincts :

* **Réseaux Non-Interruptibles (5V et 12V)** : Pour alimenter en continu l'informatique (Raspberry Pi, Nucleo) et éviter les redémarrages intempestifs.
* **Réseaux Interruptibles (5V et 12V)** : Pilotés par un relais **G2R-1-E-DC12** relié à l'arrêt d'urgence, ils coupent instantanément l'alimentation des actionneurs (servomoteurs AX-12, moteurs CC) en cas de danger.
* **Sécurité** : Ajout d'un fusible automobile pour protéger l'électronique contre les inversions de polarité batterie.

![Vue de l'étage de puissance](/projects/Projet4A_Robotique/puissance.png)

---

## Contribution Additionnelle : Petits Automates Mobiles Indépendants (PAMI) 🤖

En complément du robot principal, j'ai également participé activement à la conception électronique et au codage des deux **PAMI** (Petits Automates Motorisés Indépendants). Ces robots miniaturisés sont cruciaux pour marquer des points bonus dans les 10 dernières secondes du match en pollinisant les zones de plantes éloignées.

![Vue CAD du robot complet](/projects/Projet4A_Robotique/pami.png)


### Électronique PAMI : Compacité et Fiabilité
L'enjeu principal était la **miniaturisation** (volume < cube de 60 mm) et la fiabilité.

* **Microcontrôleur** : Suite à des problèmes de fiabilité avec un premier choix (ESP32), nous avons opté pour une carte de développement plus robuste : la **STM32 Nucleo-32 G431KB**. Cette carte a permis de gérer avec précision les **PWM** pour le contrôle moteur et le traitement temps réel des données des encodeurs et du capteur à ultrasons **SR04**.
* **Carte PCB** : Une carte électronique miniaturisée a été réalisée par l'équipe PAMI. Elle intègre un régulateur de tension 5V et les différents connecteurs pour le driver **L298N**, le SR04, le Jack de départ et le switch de sélection d'équipe, tout en minimisant la taille du PAMI.

![Vue du routage de la carte connectique](/projects/Projet4A_Robotique/schema_pami.png)


### Code PAMI : Asservissement en Vitesse
Le code a été développé sous **Arduino**.

* **Stratégie** : Les PAMI effectuaient une séquence d'actions simples (avancer, tourner à 90°, avancer) pour atteindre leur zone de dépose. Le lancement des PAMI était géré par un **delay** de 90 secondes dans le code, prouvé très fiable.
* **Contrôle Moteur** : L'utilisation du driver **L298N** (sans PID intégré) nous a obligés à implémenter nous-mêmes un **asservissement en vitesse** basé sur les encodeurs des moteurs (code repris du robot principal) afin de garantir que les PAMI avancent droit.
* **Détection** : Un capteur à ultrasons **SR04** était utilisé pour arrêter les moteurs en cas d'obstacle à moins de 10 cm, ce qui, bien que limitant pour le contournement, a assuré la sécurité des PAMI.

---

## Bilan et Compétences 🏆

Cette architecture a prouvé sa fiabilité : aucune panne électronique majeure n'a survenu durant les matchs. La séparation des alimentations a permis de travailler sur le code en toute sécurité sans alimenter la puissance.

Compétences clés :
* **Conception PCB (KiCad)** : Routage complexe, gestion des plans de masse et dimensionnement des pistes de puissance.
* **Choix Composants** : Dimensionnement des régulateurs et protections (Relais, Fusibles).
* **Systèmes Embarqués** : Exploitation des périphériques STM32 (Timers, PWM, UART) pour un asservissement temps réel.

---

## 📁 À propos du projet

* **Équipe** : 8 étudiants (Esteban, Quentin, Tristan, Baptiste, Jean, Killian, Makalé, Nathan).
* **Cadre** : Projet 4A ENSIM (2023-2024).
* **Événement** : Coupe de France de Robotique @ La Roche-sur-Yon.