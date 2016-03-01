# Un Monde de Données

<p align="center">
  Cours n°1: *Big data etc.*
</p>

===

## Url du cours

[http://yomguithereal.github.io/courses/data/2016/1.html](http://yomguithereal.github.io/courses/data/2016/1.html)

===

## Parcours

Guillaume Plique

#### Formation

* Hypokhâgne
* SciencesPo
* Waseda Daigaku, Tokyo
* HETIC

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

Cela va être dense et parfois même légèrement technique. N’ayez pas peur des **digressions**.

Enfin, faites attention à l’emploi des mots sur lesquels je vais tenter de mettre une définition: ce sont pour la plupart des **buzzwords** rarement utilisés à bon escient.

Note: Oui, on va faire du latin aussi.

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

Mais ‘base de construits’ ne sonnait pas bien.

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
  ![exponent](img/exponent.png)
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

