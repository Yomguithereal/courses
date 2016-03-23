---
layout: page
title:  "Boss Final"
---

## 1) Comprendre l'origine des données

Scraper l'OGP pour récupérer un graphe *bipartite* contenant:

1. Les étudiants de différentes promotions de l'ecole.
2. Les projets terminés sur lesquels les étudiants ont travaillé.

Voir le fichier générer [ici](../resources/promo.json).

Voir commment les données ont été importées [ici](../scripts/neo4j-import).

## 2) Comprendre comment requêter les données

Les données ont été insérées dans une base de données [Neo4j](http://neo4j.com/).

Nous allons utiliser le langage de requête `cypher` pour interroger le graphe et comprendre comment tout ceci fonctionne.

<input type="text" placeholder="Adresse IP du serveur au tableau..." />

TODO: queries

## 3) Composer un graphe monopartite

En utilisant le langage de script de votre choix (`node.js`, `ruby`, `python` etc.), nous allons extraire un graphe monopartite de co-occurrence de vous en vous liant par les projets.

Une fois les données extraites, nous allons en faire un fichier JSON pour la suite du TP.

TODO: le lien du JSON

## 4) Visualiser le graphe

TODO: link to download the core project
TODO: servir un dossier facilement
