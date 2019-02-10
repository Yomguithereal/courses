# Record Linkage & Information Retrieval

<p align="center">
  *Evoluer dans le flou et nettoyer des données issues du monde réel de la réalité véritable*
</p>

===

## Url du cours

[http://yomguithereal.github.io/courses/record-linkage/2019](http://yomguithereal.github.io/courses/record-linkage/2019)

===

Désolé pour les slides moches...

===

## Qui suis-je?

Guillaume Plique ([Yomguithereal](https://github.com/Yomguithereal) sur github.)

Ingénieur au médialab de Sciences Po.

===

<!-- .slide: data-background="img/medialab.jpg" reversed="true" -->

## Le médialab

Laboratoire de recherche rassemblant les profils suivants:

* Des **chercheurs** en sciences humaines
* Des **designers**
* Des **ingénieurs**

===

## Mon métier

* Ingénieur de recherche (sciences humaines surtout)
* R&D Open Source
* Collecte et traitement de données
* Algo & implémentation

===

## Qui êtes-vous?

Combien de personnes?

Profils? Parcours?

Quels langages de programmation?

===

## Full disclosure

Ce mastère est une nouveauté à HETIC.

C'est la première fois que je donne ce cours.

Vous allez essuyer les plâtres.

===

## Objet du cours

1. Le **record linkage**.
2. L'**information retrieval**.

===

Qui en a entendu parler?

===

Qui a déjà pratiqué?

===

## Méthodologie du cours

Peu question ici de théorie.

On va surtout pratiquer et mettre les mains dans le cambouis, plutôt que de gloser.

===

## Programmation

Du coup, évidemment, on va coder.

Je vous laisse le soin de choisir avec quel langage vous allez effectuer les TPs.

Gardez juste en tête que je ne maîtrise pas tous les langages et que mon aide sera moins pertinente si vous sortez des sentiers battus.

===

## Langages conseillés

* JavaScript
* Python
* Clojure
* Ruby
* R
* PHP
* Java

===

## Jupyter

L'année dernière ça manquait de "corrigés".

On va essayer de finaliser le cours par des notebooks jupyter cette année.

===

## Les règles du jeu

* N'hésitez pas à poser des **questions**.
* N'hésitez pas à m'interrompre si vous trouvez que je raconte des **inepties**.
* Ralentissez-moi si je parle trop vite.
* Appelez à l'aide si vous êtes bloqués.

===

## Un cours marmoréen?

Le déroulé du cours n'est pas gravé dans le marbre.

Mon objectif est de vous apprendre des choses utiles.

Si un sujet vous intéresse plus qu'un autre etc., parlons-en et orientons le cours dans la bonne direction ensemble.

===

## Des typos partout?

Le cours est en Open Source (https://github.com/Yomguithereal/courses).

N'hésitez pas à ouvrir une PR pour le corriger ou ajouter des précisions si vous trouvez le contenu trop lacunaire.

===

## Des question?

Avant que l'on commence?

===

## Le Record Linkage

Ou *entity resolution*, ou *canonicalization*, ou *similarity join* ou etc.

Désigne l'art d'harmoniser des données dont les entités peuvent avoir plusieurs variantes.

**Exemple**: `John Smith`, `J. Smith`.

===

## Le Record Linkage

Etape nécessaire pour faire des stats ou agréger des données renseignées par des opérateurs humains ou venant de sources différentes ayant chacune leur propre modélisation.

===

## L'Information Retrieval

Art de permettre la recherche de documents complexes grâce à une indexation informatisée.

Recherche plein texte. `ElasticSearch`, `Solr`.
