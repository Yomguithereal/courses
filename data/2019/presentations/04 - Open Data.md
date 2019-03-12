# Un Monde de Données

<p align="center">
  Cours n°4: *Open Data*
</p>

===

## Url du cours

[https://yomguithereal.github.io/courses/data/2019/4](https://yomguithereal.github.io/courses/data/2019/4)

===

## Rappel

La dernière fois, nous avons abordé la datavisualisation.

Deux objectifs de cette dernière: 

1. Montrer 
2. Explorer

Des questions?

Aujourd’hui, nous allons nous pencher sur **l’Open Data**.

===

## Remarques liminaires

L’humanité produit des données de manière exponentielle.

Les institutions publiques, autant que les entreprises privées, collectent des masses de données très importantes.

On ne sait pas forcément ce qu’il sera possible de faire avec ces données dans le futur.

===

## Open data

Les données "ouvertes".

L’Open data, c’est partir du principe suivant: On va ouvrir cette masse de données au plus grand nombre.

Et ce de manière totalement libre de droit et sans contrepartie financière.

===

## Pourquoi?

1. Le bien commun (notamment dans un cadre politique)
2. Penser l’utilité potentielle de ces données sachant que: 
  * On ne peut jamais être certain de connaître toutes les utilisations possibles de ces données (croisements). 
  * On manque de temps, de compétences et de moyens pour exploiter ces données.

===

## Pourquoi?

Forme de sous-traitance au grand public de l’exploitation des données (exemple: les horaires de bus).

Philanthropie et/ou communication.

===

## Ouvrir toutes les données?

TL;DR: non.

1. Les données personnelles.
2. Les données faisant tourner à elles seules votre commerce.
3. Les données n’interessant personne d’autre (l’Open data, comme l’Open source, n’est pas une poubelle).

===

## Open source

En l’occurrence, l’Open data est l’Open source des données.

Leurs objectifs et beaucoup de leur problématiques (notamment juridiques) sont analogues.

===

## La donnée publique

Que peut-on intrinsèquement appeler donnée publique?

Les dix points de la Sunlight Foundation (2010)

**Attention**: le concept de donnée publique, d’un point de vue juridique, est largement différent (pose la question de ce qui a le droit d’être public).

===

## Les dix points

`Complète` ` Primaire`  `Opportune`  `Accessible`  `Exploitable`  `Non-Discriminatoire`  `Non-propriétaire`  `Libre de droits` ` Permanente ` `Gratuite`

===

## Cible de l’Open data

**Erreur commune**: l’Open data ne cible en aucun cas l’utilisateur final.

Coeur de cible de l’Open data: les développeurs.

Le format dans lequel ces données sont libérées (dans un monde idéal, et c'est ce qui pose problème) s’adresse aux développeurs.

===

## Cible de l’Open data

Les cibles primaires de l’Open data sont donc:  

1. Les développeurs d’applicatifs 
2. Les data journalists/scientists 
3. Des citoyens connectés et avertis

En aucun cas les utilisateurs lambda.

===

## Processus

```cypher
(Institutions)-[:DATA]->(Développeurs)
(Développeurs)-[:APPLICATIONS]->(Utilisateurs)
```

===

## Produits

Que fait-on de ces données?

Datavisualisations, recherche, études, initiatives citoyennes, utilitaires etc.

**Exemple**: une application métro.

Les croisements de données sont le pétrole du développeur moderne.

Quid de vos projets?

===

## Quid des APIs?

Les APIs procèdent en général de la même logique et de la même manière que l’Open data pour les développeurs.

MAIS, ce n’est pas de l’Open data.

Les données ne sont pas libres, pas librement accessibles et restent propriétaires etc.

L’Open data peut permettre de créer une API.

Une API est juste un moyen technique.

===

## Bref historique

Les fondements théoriques de l’Open data sont anciens.

Article XV de la DDHC (seul à être aménagé dans la constitution, sigh).

"La Société a le droit de demander compte à tout Agent public de son administration."

Ce droit n’est pas appliqué en totalité en France aujourd’hui.

===

## Bref historique

Aux sources juridiques du concept: le Freedom of Information act (1966, US).

Oblige les agences fédérales à donner aux citoyens en faisant la demande un accès à des données les concernant.

Beaucoup d’autres pays suivent.

===

## Bref historique

2003: dynamiques de mouvements universitaires prônant la refonte du politique à l’ère des nouvelles technologies.

En effet, ces limitations de droits sont (avant d’être un problème machiavélien), le produit de limitations techniques (la démocratie réprésentative aussi, en un sens).

On va lentement voir émerger le concept d’Open data.

===

## Etat de l’art - US/UK

Dynamique bien amorcée depuis 2003.

UK, data.gov, Tim Berners Lee 2010.

Refonte design des services de l’état.

Le gambit de David Cameron concernant les données culturelles.

===

## Etat de l’art - France

Constat moins optimiste (de moins en moins vrai, de franches améliorations depuis l’année dernière).

Impulsion de l’UE en 2003 pour la libération des données publiques.

Paris data 2011

Nombreuses ouvertures en cours au niveau des régions et des villes.

ETALAB 2011: Séverin Naudet, Henri Verdier CDO, prix récents (la France se la pète à tord)

===

## Etat de l’art - Recherche

Impulsion massive dans la recherche mondiale.

On publie de plus en plus les outils et les données ayant permis de produire les résultats.

Extrêmement important car cela permet de reproduire les résultats et donc de les vérifier.

Thèse fautive en économie sur l’impôt.

===

## Limites

Limites techniques et de compétences:

1. Beaucoup d’institutions n’ont pas les pré-requis pour assurer une libération de leurs données dans de bonnes conditions.
2. Nombreuses limites légales (en France, notamment, étonnant non?)

===

## Propriété intellectuelle

Protège les "oeuvres de l’esprit" (sujet à interprétation).

Divisée en deux: 

1. Droit moral (paternité, intégrité etc.) 
2. Droit patrimonial (revenus etc. spécifié)

===

## Les types d'oeuvre

* Collaborative
* Collective
* Composite

===

<h2 style="text-align: center;">Le singe photographe</h2>

<p align="center">
  <img src="img/monkey.jpg" class="plain" />
  <br />
  De l'importance du juge de fond (la démarche artistique comme défense).
</p>

===

## Exemple complexe

Ministère de la culture et Open data.

===

## Licenses

Un des problèmes lorsque l’on souhaite, en tant qu’institution, libérer des données est celui de la license à adopter.

License ETALAB? ODBL? Creative Commons?

De nombreux standards, pas tous équivalents et qui doivent trouver une application dans chaque droit national. Pas toujours respectés donc.

Même problème avec les licenses Open source (LGPL, MIT).

===

## Un bon Open data

Qu’est-ce qu’un bon Open data?

Démonstration par l’absurde: le mauvais exemple.

Ministère des transports britanniques (ASCII, puis PDF).

===

## Un bon Open data

Un Open data trop précipité et mal réalisé est néfaste:  

1. Peu voire aucun rendement 
2. Effet de posture 
3. Inutile 
4. Problème d’image 
5. On va jaser sur la toile (même l’effet Streisand a des limites)

===

## Un bon Open data

Un bon format (ne pas oublier que la cible n’est pas l’utilisateur final mais bien un développeur que vous pouvez facilement amener à vous haïr).

Si votre cible est en réalité l’utilisateur final, et que vous voulez absolument maîtriser les applicatifs créés, ce n’est clairement pas l’Open data qu’il vous faut.

===

## Un bon Open data

Un bon Open data nécessite donc une préparation en amont avec des porteurs de projets et des réutilisateurs potentiels afin d’enclencher une dynamique autour de vos données.

Il est prouvé que si vous ne faites pas cette démarche, votre ouverture sera inutile et n’aura pas d’impact.

Un hackaton est une bonne idée, par exemple (ministère de l’intérieur).

===

## Un bon Open data

Trop d’institutions surfent sur la vague Open data sans en comprendre les ramifications.

Mauvaise communication.

Une fois de plus, l’Open data n’est pas une poubelle.

Personne ne s’intéresse au code Wordpress d’une mairie du Gard.

===

## Tim Berners Lee

Critère d’évaluation de l’efficacité d’une dynamique Open data (très proche de la Sunlight):

1. Les données ne doivent pas être filtrées (i.e. originales et exhaustives) 
2. Structurées 
3. Libres 
4. Urlisées 
5. Liées à d’autres

Idéologie du web sémantique ici.

===

## Marché en expansion

Difficulté d’évaluation:  Comment évaluer clairement le ratio bénéfice direct/indirect de l’Open data?

Plus: lorsque l’on libère ses données, d’autres personnes peuvent désormais générer des bénéfices dessus. (L’emetteur, lui ne générera rien directement, d’où le problème dans la sphère privée).

Marché estimé à 140 milliards par an pour l’UE.

===

## Initiatives citoyennes

But premier et idéologique de l’Open data: ouvrir des données aux citoyens.

Associations bénévoles.

Certaines données que vous pensez ouvertes ne le sont absolument pas.

Regards citoyens: ouvrir les données du débat parlementaire.

[nosfinanceslocales.fr](nosfinanceslocales.fr), [http://www.lafabriquedelaloi.fr/](http://www.lafabriquedelaloi.fr/)

===

## Mouvement à la marge

Le crowd sourcing.

Open Street Map, par exemple.

Déclarations d’intérêts des élus:  [http://regardscitoyens.org/interets-des-elus/](http://regardscitoyens.org/interets-des-elus/)

Même logique que l’Open data mais en ajoutant la dimension de production des données au processus.

===

## Le marché du travail

Pas les mêmes profils selon que l’on souhaite travailler chez l’annonceur ou le réutilisateur.

Profils: 

* Dev back (traitement de données) 
* Chefs de projet spécialisés

Compétences (hors HETIC): 

* Connaissances en droit.

===

## Opportunités

* ETALAB
* OpenDataSoft
* Data Publica
* OKFN
* Associations
* Institutions publiques

===

## TP: Le Boss Final

[./tp/boss.html](./tp/boss.html)

===

## The end

Bonne continuation à tous!

**Mail**: guillaumeplique // gmail.com

**Github**: [Yomguithereal](https://github.com/Yomguithereal)

