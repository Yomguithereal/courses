---
layout: page
title:  "Open Refine"
---

### 1) Installer OpenRefine

Les liens de téléchargement peuvent se trouver à cette [page](http://openrefine.org/download.html).


### 2) Télécharger les données

En cliquant [ici](../resources/dirty-data.csv).


### 3) Ouvrir les données dans OpenOffice (de préférence)

* **Encodage**: UTF-8
* **Format**: TSV


### 4) Uploader le ficher dans Refine

Bien vérifier les options afin d'importer le fichier correctement (mais normalement, OpenRefine devrait deviner pas mal de choses tout seul).

### 5) Les colonnes et le buffering


### 6) Trimmer les noms d'université


### 7) Corriger les erreurs d'encodage

* Utiliser un filtre textuel pour rechercher les éléments contenant `%`.
* Comprendre le GREL.
* Utiliser une transformation pour décoder les composants d'url.

```
value.unescape('url')
```

### 8) Harmoniser les noms de pays

* Utiliser l'action `cluster and edit` afin de trouver les noms proches et les éliminer.
* Utiliser un facet textuel pour trouver des cas tordus.


### 9) Vérifier le contenu de la colonne "nombre d'étudiants"

* Utiliser un facet numérique pour analyser la colonne.
* Regarder les valeurs non numériques.
* Utiliser une transformation pour normaliser les données.

```
value.replace('+', '').replace('~', '').replace(',', '')
```

* Trouver d'autres patterns à nettoyer.


### 10) Corriger les dates

* Convertir les données de la colonne `established` en texte.
* Utiliser une expression régulière pour extraire les années.

```
value.match(/.*(\d{4}).*/)[0]
```

* Reconvertir les données de la colonne en date.


### 11) Dédupliquer les universités

* Ordonner les noms.
* Rendre l'ordre définitif.
* Blank down les cellules.
* Utiliser un blank facet.
* Eliminer les doublons.


### 12) Exporter les données

* Dans le format de votre choix.

