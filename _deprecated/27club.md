---
layout: page
title:  "The 27 Club"
---

---

## {{ page.title }}

---

### 1) Faire le point sur les données

---

### 2) Télécharger les données

* En cliquant [ici]({{ site.baseurl }}/resources/musicians.csv).

---

### 3) Créer le projet

* Attention à l'encodage (UTF-8)

---

### 4) Choisir une date de naissance et de décès

* Créer deux colonnes `birthdate` et `deathdate` afin de choisir la bonne date.

```
forNonBlank(cells.birthdate1.value, v1, v1,
forNonBlank(cells.birthdate2.value, v2, v2,
forNonBlank(cells.birthdate3.value, v3, v3, null)))
```

```
forNonBlank(cells.deathdate1.value, v1, v1,
forNonBlank(cells.deathdate2.value, v2, v2,
forNonBlank(cells.deathdate3.value, v3, v3, null)))
```

---

### 5) Enlever les musiciens vivants

* Facet par blank.
* Enlever les lignes correspondantes.

---

### 6) Dédupliquer les musiciens

* En appliquant la même méthode que précedemment
* (cluster, sort, apply sort, blank down, blank facet, remove).

---

### 7) Transformer les dates en années seules

* Avec une simple transformation.

```
value.match(/.*(\d{4}).*/)[0]
```

---

### 8) Convertir les dates en chiffres

---

### 9) Calculer l'âge de la mort

* En crééant une nouvelle colonne grâce à la formule suivante.

```
cells.deathdate.value - cells.birthdate.value
```

---

### 10) Vérifier notre hypothèse

---
