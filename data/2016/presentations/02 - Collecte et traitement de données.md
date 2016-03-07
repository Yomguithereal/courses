# Un Monde de Données

<p align="center">
  Cours n°2: *Collecte et traitement de données*
</p>

===

## Url du cours

[http://yomguithereal.github.io/courses/data/2016/2.html](http://yomguithereal.github.io/courses/data/2016/2.html)

===

## Rappel

* La semaine dernière: le Big Data.
* Gérer techniquement et théoriquement des masses énormes de données
* Certains problèmes peuvent désormais se résoudre grâce à cette manne de données.
* Questions et/ou interrogations?
* Installez OpenOffice, si vous ne l’avez pas déjà.

===

## Travaux pratiques

* Il est malheureusement difficile, pour des raisons relativement évidentes, de faire des TP concernant directement de le Big Data.
* Le cours d’aujourd’hui sera, je l’espère, un peu moins théorique et on devrait avoir le temps de mettre les mains dans le cambouis.

===

## Le menu du jour

* Aujourd’hui, nous allons parler des données elles-mêmes, qu’elles soient ‘big’ ou pas, qu’elle soient ‘propres’ ou pas (c’est à dire?).
* Collecte et traitement de données:  - La logique floue - Le clustering (partitionnement) - Le traitement automatique du langage (TAL) - Le data mining - Le web mining
* Quid de M. Topolov?

===

## Un peu d’étymologie

* Heuristique: (grec ancien « eurisko », trouver) méthode permettant de trouver, stratégie combinatoire, etc.
* En informatique, on parle d’heuristique quand on réussit à résoudre un problème, non en en fournissant une analyse détaillée mais en deployant une méthode efficiente fonctionnant grâce à l’exploitation de motifs connus du problèmes (Oh, my…).
* Démarche de try & error.
* Exemple: polymorphisme complexe.

===

## Polymorphisme

* TODO: Code

===

## Combo

* Herméneutique: science de l’interprétation.
* Concept utilisé parfois en informatique dans les mêmes domaines que heuristique lorsqu’il s’agit, pour la machine, d’interpréter quelque chose qui dépasse ses cadres mathématiques.
* N.B.: en informatique il n’y est rien de non mathématique et cela conduit à une certaine interprétation ou modélisation de la réalité.

===

## Structure

* Données structurées: texte brut de n’importe quel nature.
* Données semi-structurées: données encodées dans un format informatique précis mais sans structure rigide ni schéma précis (du HTML, par exemple).
* Données structurées: données correctement définies par leur format. Un ficher JSON, CSV etc. (à prendre avec des pincettes)

===

## La logique floue

* « Simplement » considérer que certains objets ne sont pas strictement délimités.
* De fait, l’être humain est ainsi fait que les objets intellectuels qu’il manipule au quotidien sont complexes et dépassent la compréhension mathématique de l’ordinateur.
* Exemple: Dupont & dupond.

===

## Un peu d’histoire

* 1965, Lotfi Zadeh, les ensembles flous en algèbre.
* Enoncé: la voiture roule à 96 km/h. Enoncé flou: la voiture roule vite.
* Nous rapproche du fonctionnement cognitif humain.
* De nombreuses applications: assurance, médecine, circulation, robotique, intelligence artificielle et, dans notre cas, traitement de données.

===

## Le fuzzy matching

* Application primaire de la logique floue: comparer des chaînes de charactères.
* Intérêt: la recherche floue, la correction orthographique, le clustering.
* Trois méthodes canoniques (à combiner):    - Les distances mathématiques   - La lemmatisation/racinisation   - Les algorithmes phonétiques

===

## Les distances

* Trouver la distance mathématique entre deux chaînes.
* Il s’agit de trouver un nombre plus ou moins grand représentant la distance théorique à parcourir pour aller d’une chaîne A à une chaîne B.

===

## Levenshtein

* Une distance absolue: Levenshtein (1965)
* Considérant deux chaînes M et P: La distance entre M et P est égale à:   - Nb de substitutions entre M et P   - Nb d’ajout de M vers P   - Nb de suppressions de M   
* Exemple: LD(livre, libre) = 1

===

## Jaro-Winkler

* Problèmes des distances absolues comme celle de Levenshtein: écarts de mesure proportionnels à la taille des chaînes considérées.
* Une distance relative: Jaro-Winkler (1999)
* Plus efficace avec des chaînes courtes et indice de comparaison relatif compris entre 0 et 1.

===

## Jaro-Winkler

* Exemple:  JWD(Duane, Dwayne) = 0.84

===

## La racinisation

* La racinisation (stemming en anglais) consiste à éliminer les désinences et les formes spécifiques de certains mots afin de les réduire à leur racine.
* Exemple: mange, manger, mangeoire se réduisent tous à la racine mange.
* Cela permet de faire de la recherche un peu plus intelligente que de la recherche stricte ou en LIKE.

===

## Porter

* Un des plus célèbres algorithmes de racinisation porte le nom de son inventeur: Martin Porter.
* Il y en existe d’autres, plus ou moins agressifs (le raciniseur ne cherche pas à donner un radical correct mais juste une base permettant de flouter les comparaisons).

===

## Un peu de code?

* Un des plus célèbres algorithmes de racinisations porte le nom de son inventeur: Martin Porter.
* Il y en existe d’autres, plus ou moins agressifs (le raciniseur ne cherche pas à donner un radical correct mais juste une base permettant de flouter les comparaisons).

===

## Limites

* Un raciniseur ne marche que pour une langue donnée et doit être redéveloppé complètement pour en couvrir d’autres.
* Or, cela demande bien plus de compétences que de savoir développer un algorithme. Seul les linguistes sont capables de délimiter les règles morphologiques d’une langue correctement.
* En outre, il est parfois extrêmement difficile de créer des raciniseurs pour certains langages (le français est une horreur, le latin aussi).

===

## Lemmatisation

* Contrairement à la racinisation, la lemmatisation cherche à retrouver le radical (appelé lemme par les linguistes) correct du mot ciblé.
* Impossible à faire correctement avec un algorithme. Nécessite donc un dictionnaire.
* Eternelle opposition de résolution d’un problème au travers de calculs ou des données.

===

## Algorithmes phonétiques

* Objectif d’un algorithme phonétique: produire la représentation phonétique approximative d’un mot.
* Comme pour les raciniseurs, ces derniers fonctionnent en général seulement pour une langue donnée.

===

## Le Soundex

* Historiquement, un des premiers algorithmes phonétiques (utilisé par des bibliothèques avant même leur informatisation).
* Créé dans les années 1920 par Robert Russell et Margaret Ordell.
* Exemple: Robert & Rupert = R163, Rubin = R150
* Tellement connu aujourd’hui qu’un mot clé SQL existe pour s’en servir.
* Limites: Prévu pour fonctionner uniquement sur des noms propres à consonance anglo-saxonne.

===

## Le Métaphone

* Créé par Lawrence Phillips (encore un linguiste) pour pallier aux faiblesses du Soundex.
* Marche sur les mots courants de la plupart des langues européennes (plus le chinois).
* Exemple: Michael, Mickael, Mikael = MKL
* Le double métaphone.
* Exemple: Smith = [SMT, SM0]

===

## Limites

* Ces algorithmes fonctionnent assez mal pour les voyelles qui ne sont que très rarement considérées comme les lettres discriminantes d’un mot.
* Utiliser des dictionnaires reste toujours une possibilité:  En anglais, le Carnegie-Mellon University (CMU) dictionary. ~3/4mo en RAM.

===

## Le clustering

* Partitionnement en français.
* Consiste en la classification d’un jeu de données en rassemblant par groupe les éléments considérés comme proches.
* Exemple: rassembler les mots d’un texte par similarité.

===

## TP n°1: OpenRefine

* OpenRefine (anciennement GoogleRefine) est un programme open source permettant de raffiner et nettoyer des données (le diamant).
* Objectif:  - comprendre comment l’outil fonctionne et ce qu’il peut vous apporter.  - comprendre comment on peut nettoyer des données sales aisément.
* http://yomguithereal.github.io/courses/openrefine/

===

## TP n°1bis: Club 27

* http://yomguithereal.github.io/courses/27club/
* PDF sur l’intranet.

===

## Le TAL

* Was ist das?
* Traitement Automatique du Langage (Natural Language Processing, NLP, en anglais).
* Ensemble de méthodes informatiques permettant de faire sens du langage naturel, c’est à dire notre langage, le langage de l’humain.

===

## Le texte brut

* Le TAL a pour objet le texte brut (données non structurées).
* Objet d’analyse retors.
* Comment découper le texte brute en éléments analysables:  - Les N-grammes - La tokenization - Le POS Tagging

===

## Les N-grammes

* Méthode strictement mathématique et statistique. (n-grams en anglais)
* Sous-séquence de n éléments construite à partir d’une séquence donnée.
* Permet de faire des estimations statistiques bien plus pertinentes sur du texte brut.
* La probabilité des éléments dans le texte est alors dépendante des éléments précédents et suivants.

===

## Exemples

* Bi-grammes, Tri-grammes etc. 
* ‘123456789’
* ’Martin’
* ’Cette phrase est un exemple’.

===

## La tokenization

* Faire d’un amas de texte brut un amas de tokens (jetons).
* 1) Découper le texte en phrases (exemple).
* 2) Découper les phrases en mots.
* 3) Découper les mots en syllabes.
* Première étape nécessaire pour le POS tagging.

