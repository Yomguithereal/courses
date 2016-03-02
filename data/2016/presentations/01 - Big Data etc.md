# Un Monde de Données

<p align="center">
  Cours n°1: *Big data etc.*
</p>

===

## Url du cours

[http://yomguithereal.github.io/courses/data/2016/1.html](http://yomguithereal.github.io/courses/data/2016/1.html)

===

## Qui suis-je?

Guillaume Plique

#### Formation

* Hypokhâgne
* SciencesPo
* Waseda Daigaku, Tokyo
* HETIC (P2014 RPZ)

#### Emploi

* Conseil généraux & ministères
* Archives nationales
* médialab de SciencesPo

===

## Métier

Ingénieur en programmation informatique

#### Domaines

* Analyse statistique & visuelle des graphes
* Traitement automatique du langage & logique floue
* Web mining (crawling & scraping)

#### Langages

JavaScript, Clojure, Python, Ruby

Note: L'objectif c'est qu'à la fin de ce cours vous compreniez ce que représentent dire ces domaines d'expertise.

===

<!-- .slide: data-background="img/medialab.jpg" reversed="true" -->

## Le médialab

Laboratoire de recherche rassemblant les profils suivants:

* Des **chercheurs** en sciences humaines
* Des **designers**
* Des **ingénieurs**

===

## Concept du cours

Un Monde de données

**5 grands axes**:

* Le Big Data
* La science informatique & l'algorithmie
* Le traitement de données
* La visualisation de données
* L'Open Data

===

## Objectifs

Vous expliquer des concepts et vous ouvrir à des thématiques parfois obscures (voire fumeuses...)

Donner un visage à des mots que vous entendez tous les jours mais pourtant vaporeux: **Big Data**, **Data mining**, **Web mining**, **Machine learning** etc.

Vous montrer que ces choses existent pour qu'elles deviennent de nouveaux vecteurs professionnels pour vous.

===

## Sic transit gloria mundi

Gardez à l’esprit que je ne vous donne ici que des **pistes à explorer** et qu’il est impossible d’être exhaustif.

===

## Pie jesu domine

Cela va être dense et parfois même légèrement technique. N’ayez pas peur des **digressions**, on va faire

* des langues mortes
* de la philosophie
* de la littérature
* de la théologie

===

## Dona eis requiem

Enfin, faites attention à l’emploi courant des mots sur lesquels je vais tenter de mettre une définition:

Ce sont pour la plupart des **buzzwords** rarement utilisés à bon escient.

Exerçons notre sens critique!

===

## Les règles du cours

* N'hésitez pas à poser des **questions**.
* N'héistez pas à m'interrompre si vous trouvez que je raconte des **inepties**.
* Ralentissez-moi si je parle trop vite.
* Ne fuyez pas si j'utilise un vocabulaire **acroamatique** ou **abscons**.

===

## Acroamatique

Point etymologie n°1

* Du grec, *entendre* (du moins une manière de le dire).
* Désigne par extension le savoir véhiculé de manière orale.
* Puis désigne les cours d'Aristote dont nous avons perdu la trace (*Le nom de la rose*, Umberto Ecco).
* Signifie aujourd'hui mystérieux, ésotérique, réservé aux initiés.

Note: Aristote et ses écrits.

===

## Un partiel?

Il parait que j'ai un partiel à vous donner.

===

## Interlude musical

* Combien de **développeurs** (langages)?
* Combien de **designers**?
* Quid des **CDP et alii**?
* Qui a une **expérience** ayant un lien avec les sujets du cours?
* Qui a fait du **latin** ou du **grec ancien**?

===

## Récapitulatif

* Cours de M. Topolov?
* Cours de MM. Fongue & Gourven?
* Projet de dataviz l'année dernière?

===

## Des questions avant de commencer?

===

## Big Data?

*"Big Data is like teenage sex"*

* Tout le monde en parle
* Personne ne sait vraiment ce que c'est
* Tout le monde pense que les autres en font
* Donc tout le monde dit qu'il en fait

===

## Un peu d'étymologie

D'où vient le mot `data`?

1. `data` vient du supin latin `datum`.
2. Cela signifie littéralement: "ce qui est donné".
3. `data` est donc le pluriel de `datum`.

===

## Une définition?

**Description** élémentaire d’une réalité.

En informatique, cette description est **codée** et revêt un aspect intelligible au travers de la logique de l’ordinateur.

Tout un pan de la science informatique consiste à **structurer** la donnée (spoiler).

===

## Donnée vs. construit

De nombreux intellectuels hargneux ont tendance à rappeler que ce que nous appelons données sont en réalité des **construits**.

Un donné, conceptuellement, est-ce qui apparait **immédiatement** à l’intellect **avant** que celui-ci n’y impose ses procédés d’élaboration.

La délimitation des deux concepts est, par ailleurs, un très grand problème philosophique.

Mais "base de construits" ne sonnait pas bien.

Note: lorsque l'on voit quelque chose, sa vision est un donné, le fait que nous puissions l'appeler table ou chaise est en soi un processus de construction et donc un construit. Mais la philo peut aller plus loin.

===

## Quid du Big data?

Qu’est-ce que le Big data? (un peu d’anglais?)

Un **amas** extrêmement important de données.

Tant que cela tient sur vos ordinateurs, on ne parlera pas de **Big data**.

Donc, trivialement, pas la table SQL de 1000 lignes de tata Lucienne.

===

## Le saut quantitatif

Le nombre de données collectées croit aujourd'hui de manière **exponentielle** (cf. loi de Moore).

<p align="center">
  <img src="img/exponent.png" class="plain" />
</p>

===

## Le saut quantitatif

L’humanité a produit dans les ~3 dernières années plus de données que ce qu’elle a pu produire depuis l’origine de l’écriture. (Exponentielle, quand tu nous tiens).

90% des données mondiales ont été produites les deux dernières années (autre manière de le dire).

===

## Le saut quantitatif

Des nombres en valant d’autres:  

* 1 **zettaoctet** (1021) franchi en 2011 
* 204 millions d’emails/minute 
* 40 000 recherches sur Google à la seconde 
* 100 heures de vidéo sur YouTube/minute 
* 720 nouveaux sites web par jour

===

## Le saut quantitatif

En réalité, tout cela est proprement **inquantifiable** et les nombres varient selon les source.

La seule chose sur laquelle les sources s’accordent est le côté **Big**.

===

## Le saut quantitatif

Cela n’est pas prêt de ralentir: 

* Quantified self 
* Un bon avion (25 To/heure) 
* Objets connectés 
* Capacité de stockage de plus en plus évidente

===

## Le saut quantitatif

Or, si on commence à savoir stocker cette masse de données:

1. Les moyens techniques nous permettant d’analyser de tels volumes restent à inventer.
2. On ne sait pas toujours extraire le sens ces données (elles n’en ont pas forcément, par ailleurs).

===

## Le saut quantitatif

Les deux enjeux du Big data sont donc les suivants:

* Les moyens techniques nécessaires au stockage et à l’analyse des données.
* L’appareil théorique permettant de donner un sens à ces données.

===

## Le saut quantitatif

Etape importante de l’histoire de l’informatique.

On sait que ces données et leur analyse peuvent changer la manière dont on perçoit le monde.

Mais, les standards techniques et théoriques sont loins d’être arrêtés.

Le Big data est encore dans une dynamique de pionniers.

===

## Les trois V

Effort théorique de définition du Big data:

1. Volume
2. Variété
3. Vélocité

===

## A quoi ça sert?

Quelques exemples...

===

<!-- .slide: data-background="img/genetics.jpeg" reversed="true" -->

<h1 class="white">La génétique</h1>

===

<!-- .slide: data-background="img/medicine.jpeg" reversed="true" -->

<h1 class="white">La médecine</h1>

===

<!-- .slide: data-background="img/netflix.jpeg" reversed="true" -->

<h1 class="white">La recommandation</h1>

===

## Un marché en expansion

Le Big data est une nouvelle source substantielle de profits.

Une fois de plus, tous les organismes économiques y vont de leurs conjectures sur le sujet.

Celles-ci sont toutes différentes et floues mais tout le monde s’accorde sur ce point: le Big data, c’est gros.

Vous noterez la mise en abyme.

===

## Un marché en expansion

Des nombres en valant d’autres (2, le retour):  

* 4,2 millions d’emplois d’ici 2015 
* 54,3 milliards de chiffre d’affaire horizon 2017

Il est tout à fait possible de construire un business autour de la donnée (mais de moins en moins dans la vente de données).

===

## Mais.

Le Big data n’est en aucun cas une idée neuve!

(déjà appliqué par les géants du web depuis au moins 10 ans)

C’est surtout la médiatisation et la démocratisation du concept qui est impressionnante.

===

## Quantitatif & Qualitatif

**François Pérusse** et la notion de **seuil critique**.

Avec la quantité de données dont nous disposons, la résolution de certains problèmes devient possible dès qu’un seuil critique est atteint.

Même si certaines données, observées de manière atomique, semblent inintéressantes sur le plan qualitatif, elles deviennent une mine d’or lorsqu’on en possède énormément et qu’on peut les croiser avec d’autres.

===

## Exemple

Détecter le profil socio-démographique d’une personne grâce à ses headers HTTP:

```http
Accept: text/html,application/xhtml+xml,application/xml; q=0.9,image/webp,*/*;q=0.8 
Accept-Encoding: gzip, deflate, sdch 
Accept-Language: fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4,es;q=0.2 
Cache-Control: max-age=0 
Connection: keep-alive 
Cookie: __qca=P0-1380333920-1417718780994 
Host: www.moddb.com 
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36
```

===

## Data vs. Déterminisme

Le Big data et le machine learning nous permettent de changer de paradigme si besoin:

Il est possible, dans certains cas, de résoudre un problème grâce aux données plutôt que grâce à un algorithme.

La combinaison des deux approches reste évidemment possible et puissante.

===

## Découper les mots en syllabes

Utiliser les règles phonétiques anglaises: 

`V CV VC CVC CCV CCCV CVCC`

Ou utiliser un dictionnaire?

(N.B.: Eternel problème de computation vs. mémoire)

===

# Les rainbow attacks

<p align="center">
  <img src="img/rainbow.jpeg" class="plain" />
</p>

===

## Les rainbow attacks

Une méthode issue de la cryptographie: les rainbow tables.

Comment un script perl de deux lignes peut casser vos mots de passe?

Vive les condiments!

===

## Vectoriel et matriciel

Prenons le problème à l'envers.

Comment stocker une image dans un fichier?

1. L'approche matricielle
2. L'approche vectorielle

===

## Google?

Pour résumer: masse de données = possibilité de résoudre des problèmes differemment.

Stratégie de Google depuis le début, notamment.

La recherche ne fonctionne plus par curation de liens et index mais bien par collecte des données du web lui même.

Leur correction orthographique en est par ailleurs un pur produit. (Dérives)

===

## Au delà du Big data

Le Big data est surtout le reflet d’une prise de conscience des acteurs et d’un changement de paradigme.

Le Big data a évidemment des limites et ne pose que peu la question des données floues ou trop peu nombreuses (pourtant intéressantes mais encore plus complexes à analyser, paradoxalement).

Parfois la richesse des données se trouve bien plus dans les croisements que dans la masse.

===

## Big Data & Technique

Trois axes (choisis arbitrairement):  

1. Le stockage des données 
2. La parallélisation 
3. Le machine learning

===

# 1. Le stockage des données

===

## Ye Olde SQL

Structured Query Language (pas BDD)  

```sql
SELECT * FROM `users` WHERE name = "Jonhatan"
```

===

## Ye Olde SQL

Origines théoriques dans les années 60. 

* 1970: Edgar Frank Codd
* 1974: Donald Chamberlain et Raymond Boyce

Nombreux système de BDD utilisent le SQL: MySQL, ORACLE, PostgreSQL, MariaDB etc.

Evolue encore (2011: tables temporelles, PERIOD FOR etc.)

Problèmes: sur-architecturation, problèmes de scalabilité.

===

# Le paradigme NoSQL

<p align="center">
  <img src="img/nosql.jpeg" class="plain" />
</p>

===

## Le paradigme NoSQL

Au commencement, tout était SQL.

Il n’y avait qu’assez rarement l’occasion de se poser la question du format de stockage des données.

Mais le SQL est trop limitant pour les usages contemporains.

Chaque problème est différent et il convient d’utiliser les outils adaptés pour le résoudre.

L’idéologie du tout SQL n’a donc plus de validité.

===

## Disclaimer

**Achtung!** Il ne s’agit absolument pas de dire que le SQL est dépassé (ce serait une grossière erreur que de penser cela).

Cependant, le SQL n’est qu’une possibilité parmi bien d’autres.

Il est donc contre-productif d’utiliser le SQL partout, notamment dans des cas où il n’est pas efficace.

===

## Question

Voudriez-vous toujours utiliser des fichiers Excel pour stocker des données?

===

## Choisir un format de données

Le genre des données: données **tabulaires**, **scalaires**, **non-scalaires**?

Question de la taille du fichier, aussi.

Parfois le JSON, c’est pas bon et le CSV c’est à jeter.

On veut le choix crévindiou (et surtout pas de xls)!

===

## Aparté - La complexité algorithmique

Petit rappel sur la notation `O()`.

Deux complexités:

1. Le calcul
2. La mémoire

Pour le calcul, nombre théorique d'opérations à effectuer pour accomplir notre objectif.

===

## La notation grand O

* `O(1)`: temps constant
* `O(log(n))`: temps logarithmique
* `O(n)`: temps linéaire
* `O(n^2)`: temps quadratique => le mal absolu (cryptologie)

Exemple de la dichotomie.

===

## Les structures de données

Liste, dictionnaires et sets.

```js
const list = [1, 2, 3];
const dict = {1: 'one', 2: 'two', 3: 'three'};
const set = new Set([1, 2, 3]);

// Quels complexité pour répondre à la question:
// "Y a-t-il le chiffre 4 dans la structure?"

// Le problème de l'ordre
```

Utilisez correctement les structures.

===

## CSV

*Comma-Separated Value*

```js
name,surname,age
John,Doe,24
Mary,Jordan,56
Jared,Shawarma,78
```

Des problèmes?

===

## CSV

```js
// Escaping
name,surname,age,commentaire
John,Travolta,45,"J'aime les ,"
Marie,Doe,76,"J'aime les ""guillemets"""
Harrison,Drake,76,"J'aime les
retours à la ligne"
```

L'ASCII et les erreurs historiques.

===

## XML

*Extensible Markup Language*

```xml
<?xml version="1.0" encoding="utf-8"?>
<catalog>
  <book id="243">
    <name>Lord of the Ring</name>
    <author>Tolkien</author>
    <genre>fantasy</genre>
  </book>
  <book id="278">
    <name>The Iliad</name>
    <author>Homer</author>
    <genre>myth</genre>
  </book>
</catalog>
```

Des problèmes?

===

## JSON

*JavaScript Object Notation*

```json
{
  "name": "decypher",
  "version": "0.4.0",
  "description": "A handful of cypher utilities for Node.js",
  "main": "index.js",
  "keywords": [
    "cypher",
    "neo4j",
    "query builder",
    "query",
    "builder",
    "batch"
  ]
}
```

===

## YAML

*YAML Ain't Markup Language*

```yaml
---
name: decypher
version: 0.4.0
description: "A handful of cypher utilities for Node.js"
private: True
main: index.js
keywords:
  - cypher
  - neo4j
  - query builder
  - query
  - builder
  - batch
```

===

## Résumé

Vous voyez bien que chaque format de données a ses avantages & ses inconvénients.

Il convient de bien choisir le format adapté à votre cas.

===

## Le paradigme NoSQL

Le NoSQL procède du même effort d’adaptation d’un outil à son usage.

Le NoSQL représente donc tous les systèmes de base de données qui ne se basent pas sur SQL.

Mais, le risque ici est de considérer que le NoSQL comme UN seul nouveau standard.

Le NoSQL est plutôt une myriade de nouveaux standards.

Le NoSQL c’est le far west.

===

## Le paradigme NoSQL

Le NoSQL est doublement varié:

1. Les usages ciblés et les formats de données sont extrêmement divers.
2. Les standards ne sont pas établis et il n’est pas rare de trouver plusieurs systèmes de base de données en concurrence sur la même mouvance NoSQL.

===

## Le paradigme NoSQL

Pour résumer, le NoSQL c’est:  

* Un usage = un outil. 
* Une structure de données souvent plus proche du développeur. 
* Pas le SQL (sinon on appelle ça le SQL)

Faisons un bref tour du propriétaire

===

## Orientées colonnes

Problème à résoudre: la scalabilité. 

**Exemples**: Cassandra, Accumulo

===

## Orientées documents

Problèmes à résoudre: 

1. Surarchitecturation du SQL 
2. Rigidité des schemas

Analogie développement:  un array JavaScript

**Exemples**: MongoDB, CouchDB

===

## Interlude - Le graphe

Le graphe est une structure structure de données.

Noeuds & arcs.

<p align="center">
  <img src="img/graph.png" class="plain" />
</p>

===

## Orientées graphe

Problème à résoudre:  Gestion de données ultra-relationnelles.

**Exemples**:  Neo4j, TitanDB

===

## Le Cypher

Exemple de langage de requêtage de graphe utilisé par Neo4j. (Matrix)

```cypher
MATCH (u:User)-[:LIKES]->(m:Movies)
 RETURN u,m 
LIMIT 30 
ORDER BY m.title;
```

On en fera un peu en TP à la fin du cours si on a le temps.

===

## Orientées clé-valeur / RAM

Problèmes à résoudre: 

* I/O, temps d’accès aux données 
* Rigidité des schemas

Analogie développement:  Un objet JavaScript

**Exemples**:  Redis, Memcache, Riak, Couchbase

===

## Orientées whatever

Problèmes à résoudre:  Besoin de plusieurs paradigmes à la fois

**Exemples**:  ArangoDB, OrientDB

===

## Dans le navigateur

Il y a aussi du NoSQL dans le navigateur:  

* `localStorage` (clé-valeur) 
* `IndexedDB` (clé-valeur & documents)

Le WebSQL a été déprécié en faveur d’IndexedDB.

PouchDB (synchronisation client-serveur)

===

## Suite & Fin?

Nope: 

1. Les bases orientées Flux 
2. Les bases serverless (SQLite en NoSQL)

Le NoSQL arrive même dans certains bastions du SQL comme Postgre (Support du requêtage json etc.)

Le NoSQL est un monde fabuleux. N’ayez pas peur de l’explorer pour découvrir de nouvelles solutions techniques à vos problèmes.

===

# 2. La parallélisation

===

## Les processeurs

Un ordinateur a au minimum un processeur.

Un processeur ne peut jamais faire plus d'un cacul à la fois.

C'est une limitation physique.

===

## Une solution?

Pourquoi ne pas diviser le calcul et le faire exécuter par plusieurs ordinateurs.

Notez que c'est aujourd'hui le même principe avec nos ordinateurs qui ont plusieurs processeurs à la fois (4 en moyenne) + les GPU.

===

## Quid de l'asynchrone

L'asynchrone, ce n'est pas de la parallélisation, c'est utiliser des stacks ou des threads (stacks au niveau du processeur).

C'est répartir les calculs dans le temps pour éviter que des calculs lourds ou que des opérations ne nécessitant pas le CPU (I/O) n'en bloquent pas d'autres.

La responsivité d'une interface web.

===

<p align="center">
  <img src="img/thread.png" class="plain" width="400px" />
</p>

===

## Petite question en passant

```js
function main() {

  setTimeout(function() {
    console.log('a');
  }, 0);

  console.log('b');

}

// Que va-t-il se passer dans la console
main();
```

===

## La parallélisation

Un des grands enjeux techniques du Big data.

Le concept est loin d’être neuf et une bonne partie des calculs scientifiques complexes sont d’ores et déjà distribués.

Divide & conquer

Limitée aux algorithmes pouvant découper leur calculs.  Exemple: une somme.

===

## La programmation fonctionnelle

Il est coutume de dire qu’il existe trois paradigmes majeurs concernant la programmation:

1. Le paradigme impératif
2. Le paradigme objet
3. Le paradigme déclaratif

===

## Le lambda calcul

* Système inventé par Alonzo Church dans les années 1930 (les fonctions récursives, c’est lui).

<p align="center">
  <img src="img/lambda.png" class="plain" width="400px" />
</p>

===

## Pureté

Une fonction est dite pure lorsque que l’on est certain qu’elle est libre de tout effet de bord et qu’aucun élément extérieur ne peut affecter son exécution (et inversement).

En d’autres termes, une fonction est pure lorsque l’on est certain que si l’on passe un jeu d’argument donné à la fonction, celle-ci renverra toujours, quoi qu’il arrive, la même chose (bijection).

===

## Pureté - Exemple n°1

```js
let externalCoefficient = 0;
function impure(nb) {
  return nb + externalCoefficient + 1;
}

function pure(nb) {
  return nb + 1;
}

impure(2) >>> 3
pure(2) >>> 3

externalCoefficient++;

// Ooops
impure(2) >>> 4
pure(2) >>> 3
```

Quid de l'ES6?

===

## Pureté - Exemple n°2

```js
const numbers = [1, 2, 3];

// Behold: side-effects!
function addItem(list) {
  list.push(4);
}

// numbers here...
addItem(numbers);
// ...are different from numbers here
```

===

## Pureté - Résumé

On dira qu'une fonction est pure si elle accepte exactement une source d'inputs et ne produit des résultats que via un canal unique.

La pureté est un moyen de lutter contre les **effets de bord** et le doute qu'il génère.

===

## Les effets de bord

Le problème c'est que la réalité, est un effet de bord qui va frustrer la logique mathématique de la programmation fonctionnelle.

Le file system, est un effet de bord, par exemple. L'état en est un autre.

On a coutume de dire que le paradigme objet et le paradigme fonctionnel apportent tous deux des solutions différentes à ce problème.

La notion d'effet de bord est donc centrale pour comprendre la logique des langages informatiques.

===

## Les effets de bord

La **programmation orientée objet** trouve une solution aux effets de bords en rendant l'état local à chaque objet et en s'assurant que les effets de bords restent contenus à des endroits précis (avec des résultats plus ou moins variés).

La **programmation fonctionnelle** considère les effets de bord comme le mal incarné et va tout faire pour les éviter autant que possible. Elle fera des compromis si nécessaire au travers de concepts jouant le rôle de sas (le typage, les monades etc.).

===

## Instant méditation

Maintenant que l'on sait ce qu'est une fonction pure:

Une fonction retournant un nombre aléatoire peut-elle être pure?

===

## Aparté

*Comment peut-on générer du hasard en informatique?*

===

## Solution

#### Mesurer le réel

[random.org](https://www.random.org/)

#### Les PRNG

*PseudoRandom Number Generator*

===

## Les PRNG

L'uniformité des résultat.

Danger: que l'on puisse détecter son pattern et/ou son état actuel.

Si cela est compromis, on peut prédire son comportement et en jouer (Tool Assisted Speedrun).

Très important pour la cryptologie.

Un PRNG n'est jamais parfait mais le calcul nécessaire pour le percer augmente avec sa qualité.

===

## ACHTUNG!

N'utilisez jamais `Math.random` pour faire de la crypto ou de la sécu!

===

## La méthode Von Neumann

```js
let state = 11112;

function random() {
  const squared = state * state;

  // Update state
  state = middleSquares(squared);

  // Returning pseudo-random number
  return state;
}

// Etape n°1 => 11112^2 = 12(3432)1, on garde 3432
// Etape n°2 => 34322^2 = 11(7786)24, on garde 7786
// ...
```

===

## Shameless transition

Pour la programmation fonctionnelle, un des pires effets de bord porte le doux nom de "**mutation**".

Et vous la pratiquez tous les jours sans vergogne!

===

## Immutabilité

En programmation fonctionnelle, les variables sont des valeurs et non des pointeurs (clarifier JS, scalaires & primitives).

Cela veut dire qu’une "variable" ne peut jamais, muter, changer.

Ainsi, pour « changer » une variable, il faut en créer une nouvelle différente.

Cela abolit toute forme d’incertitude concernant la valeur d’une variable au prix d’une plus grande rigueur.

===

## Immutabilité - Exemple

```js
const list = [1, 2, 3];

// Mutable
list.push(4);
list >>> [1, 2, 3, 4]
// L'état de la liste originale n'existe plus

// Immutable
const newList = list.push(4);
list >>> [1, 2, 3]
newList >>> [1, 2, 3, 4]
```

Problème?

===

## Fonctions de premier ordre

En programmation fonctionnelle (hint), les fonctions sont considérées comme des valeurs à part entière et non pas comme des raccourcis syntaxiques (goto).

Cela veut dire que l’on peut très bien passer des fonctions comme arguments à d’autres fonctions et agir sur les fonctions elles-mêmes (Yo dawg…).

On appelle donc fonctions de premier ordre des fonctions prenant des fonctions comme argument.

===

## Map

```js
const numbers = [1, 2, 3];

// Imperatif
const doubles = [];

for (let i = 0, l = numbers.length; i < l; i++) {
  doubles.push(numbers[i] * 2);
}

// Fonctionnel
const doubles = numbers.map(function(nb) {
  return nb * 2;
});

doubles >>> [2, 4, 6]
```

Remarquez qu'on ne mute rien!

===

## Filter

```js
const numbers = [1, 2, 3];

// Imperatif
const greaters = [];

for (let i = 0, l = numbers.length; i < l; i++) {
  if (numbers[i] > 1)
    greaters.push(numbers[i]);
}

// Fonctionnel
const greaters = numbers.filter(function(nb) {
  return nb > 1;
});

greaters >>> [2, 3]
```

Predicat

===

## Reduce

```js
const numbers = [1, 2, 3];

// Imperatif
let sum = 0;

for (let i = 0, l = numbers.length; i < l; i++) {
  sum += numbers[i];
}

// Fonctionnel
const sum = numbers.reduce(function(a, b) {
  return a + b;
});

sum >>> 6
```

Notice anything?

===

## Reduce, notre maître à tous

```js
// Map est un reduce
function map(list, fn) {
  return list.reduce(function(a, b) {
    return a.concat(fn(b));
  }, []);
}

// Filter est un reduce
function filter(list, fn) {
  return list.reduce(function(a, b) {
    return fn(b) ? a.concat(b) : a;
  }, []);
}
```

Valeur de départ

===

## Partial application

```js
function add(a, b) {
  return a + b;
}

const addToTwo = partial(add, 2);

addToTwo(4) >>> 6

// In raw JS
const addToTwo = add.bind(null, 2);
```

===

## Function composition

```js
function addTwo(nb) {
  return nb + 2;
}

function addThree(nb) {
  return nb + 3
}

const addFive = compose(addTwo, addThree);

addFive(3) >>> 8
```

===

## Les langages fonctionnels

Lisp (le plus ancien, 1958), Clojure etc.

Haskell, Erlang etc.

<p align="center">
  <img src="img/lisp.png" class="plain" width="400px" />
</p>

===

## Un peu de Clojure?

```clojure
(defn slice
  "Slice a [string] from [start] and up to [length]."
  [string start length]
  (let [offset (if (neg? start) (+ (count string) start) start)]
    (apply str (take length (drop offset string)))))

(defn chop
  "Drop the last character of a [string]."
  [string]
  (subs string 0 (dec (count string))))

(defn eat
  "Drop the first letter of a [string]."
  [string]
  (apply str (drop 1 string)))
```

La notation polonaise.

Proximité entre le code et les données (les macros).

===

## Un peu de Haskell?

```haskell
import qualified Char

main = putStr $ concat
   [up (bob n) ++ wall ++ ", " ++ bob n ++ ".\n" ++
    pass n ++ bob (n - 1) ++ wall ++ ".\n\n" |
    n <- [99, 98 .. 0]]
   where bob n = (num n) ++ " bottle" ++ (s n) ++ " of beer"
         wall = " on the wall"
         pass 0 = "Go to the store and buy some more, "
         pass _ = "Take one down and pass it around, "
         up (x : xs) = Char.toUpper x : xs
         num (-1) = "99"
         num 0    = "no more"
         num n    = show n
         s 1 = ""
         s _ = "s"
```

===

## Un peu de Erlang?

```erlang
-module(beersong).
-export([sing/0]).

sing_verse(Bottle) ->
    receive
        {_, Verse} when Bottle == 0 ->
            io:format(Verse);
        {N, Verse} when Bottle == N ->
            io:format(Verse),
            sing_verse(Bottle-1)
    after
        3000 ->
            io:format("Verse not received - re-starting singer~n"),
            spawn_singer(Bottle),
            sing_verse(Bottle)
    end.
```

===

## Et c'est tout?

J'ai dit tout à l'heure que le troisième paradigme était le paradigme déclaratif.

Ne pas oublier que la programmation fonctionnelle n'est qu'une facette de ce paradigme.

On y trouve par exemple aussi la programmation logique, comme avec le Prolog.

===

## Un peu de Prolog?

```prolog
?- parent(abraham,X).   /* The children of Abraham */
X = ismael
Y = isaac
yes
?- parent(abraham,_).   /* Did Abraham have children? */
yes
?- parent(Father,esau).   /* The father of Esau? */
Father = isaac
?- parent(F,S).     /* All the pairs father-son from the data base */
F = abraham
S = ismael
...

?- parent(abraham,X),parent(X,Grandson). /* Is Abraham grandfather? */
X = isaac
Grandson = esau
X = isaac
Grandson = iacob
no
```

===

## Je m’en sers déjà?

En réalité, la plupart des langages de **haut niveau** utilisent aujourd’hui plusieurs paradigmes à la fois.

Le JavaScript, le python, le ruby et même le php (sigh.) utilisent déjà beaucoup de concepts de la programmation fonctionnelle tout en restant près de l’objet et de l’impératif.

===

## Niveaux de langage

Quand je dis langage de **haut niveau**, ce n'est pas un jugement de valeur.

Petit rappel: un ordinateur n'est ni plus ni moins qu'un amas de `0` et de `1`.

Il y a donc 4 niveaux de langages distincts qui sont de plus en plus "hauts" au fur et à mesure qu'on s'éloigne du "métal".

===

## Niveaux de langage

1. Le binaire
2. Les assembleurs
3. Les langages compilés
4. Les langages interprétés

Plus on est près du métal, plus on est potentiellement performant mais plus on perd en expressivité.

Quand on écrit du code, on n'écrit pas pour la machine mais bien pour l'humain.

===

# Pourquoi?

===

## MapReduce

Processus permettant de paralléliser des calculs/traitements concernant de grandes masses de données.

"Inventé" par Google.

Démocratisation via **Hadoop**.

GFS (64mb chunks), HDFS.

Comme son nom l’indique: applique map, puis reduce.

===

## L'explication en image

<p align="center">
  <img src="img/mapreduce.jpeg" class="plain" />
</p>

===

## MapReduce

La granularité des tâche permet de rendre le tout fiable et scalable. (Tolérance à l’erreur)

Son objectif est de rendre les problématiques de parallélisation invisibles à l’auteur du calcul.

Nombreuses implémentations existantes, plus un concept qu’une technologie précise.

===

## Limites

Certains calculs ne sont pas parallélisables. 

**Exemple**: Suite de Fibonacci

MapReduce utilise difficilement des index.

Rappelez-vous de tout à l'heure: un index c'est une structure de données que l'on peut requêter en `O(1)` pour répondre à une question.

Exemple de l'index en SQL.

===

# 3. Le machine learning

===

## Le machine learning

But du jeu: faire « apprendre » la machine.

N’est possible que lorsque l’on possède énormément de données concernant un problème.

(Il existe des moyens d’estimer le seuil critique à atteindre mais nous n’en discuterons pas ici).

===

## Le machine learning

En machine learning, nous n’avons qu’une masse impressionnante d’inputs et d’outputs:  

```
x1 -> y1 ,
x2 -> y2 ,
x3 -> y3 ,
(…)
```

Et l’on cherche à trouver la fonction qui permet de passer de x à y:   `f(x) = y`.

Que fait `f`?

===

## Le machine learning

```
x1 = 3 -> y1 = 5,
x2 = 1 -> y2 = 3,
x3 = 7 -> y3 = 9. 
```

Sans challenge: `f(x) = x + 2`

Imaginons cela sur des données plus complexes et plus nombreuses et nous aurons une idée à peu près correcte de ce qu’est le machine learning.

===

## La régression linéaire

Revenons un peu en arrière dans le temps.

Méthode statistique classique.

**Le but**: trouver la corrélation entre deux variables.

**Exemple**: évaluer le prix de sa maison sur un marché immobilier.

===

## La régression linéaire

1. Abscisse (surface en m2), Ordonnée (prix en euros)
2. Trouver le prix de notre maison
  1. Tracer une ligne
  2. Déterminer son coup
  3. Interpolation
3. L'extrapolation
4. Logarithmes et polynomiales

===

Note: blank slate pour le tableau

===

## Régression linéaire & machine learning

Est-ce que la régression linéaire est du machine learning?

Limites relatives des concepts.

Si on doit formaliser une opposition: on dira que c'est du machine learning dès que le système est capable de prendre de nouveaux inputs et de s'auto-corriger au cours du temps.

===

## L'inférence bayésienne (1)

Statistiques et probabilité. Thomas Bayes (XVIIIe siècle)

Opposition aux statistiques *fréquentistes* n'ayant une validité que lorsque toutes les données, ou une très grande quantité de ces données sont connues (Loi des grands nombres).

Méthode utile quand on a moins de données ou quand on en ajoute progressivement dans un système.

Mais si profusion de données les deux méthodes auront asymptotiquement les mêmes résultats.

===

## Le perceptron

Inventé en 1957 par Franck Rosenblatt.

Le plus "simple" des algorithmes de machine learning (pondération linéaire).

Il est dit **itératif** car il fonctionne par itérations successives jusqu’à ce que l’on considère son résultat satisfaisant (ce qui peut potentiellement ne jamais arriver).

Contrairement à un algorithme déterministe qui a une fin (qui peut être très longue à atteindre, par ailleurs).

===

<p align="center">
  <img src="img/perceptron.png" class="plain" />
</p>

===

## L’OCR (Optical Character Recognition)

1. Séparer les charactères
2. Analyser leur structure.

<p align="center">
  <img src="img/ocr.jpeg" class="plain" />
</p>

Note: jeu de données entrainé à la main, essayant de formaliser ce qu'est une lettre

===

## Exemples

1. La banque et les prêts (formulation des hypothèses et pondération).
2. Netflix et son système de recommandation.

===

## Pour aller plus loin

Très bonne explication visuelle sur le site R2D3:

[http://www.r2d3.us](http://www.r2d3.us)

===

## Le deep learning

Famille d’algorithme appartenant aussi à la famille du machine learning.

Dans ce cas là, on n'a pas de données initiales, ou très peu, et on va tenter de faire apprendre à la machine par elle-même.

S’inspirer du fonctionnement du cerveau humain.

Les réseaux de neurones et la spécialisation (couleur, forme etc.)

===

## DQN - DeepMind

Algorithme capable d'apprendre à jouer à des jeux vidéo atari.

Fonctionne sans données préalables mais grâce à un système de stimuli.

Son objectif est de faire grimper les nombres (littéralement).

===

## L'anamnèse

Etymologie (la reminiscence).

Platon et le retour au monde des idées.

Petit retour sur la notion de donnée et de construit.

Kant et les catégories de l'entendement.

(A la messe ça n'a rien à voir, c'est juste le moment où l'on rappelle les paroles du Christ lors de la Cène).

===

## Les algorithmes évolutionnaires

Petit rappel concernant ce cher M. Darwin.

<p align="center">
  <img src="img/walkers.gif" class="plain" />
</p>

[Exemple](http://rednuht.org/genetic_walkers/) à faire tourner soi-même.

===

# Post-Scriptum

===

## Quelques outils

OpenOffice, Excel, Tableau, Stata, OpenRefine, Gephi

AWS, Google BigQuery (étonnant, non?)

===

## Marché du travail

Profils recherchés:  

1. Data scientists  
2. Développeurs / Ingénieur
3. CDP spécialisés

Pour le design, on verra dans les prochains cours.

===

## Data scientist

Métier aux contours encore très flou.

Tout le monde cherche des data scientists sans toujours savoir ce que c’est.

Charactéristique d’un bon data scientist: 

* Bonne bases en développement backend/script 
* Mathématiques et statistiques 
* Sensibilité business (logique métier du client)

Souvent proche des métiers en analytics mais avec la programmation en plus.

===

## Programmation

**PHP?** Non, essaye encore.

**Langages de script**: Python, Ruby, Node.js...

**Java/JVM**:  Java, Clojure, Scala, Groovy...

**Langages ‘scientifiques’**: Matlab, R, Julia...

**Langages compilés**: C, C++, Rust, Go...

**Langage fonctionnel**: Lisp, Clojure, Haskell, Erlang...

Note: maîtriser au moins deux univers.

===

## Programmation

Développer pour le Big Data c'est:

* Etre fiable
* Etre scalable
* Maîtriser l'algorithmie

===

## Beware!

Le métier de data scientist peut paraître sexy mais:

* Nettoyer des données immondes pour un résultat final nul peut en décourager plus d'un.
* Inutile de vous dire que si vous n’aimez pas le traitement de données, vous n’êtes pas fait pour ça.

===

## Entreprises

Laboratoires de recherche

Linkfluence, MFG Labs, Orange innovation.

Géants de l’Internet.

===

## Teaser

Dans les prochaines semaines, nous allons nous pencher sur:  

1. Le web mining, le crawling, le scraping etc. 
2. La collecte et le traitement de données. 
3. La visualisation de données.
4. L'Open Data

===

## Quelle orientation?

Des sujets vous intéressent-ils particulièrement?

Souhaitez-vous faire un TP concernant une technologie ou une pratique en particulier (indice: pour le Big Data ce n'est pas possible à proprement parler)?

===

## Contact

N’hésitez pas si vous avez des questions ou des difficultés, notamment en programmation/algorithmie dans des projets concernant les sujets du cours:

**Mail**: guillaumeplique // gmail.com

**Github**: [Yomguithereal](https://github.com/Yomguithereal)
