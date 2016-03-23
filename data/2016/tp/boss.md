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

Compter les projets

```cypher
MATCH (p:Project) RETURN count(p);
```

Compter les étudiants

```cypher
MATCH (s:Student) RETURN count(s);
```

Trouver le nombre de CDP

```cypher
$MATCH (s:Student {cdp: true}) RETURN count(s);
```

Récupérer la liste de votre promo

```cypher
MATCH (s:Student {promo: "h3"}) RETURN s ORDER BY s.surname;
```

Récupérer la liste des projets sur lesquels vous avez travaillé

```cypher
MATCH (:Student {surname: "BARBE"})-[:WORKED_ON]->(p:Project) RETURN p ORDER BY p.date;
```

Récupérer la liste de vos collègues

```cypher
MATCH (s:Student {surname: "BARBE"})-[:WORKED_ON]->(:Project)<-[:WORKED_ON]-(c:Student)
WHERE c <> s
RETURN DISTINCT c AS colleague
ORDER BY colleague.surname;
```

## 3) Composer un graphe monopartite

En utilisant le langage de script de votre choix (`node.js`, `ruby`, `python` etc.), nous allons extraire de la base de données un graphe monopartite de co-occurrence.

C'est à dire un graphe où les noeuds sont vous et lés entre eux si vous avez travaillé sur des projets communs.

Requête utile:

```cypher
MATCH (p:Project)<-[:WORKED_ON]-(s:Student) RETURN p AS project, collect(s) AS students;
```

Une fois les données extraites, nous allons en faire un fichier JSON pour la suite du TP.

La structure du JSON devra être la suivante:

```json
{
  "nodes": [],
  "edges": []
}
```

Pour les paresseux, les JSON est [ici](../resources/graph.json).

Pour voir comment on pourrait faire cela en utilisant node.js, c'est [ici](https://github.com/Yomguithereal/courses/tree/gh-pages/data/2016/scripts/neo4j-export).

## 4) Visualiser le graphe

Utilisons [sigma.js](http://sigmajs.org/) pour visualiser le graph que nous venons de produire.

Télécharger le squelette du projet [ici](../resources/neo4j-viz.zip).

**Astuce**: Servir un dossier sans stack `apache` ou `nginx` pour des besoins ponctuels:

```bash
# En utilisant python
python -m SimpleHTTPServer

# En utilisant node
npm i http-server
http-server
```

Pour les feignants, se rendre [ici](../scripts/neo4j-viz/index.html).