===

## Le POS tagging

* Part of Speech tagging (étiquetage morpho-syntaxique en français…)
* Associer aux mots de vos phrases leurs informations grammaticales.
* Exemple: Le chat mange la souris.
* Opération très complexe mais nécessaire lorsqu’il s’agit de tenter de comprendre le sens du texte.

===

## Apprentissage

* Retour au machine learning.
* Il est souvent extrêmement difficile de trouver des règles générales à même de constituer des algorithmes convainquants en TAL.
* Même en combinant des règles à des dictionnaires l’on n’arrive pas toujours à des solutions satisfaisantes.
* Aujourd’hui, on utilise donc énormément le machine learning en TAL.
* On fait ce que l’on appelle de l’apprentissage en taggant à la main beaucoup des corpora existants et on laisse la machine apprendre d’elle même les règles.

===

## Data mining

* Ou exploration de données dans la langue de Molière.
* Discipline consistant à explorer des données afin d’en tirer des informations utiles.
* Très vaste. Croise de nombreuses pratiques comme les statistiques, l’intelligence artificielle, le machine learning etc.

===

## Data mining

* Peut se faire de manière automatique ou semi-automatique. (Si tout est fait à la main on ne parlera que rarement de data mining mais plutot d’analyse au sens classique du terme).
* Exemple: détecter le clientélisme dans les collectivités territoriales.
* Beaucoup de pratiques en analytics procède du data mining: A/B testing, optimisation SEO etc.
* Business Intelligence (BI): tout quantifier et tout stocker pour comprendre ce qui fait le succès ou l’échec d’une stratégie marketing.

