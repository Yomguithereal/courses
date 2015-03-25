---
layout: page
title:  "Final Boss"
---

---

## {{ page.title }}

---

### 1) La source des données: l'OGP

* Rendez-vous [ici](http://ogp.hetic.net/).
* Comprendre d'où viennent les données et ce que l'on souhaite en tirer.
* Rappel: le principe de prétérition.

---

### 2) Accèder à la base de données Neo4j

* IP au tableau + `:7474`.
* Comprendre la structure des données.
* Créer la requête nous permettant de récupérer les informations souhaitées.
* `MATCH`, `RETURN`, `LIMIT` et l'ASCII art.

---

### 3) Visualiser des données simples

* Un graph **bipartite**.

```cypher
MATCH (s:Student)-[r:WORKED_ON]->(p:Project) RETURN s,r,p LIMIT 20;
```

* Un graph **monopartite** de co-occurrences.

```cypher
MATCH (s1:Student)-[:WORKED_ON]->(:Project)<-[:WORKED_ON]-(s2:Student)
WHERE id(s1) < id(s2)
RETURN s1,s2;
```

---

### 4) Choisir nos variables visuelles

* Taille des noeuds = nombre de projets.
* Taille des arcs = poids de la relation entre deux étudiants.
* Couleur des noeuds = promotion.

---

### 5) Créer une palette de cinq couleurs

* Palette de cinq couleurs correctement distinguables (une par promotion).
* Option: [iwanthue](http://tools.medialab.sciences-po.fr/iwanthue/).

---

### 6) Créer un fichier gexf (node)

* Format de fichier XML utilisé pour manipuler des graphes.
* Installer les dépendances suivantes:

```
npm install seraph gexf
```

* Impacter sa palette

```js
var palette = [...];
```

* Requêter la BDD

```js
var seraph = require('seraph'),
    db = seraph('DBURL:7474');

db.query('MATCH...', function(err, result) {
  // Traiter les résultats
});
```

* Générer un fichier gexf

```js
/**
 * Fragments
 * =========
 *
 */

var gexf = require('gexf');

// Créer le writer
var writer = gexf.create();

// Definit le modèle
writer.addNodeAttribute({
  id: 'cdp',
  type: 'string'
});

writer.addNodeAttribute({
  id: 'promo',
  type: 'string'
});

// Ajouter un noeud
function addNode(node) {
  var promoNb = +node.promo.replace('h', '') - 1;

  writer.addNode({
    id: node.uid,
    label: node.name + ' ' + node.surname,
    attributes: {
      promo: node.promo,
      cdp: node.cdp ? 'oui' : 'non'
    },
    viz: {
      position: {
        x: Math.random(),
        y: Math.random()
      },
      size: node.nb_projects,

      // Attention: nécessite une palette
      color: palette[promoNb]
    }
  });
}

// Ajouter un arc
writer.addEdge({
  source: edge.source,
  target: edge.target,
  weight: edge.weight
});

// Sérialiser notre document
var gexfString = writer.serialize();
```

* Bonus (donner un poid aux arcs).

---

### 7) Explorer visuellement le graphe

* Spatialiser.
* Noeuds avec le plus de poids.
* Comprendre les clusters
* Comprendre les îlots.
* Filtrer par promotions.
* Filtrer par rôle.
* Explorer votre cluster.
* Choses inattendues?

```js
// Juste au cas où
app.control.get('mainSigma').settings('maxEdgeSize', 6)
```

---

### 8) Pour les feignants:

* Fichier [gexf]({{ site.baseurl }}/resources/students.gexf).

---

### 9) Bonus: Gephi

* Utiliser [gephi](http://gephi.github.io/).
