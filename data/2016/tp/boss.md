---
layout: page
title:  "Boss Final"
---

## 1) Comprendre l'origine des données

Scraper l'OGP pour récupérer un graphe *bipartite* contenant:

1. Les étudiants de différentes promotions de l'ecole.
2. Les projets terminés sur lesquels les étudiants ont travaillé.

Voir le fichier générer [ici](../resources/promo.json).

Voir commment les données ont été importées [ici](https://github.com/Yomguithereal/courses/tree/gh-pages/data/2016/scripts/neo4j-import).

L'*épistémologie* et le choix de mettre la propriété `cdp` sur les noeuds `Student`.

## 2) Comprendre comment requêter les données

Les données ont été insérées dans une base de données [Neo4j](http://neo4j.com/).

Nous allons utiliser le langage de requête `cypher` pour interroger le graphe et comprendre comment tout ceci fonctionne.

<input type="text" placeholder="Adresse IP du serveur au tableau..." />

```cypher
// Compter les projets
MATCH (p:Project) RETURN count(p);

// Compter les étudiants
MATCH (s:Student) RETURN count(s);

// Trouver le nombre de CDP
$MATCH (s:Student {cdp: true}) RETURN count(s);

// Récupérer la liste de votre promo
MATCH (s:Student {promo: "h3"}) RETURN s ORDER BY s.surname;

// Récupérer la liste des projets sur lesquels vous avez travaillé
MATCH (:Student {surname: "BARBE"})-[:WORKED_ON]->(p:Project) RETURN p ORDER BY p.date;

// Récupérer la liste de vos collègues
MATCH (s:Student {surname: "BARBE"})-[:WORKED_ON]->(:Project)<-[:WORKED_ON]-(c:Student)
WHERE c <> s
RETURN DISTINCT c AS colleague
ORDER BY colleague.surname;
```

## 3) Composer un graphe monopartite

En utilisant le langage de script de votre choix (`node.js`, `ruby`, `python` etc.), nous allons extraire un graphe monopartite de co-occurrence de vous en vous liant par les projets.

Requête utile:

```cypher
MATCH (p:Project)<-[:WORKED_ON]-(s:Student) RETURN p AS project, collect(s) AS students;
```

Une fois les données extraites, nous allons en faire un fichier JSON pour la suite du TP.

TODO: le lien du JSON

## 4) Visualiser le graphe

TODO: link to download the core project
TODO: servir un dossier facilement