===

## Web mining

* Nous allons ainsi nous pencher sur une branche un peu spécifique du data mining: le web mining.
* Fouille du web, dans la langue de Molière.
* Collecte et analyse des données présentes sur le web.

===

## Axes

* En général, on parle de trois axes du web mining:  - Usages du web (très lié aux analytics) - Contenus du web (scraping, en partie) - Structure du web (crawling, en partie)

===

## Les API

* La manière la plus évidente de collecter des données structurées sur Internet: utiliser les API créées à cet effet.
* Exemple: Twitter, Facebook, LinkedIn (ces deux derniers sont de plus en plus complexes à collecter / privés).
* Etudier le développement d’un buzz sur Twitter peut se révéler très intéressant pour la BI. (Théorie de Lazarsfeld sur les leaders d’opinion.)

===

## Mais…

* Tous les sites n’ont pas forcément d’API.
* Certaines API sont limitées.

===

## Le scraping

* To scrape: verbe anglais signifiant gratter, racler.
* Vient plus généralement de l’expression « screen scraping », racler l’écran.
* Désigne l’art d’extraire des données directement depuis leur présentation visuelle.
* Exemple: Un site web est un moyen visuel d’afficher des données à un utilisateur. Scraper ce site c’est extraire les données depuis le HTML lui même.

===

## Le scraping

* Très pratique pour récupérer des données structurées sur Internet là où il n’y existe pas d’API.
* Processus un peu ‘fourbe’ qui procède d’une forme de rétro-ingénierie (désassembleur inversé) (encore une heuristique).
* Hide yo data, bitches! Des données ne sont JAMAIS à l’abri si l’on peut y accéder depuis son navigateur Internet (on ne peut que pourrir la vie des scrapers mais on ne les empêchera que très rarement de fonctionner).

===

## EchoJS

===

## EchoJS

===

## Digression: les REPL

* Concept inventé par le Lisp et utilisé depuis très longtemps par les shells. (En réalité, un shell est une REPL).
* Read Eval Print Loop.
* Console JavaScript du navigateur est une REPL et tant mieux car cela vas nous servir immédiatement.
* Exemple.

===

## TP n°2 - Let’s scrape!

* Du coup, nous allons scraper EchoJS.
* Pour cela nous allons utiliser artoo.js, un petit utilitaire permettant de scraper directement depuis votre navigateur.
* Objectif: Récupérer les données de la première page dans un fichier JSON.
* Bonus: le faire depuis Node.js
* http://yomguithereal.github.io/courses/echojs/

===

## Contre-exemple

* Les API du web sémantique (BNF), par exemple, sont tellement complexes qu’il est souvent plus facile de scraper leur site que de comprendre leur API.
* Le scraping n’est jamais une pratique dénuée d’ironie.
* Exemple: la boîte ou institution incapable de vous mettre à disposition ses données.

===

## Les écueils

* Les serveurs peuvent tenter de vous empêcher de les scraper en détectant votre User-Agent, en vous imposant des quotas ou en vous piègeant dans des tarpits.
* Le markup de la page peut changer dans le temps et casser vos heuristiques.
* Scraping statique vs. dynamique: Emuler un navigateur n’est pas simple (phantomjs).
* L’authentification (essayez de scraper Google ou Facebook, juste pour voir).

===

## Mais c’est légal ça?

* TL;DR: oui et non.
* Le scraping est une question alégale. (Seulement quelques jurisprudences)
* En soit la pratique elle-même est légale. En quoi cela diffère-t-il d’un internaute accédant à des données publiques?
* En réalité c’est la réutilisation des données après qui pose problème. (CGU) (Droit d’auteur)
* Exemple: si vous scrapez les articles du journal le monde pour les revendre dans le votre, ceci est illégal.

===

## Application

* Comparateurs de prix.
* Besoin de données ponctuelles pour pallier à un Open Data déficient.
* Recherche: OMS
* Google est le plus grand scraper du monde et ne se gène vraiment pas… (les cartouches)

===

## Le crawling

* To crawl: verbe anglais signifiant ramper.
* Parcourir le web à l’aide d’un programme (bot, spider) en stockant deux choses: les pages parcourues et les liens entre elles.
* Leur but est d’indexer ‘tout’ ou partie du web.
* Cela va lentement constituer un graphe.
* Une idée d’application?

===

## Exemples

* Depuis Google, les moteurs de recherches sont des crawlers.
* Linkfluence: crawler combiné à de la collecte de données des médias sociaux: ontologie du web business.
* On utilisera un crawler la semaine prochaine pour mieux se familiariser avec le concept.

===

## Digression

* L’encodage d’une réponse HTTP.
* Un travail heuristique.

===

## Un peu d’étymologie

* Téléologie: étude des causes finales. Quelle est l’intention de l’action engagée.

===

## Scraping vs. Crawling

* Deux oppositions différentes:
* 1) Scraping: on souhaite récupérer des données structurées et précises.    Crawling: on souhaite récupérer beaucoup de données non structurées.
* 2) Scraping: juste le processus d’extraction de la donnée depuis sa souche visuelle.    Crawling: le fait d’aller chercher les URLs et de naviguer sur le web.

===

## TP n°3: Scraper l’OGI

* Boss Final: récupérer les données de vos stages de 3A sur l’OGI.
* Harmoniser les entreprises et les catégories afin d’avoir des données propres et exploitables pour les semaines prochaines.
* Bonus: enregistrer les données dans la base NoSQL de votre choix (Neo4J, ArangoDB etc.).

===

## Soon

* La semaine prochaine, nous aborderons la question de la datavisualisation.
* Mail: guillaume.plique@sciencespo.fr
* Github: @Yomguithereal

