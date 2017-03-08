# Un Monde de Données

<p align="center">
  Cours n°2: *Collecte et traitement de données*
</p>

===

## Url du cours

[http://yomguithereal.github.io/courses/data/2017/2.html](http://yomguithereal.github.io/courses/data/2017/2.html)

===

## Préparatifs

Télécharger [LibreOffice](https://fr.libreoffice.org/download/libreoffice-stable/) et [OpenRefine](http://openrefine.org/download.html).

===

## Dans les épisodes précédents

La semaine dernière: Big Data & machine learning.

Gérer techniquement et théoriquement des masses énormes de données.

Certains problèmes peuvent désormais se résoudre grâce à cette manne de données.

===

<h2 style="text-align: center;">Questions? Précisions? Desiderata?</h2>

===

## Travaux pratiques

Il est malheureusement difficile, pour des raisons relativement évidentes, de faire des TP concernant directement de le Big Data.

Le traitement de données, par contre, rien ne nous en empêche!

Le cours d’aujourd’hui sera, je l’espère, un peu moins théorique et on devrait avoir le temps de mettre les mains dans le cambouis.

===

## Le menu du jour

Aujourd’hui, nous allons parler des données elles-mêmes, qu’elles soient "big" ou pas, qu’elle soient "propres" ou pas (c’est à dire?).

1. Le traitement automatique du langage (TAL)
2. La logique floue & le clustering
3. L'information retrieval
4. Le data mining et son rejeton le web mining

===

<p align="center">
  <img src="img/cleese.gif" class="plain" />
</p>

<h2 style="text-align: center;">Un peu d’étymologie!</h2>

===

## L'heuristique

(du grec ancien "euriskein", trouver) méthode permettant de trouver, stratégie combinatoire, etc.

En informatique, on parle d’heuristique quand on réussit à résoudre un problème, non en en fournissant une analyse détaillée mais en deployant une méthode efficiente fonctionnant grâce à l’exploitation de motifs connus du problèmes (Oh, my…).

Démarche de try & error.

===

## L'heuristique

2 exemples:

1. Déterminer l'encodage d'une réponse HTTP
2. Le polymorphisme

===

## Encodage réponse HTTP

Comment savoir si la réponse est encodée en `UTF-8` ou en `ISO-8859-1`?

1. Le header `Content-Type`
2. Le meta charset dans le HTML
3. Regarder les charactères et détecter un pattern.

===

## Le polymorphisme

```js
// Exemple de fonction polymorphique et inutile
function comment(target) {

  if (typeof target !== 'object')
    return 'Pouah, je n\'aime pas cela!';
  if (target.animal)
    return `Quel joli ${target.animal} ${target.color || 'jaune'}!`;
  if (target.repas === 'gateau')
    return `J'aime les gateaux aux ${target.fruit}s!`;

  return 'What the fuck dude!';
}

comment('bullshit');
comment({animal: 'lapin', color: 'bleu'});
comment({repas: 'gateau', fruit: 'pomme'});
comment({hello: 'you'});
comment({repas: 'gateau', animal: 'lapin'});
```

Le typage statique.

===

## Combo: L'heuristique

Si une startup vous parle d'"intelligence artificielle", prenez les temps de vous interroger sur son fonctionnement.

Si celle-ci n'est qu'une succession glorifiée de conditions, alors c'est une heuristique.

Une heuristique peut être fort intelligente, mais là n'est pas la question.

===

## Combo breaker
## Arité & variadisme

```js
// Cette fonction a une arité de 2
function add(a, b) {
  return a + b;
}

// Cette fonction est variadique
function greet() {
  var names = Array.prototype.slice.call(arguments);

  names.forEach(function(name) {
    console.log(`Hello ${name}!`);
  });
}

// Bonus ES6:
function greet(...names) {}
```

===

## Ultra-kill: l'herméneutique

Science de l’interprétation.

Concept utilisé parfois en informatique dans les mêmes domaines que l'heuristique lorsqu’il s’agit, pour la machine, d’interpréter quelque chose qui dépasse ses cadres mathématiques.

N.B.: en informatique il n’y est rien de non mathématique et cela conduit à une certaine interprétation ou modélisation de la réalité.

===

## Dernière étape:
## La notion de structure

Données **non structurées**: texte brut de n’importe quelle nature.

Données **semi-structurées**: données encodées dans un format informatique précis mais sans structure rigide ni schéma précis (du HTML, par exemple).

Données **structurées**: données correctement définies par leur format. Un ficher JSON, CSV etc. (à prendre avec des pincettes)

===

# Le traitement automatique du langage

===


<!-- .slide: data-background="img/tal.jpg" -->

===

## Le TAL

Was ist das?

"Traitement Automatique du Langage" (*Natural Language Processing*, NLP, en anglais).

Ensemble de méthodes informatiques permettant de "comprendre" ou analyser le langage naturel, c’est à dire notre langage, le langage de l’humain.

===

## La lexicométrie

Science étudiant le texte de manière strictement statistique.

Compter les occurrences, co-occurrences de certains mots, par exemple.

1. Les N-grammes
2. La loi de Zipf et TF/IDF
3. La cryptanalyse

===

## Les N-grammes

Méthode strictement mathématique et statistique. (n-grams en anglais)

Sous-séquence de n éléments construite à partir d’une séquence donnée.

Permet de faire des estimations statistiques bien plus pertinentes sur du texte brut.

La probabilité des éléments dans le texte est alors dépendante des éléments précédents et suivants.

===

## Exemples

Bi-grammes, Tri-grammes etc. 

* "123456789"
* "Martin"
* "Cette phrase est un exemple".

===

## La loi de Zipf

Observation sur la distribution des mots d'un texte.

Comptons les occurrences (James Joyce, Ulysses).

Le mot le plus courant revient ~8000 fois.

Le dixième mot le plus courant ~800 fois.

Le centième ~80 fois. etc.

===

<p align="center">
  <img src="img/zipf.png" class="plain" />
</p>

===

## TF / IDF

*Term Frequency - Inverse Document Frequency*

Considérons un corpus de textes composé de plusieurs documents.

`TF` = nombre d'occurence d'un terme dans le texte considéré.

`IDF` = logarithme de l'inverse du nombre de documents du corpus contenant le terme.

===

## TF / IDF

Pour simplifier: plus un terme est fréquent dans un document mais moins il est fréquent dans le corpus, plus son importance et sa pertinence pour la compréhension de ce document est grande.

Ceci est justifié empiriquement *a posteriori* par la loi de Zipf.

**Exemple**: les articles et les mots de liaison (la notion de *stopwords*).

===

## La cryptanalyse

Analyse lexicométrique du cyphertext afin de percer ses secrets.

L'encryption XOR.

Comment percer une encryption XOR en ayant que le ciphertext?

`ETAOIN SHRDLU` (rien à voir avec Cthulhu!)

===

<!-- .slide: data-background="img/voynich.png" -->

===

## Le manuscrit de Voynich

Manuscrit illustré anonyme écrit dans un alphabet inconnu.

Découvert par Wilfrid M. Voynich en 1912.

Plus ancienne mention historique du manuscrit en 1639.

Datation: XVème siècle.

===

## L'auteur se paye-t-il notre pomme?

Comment savoir si le livre est un canular élaboré ou pas?

Combinaison de lexicométrie et de cryptanalyse.

===

## Que sait-on?

La distribution des mots suit la loi de Zipf.

TF / IDF montre qu'il existe des sujets par section.

Il n'y a pas vraiment de ponctuation.

Il existe des structures morphologiques.

L'ordre des mots semble de faible importance.

===

## Pour aller plus loin

Un bref état de l'art [ici](http://www.aclweb.org/anthology/W11-1511?notdup).

===

## Le texte brut

Le TAL a pour objet le texte brut (données non structurées).

Objet d’analyse retors.

Comment découper le texte brut en éléments analysables?

1. La tokenization 
2. Le POS Tagging

===

## La tokenization

Faire d’un amas de texte brut un amas de tokens (jetons).

1. Découper le texte en phrases (exemple).
2. Découper les phrases en mots.
3. Découper les mots en syllabes.

Première étape nécessaire pour le POS tagging.

===

## Le POS tagging

Part of Speech tagging (étiquetage morpho-syntaxique en français…)

Associer aux mots d'une phrases leurs informations grammaticales.

**Exemple**: Le chat mange la souris.

Opération très complexe mais nécessaire lorsqu’il s’agit de tenter de comprendre le sens du texte.

===

## Le sentiment analysis

Aussi appelé *opinion mining*.

Essayer de déterminer ce que ressentent ou pensent les gens ayant écrit le texte.

**Exemple**: tenter de mesurer si les gens sont plutôt contents ou mécontents lorsqu'ils évoquent la politique du gouvernement sur Twitter.

Peu développé scientifiquement. Encore trop heuristique aujourd'hui pour fonctionner de manière suffisamment satisfaisante.

===

## Apprentissage

Il est extrêmement difficile de trouver des règles tout à fait générales en TAL.

Même en combinant des règles à des dictionnaires on n’arrive pas toujours à des solutions satisfaisantes.

Cependant, il est possible d'arriver à des résultats satisfaisants sur des typologies de corpus (pluriel?) précis.

Pour résumer, il est difficile de s'abstraire complètement du matériau analysé pour devenir purement générique.

===

## Apprentissage

Aujourd’hui, on utilise donc énormément le machine learning en TAL.

On fait ce que l’on appelle de l’apprentissage, en taggant à la main beaucoup des corpora (la solution) existants et on laisse la machine apprendre d’elle même les règles ou du moins les appliquer sur les corpora suivants.

Un perceptron marche par exemple très bien pour créer un POS Tagger.

===

# La logique floue

===

<!-- .slide: data-background="img/perceval.jpg" -->

===

## La logique floue

"Tout simplement" considérer que certains objets ne sont pas strictement délimités.

De fait, l’être humain est ainsi fait que les objets intellectuels qu’il manipule au quotidien sont complexes et dépassent la compréhension mathématique de l’ordinateur.

===

## Un peu d’histoire

1965, Lotfi Zadeh, les ensembles flous en algèbre.

**Enoncé**: la voiture roule à 96 km/h. 

**Enoncé flou**: la voiture roule vite.

Nous rapproche du fonctionnement cognitif humain.

De nombreuses applications: assurance, médecine, circulation, robotique, intelligence artificielle et, dans notre cas, traitement de données.

===

## Le fuzzy matching

Application primaire de la logique floue: comparer des chaînes de charactères.

Intérêts: la recherche floue, la correction orthographique, le clustering.

Quatre méthodes canoniques (à combiner):  

1. La normalisation
2. Les distances mathématiques 
3. La lemmatisation/racinisation 
4. Les algorithmes phonétiques

===

## La normalisation

Dupond & dupond.

Normaliser une chaîne de charactère pour faciliter les comparaisons.

* Harmoniser la casse
* Supprimer les accents
* Harmoniser les charactères unicodes (guillemets, apostrophes)
* Elaguer lea chaîne
* Compresser les espaces
* ...

===

## Le fingerprinting

```js
'University of north Carolina'
'University of of North Carolina.'
'Carolina, North university of'

>>> 'carolina north of university'
```

Encore plus aggressif que la normalisation.

* Tokénisation (spoiler)
* Déduplication
* Tri des tokens

Pour essayer, cliquez [ici](http://yomguithereal.github.io/talisman/keyers#fingerprint).

===

## Les distances

Dupont & Dupont.

Trouver une distance mathématique entre deux chaînes.

Il s’agit de trouver un nombre plus ou moins grand représentant la distance théorique à parcourir pour aller d’une chaîne A à une chaîne B.

===

<p align="center">
  <img src="img/distance.png" class="plain" />
</p>

===

## Levenshtein

Une distance absolue: Levenshtein (1965)

Considérant deux chaînes `M` et `P`: La distance entre `M` et `P` est égale à: 

1. Nb de substitutions entre `M` et `P `
2. Nb d’ajout de `M` vers `P `
3. Nb de suppressions de `M`

```
LD(livre, libre) = 1
LD(ivre, libre) = 2
```

Pour essayer, cliquez [ici](https://yomguithereal.github.io/talisman/metrics/distance#levenshtein).

===

## Jaccard

Problèmes des distances absolues comme celle de Levenshtein: écarts de mesure proportionnels à la taille des chaînes considérées.

<p align="center">
  <img src="img/jaccard.png" class="plain" />
</p>

Notion de distance ou de similarité (l'inverse).

===

## Jaccard

1. Prenons un mot `A` "context" et un mot `B` "contact".
2. Ensembles de charactères de `A` et de `B`.
  * `EA` = `{c o n t e x}`
  * `EB` = `{c o n t a}`
3. Calculons la taille de l'intersection de `EA` et `EB`.
  * `I` = `{c o n t} => 4`
4. Calculons la taille de l'union de `EA` et `EB`.
  * `U` = `{c o n t e x a} => 7`
5. Alors l'indice de Jaccard de `A` et de `B` est égal à:
  * `J = I/U => 4/7`

===

## Jaro-Winkler

Une autre distance relative: Jaro-Winkler (1999)

Plus efficace avec des chaînes courtes et indice de comparaison relatif compris entre 0 et 1.

<p align="center">
  <img src="img/jaro.png" class="plain" />
</p>

<p align="center">
  <img src="img/winkler.png" class="plain" />
</p>

* **Exemple**:   `JWD(Duane, Dwayne) = 0.84`

===

## La racinisation

La racinisation (*stemming* en anglais) consiste à éliminer les désinences et les formes spécifiques de certains mots afin de les réduire à leur racine.

**Exemple**: "mange", "manger", "mangeoire" se réduisent tous à la racine "mange".

Cela permet de faire de la recherche un peu plus intelligente que de la recherche stricte ou en `LIKE` (SQL quand tu nous tiens).

===

## Porter

Un des plus célèbres algorithmes de racinisation porte le nom de son inventeur: Martin Porter (un linguiste).

Pour l'essayer, cliquez [ici](http://yomguithereal.github.io/talisman/stemmers/#porter).

Il y en existe d’autres, plus ou moins agressifs (le raciniseur ne cherche pas à donner un radical correct mais juste une base permettant de flouter les comparaisons).

Des problèmes?

===

```clojure
(ns clj-fuzzy.porter
  (:require clojure.string)
  (:use [clj-fuzzy.helpers :only [re-test? chop]]))

;;-----------------
;; Stemmer's lists
;;-----------------
(defn- make-suffixes [& strings]
  (re-pattern (str "(" (clojure.string/join "|" strings) ")$")))

(def ^:private step-2-suffixes
  (make-suffixes "ational" "tional" "enci" "anci" "izer" "bli"
                 "alli" "entli" "ousli" "ization" "ation" "ator"
                 "alism" "iveness" "fulness" "ousness" "aliti"
                 "iviti" "biliti" "logi"))

(def ^:private step-3-suffixes
  (make-suffixes "icate" "ative" "alize" "iciti" "ical" "ful" "ness"))

(def ^:private step-4-suffixes
  (make-suffixes "al" "ance" "ence" "er" "ic" "able" "ible" "ant"
                 "ement" "ment" "ent" "ou" "ism" "ate" "iti" "ous"
                 "ive" "ize"))

(def ^:private step-2-map {"ational" "ate"
                           "tional" "tion"
                           "enci" "ence"
                           "anci" "ance"
                           "izer" "ize"
                           "bli" "ble"
                           "alli" "al"
                           "ization" "ize"
                           "ation" "ate"
                           "ator" "ate"
                           "alism" "al"
                           "iveness" "ive"
                           "fulness" "ful"
                           "ousness" "ous"
                           "aliti" "al"
                           "iviti" "ive"
                           "biliti" "ble"
                           "logi" "log"})

(def ^:private step-3-map {"icate" "ic"
                           "ative" ""
                           "alize" "al"
                           "iciti" "ic"
                           "ical" "ic"
                           "ful" ""
                           "ness" ""})

;;---------
;; Regexes
;;---------
(def ^:private c "[^aeiou]")
(def ^:private v "[aeiouy]")
(def ^:private cc (str c c "*"))
(def ^:private vv (str v v "*"))

(defn- re-test-fn [pattern-string]
  (fn [string] (re-test? (re-pattern pattern-string) string)))

(def ^:private mgr0?
  (re-test-fn (str "^(" cc ")?" vv cc)))
(def ^:private meq1?
  (re-test-fn (str "^(" cc ")?" vv cc "(" vv ")?$" )))
(def ^:private mgr1?
  (re-test-fn (str "^(" cc ")?" vv cc vv cc)))
(def ^:private vowel-in-stem?
  (re-test-fn (str "^(" cc ")?" v)))
(def ^:private steps?
  (re-test-fn (str "^" cc v "[^aeiouwxy]$")))

;;-----------
;; Utilities
;;-----------
(defn- remove-last-of [string kind]
  (let [index (.lastIndexOf string kind)]
    (if (neg? index)
      string
      (str (subs string 0 index) (subs string (+ index (count kind)))))))

(defn $match [regex word]
  (let [[matched group1 :as found] (re-find regex word)]
    (if-not (nil? found)
      [(remove-last-of word (str matched)) group1]
      [nil nil])))

;;-------
;; Steps
;;-------
(defn- step-0 [word]
  (if (re-test? #"^y" word)
    (clojure.string/capitalize word)
    word))

(defn- step-1a [word]
  (let [[f1 v1] ($match #"(ss|i)es$" word)
        [f2 v2] ($match #"([^s])s$" word)]
    (cond
      f1 (str f1 v1)
      f2 (str f2 v2)
      :else word)))

(defn- step-1b-1 [word]
  (if (mgr0? (subs word 0 (- (count word) 3)))
    (chop word)
    word))

(defn- step-1b-2 [word]
  (let [[stem _] ($match #"(ed|ing)$" word)]
    (if (vowel-in-stem? stem)
      (cond
        (re-test? #"(at|bl|iz)$" stem) (str stem "e")
        (re-test? #"([^aeiouylsz])\1$" stem) (chop stem)
        (steps? stem) (str stem "e")
        :else stem)
      word)))

(defn- step-1b [word]
  (cond
    (re-test? #"eed$" word) (step-1b-1 word)
    (re-test? #"(ed|ing)$" word) (step-1b-2 word)
    :else word))

(defn- step-1c [word]
  (let [f (re-find #"y$" word)
        stem (chop word)]
    (if (and f (vowel-in-stem? stem))
      (str stem "i")
      word)))

(defn- step-23-procedure [word regex step-map]
  (let [[stem suffix] ($match regex word)]
    (if (and stem (mgr0? stem))
      (str stem (get step-map suffix))
      word)))

(defn- step-2 [word]
  (step-23-procedure word step-2-suffixes step-2-map))

(defn- step-3 [word]
  (step-23-procedure word step-3-suffixes step-3-map))

(defn- step-4a [word]
  (let [[stem suffix] ($match #"(s|t)(ion)$" word)
        ss (str stem suffix)]
    (if (and stem (mgr1? ss))
      ss
      word)))

(defn- step-4 [word]
  (let [[stem suffix] ($match step-4-suffixes word)]
    (if (and stem (mgr1? stem))
      stem
      (step-4a word))))

(defn- step-5a [word]
  (if (re-test? #"e$" word)
    (let [stem (chop word)]
      (if (or (mgr1? stem)
              (and (meq1? stem)
                   (not (steps? stem))))
        stem
        word))
    word))

(defn- step-5b [word]
  (if (and (re-test? #"ll$" word) (mgr1? word))
    (chop word)
    word))

(defn- step-5c [word]
  (if (= "Y" (first word))
    (str "y" (drop 1 word))
    word))

;;-----------------
;; Public function
;;-----------------
(defn stem [word]
  (if (< (count word) 3)
    word
    (-> (clojure.string/lower-case word)
        step-0
        step-1a step-1b step-1c
        step-2
        step-3
        step-4
        step-5a step-5b step-5c)))
```

===

## Limites

Un raciniseur ne marche que pour une langue donnée et doit être redéveloppé complètement pour en couvrir une autre (quasiment).

Or, cela demande bien plus de compétences que de savoir développer un algorithme. Seul les linguistes sont capables de délimiter les règles morphologiques d’une langue correctement.

En outre, il est parfois extrêmement difficile de créer des raciniseurs pour certains langages (le français est une horreur, le latin aussi).

===

## Lemmatisation

Contrairement à la racinisation, la lemmatisation cherche à retrouver le radical (appelé lemme par les linguistes) correct du mot ciblé.

Impossible à faire correctement avec un algorithme. Nécessite donc un dictionnaire.

===

## Algorithmes phonétiques

**Objectif**: produire la représentation phonétique approximative d’un mot.

Comme pour les raciniseurs, ces derniers fonctionnent en général seulement pour une langue donnée.

===

## Le Soundex

Historiquement, un des premiers algorithmes phonétiques (utilisé par des bibliothèques avant même leur informatisation).

Créé dans les années 1920 par Robert Russell et Margaret Ordell.

**Exemple**: Robert & Rupert = `R163`, Rubin = `R150`

Pour l'essayer, cliquez [ici](http://yomguithereal.github.io/talisman/phonetics/#soundex).

===

## Le Soundex

Tellement connu aujourd’hui qu’un mot clé SQL existe pour s’en servir et que certaines personnes emploient le mot pour désigner les algorithmes phonétiques en général. (Synecdoque & métonymie, la récursion).

Limites: Prévu pour fonctionner uniquement sur des noms propres à consonance anglo-saxonne.

===

## Le Métaphone

Créé par Lawrence Phillips (encore un linguiste) pour pallier aux faiblesses du Soundex.

Marche sur les mots courants de la plupart des langues européennes (plus le chinois).

**Exemple**: "Michael", "Mickael", "Mikael" = `MKL`

Le double métaphone.

**Exemple**: "Smith" = [`SMT`, `SM0`]

Pour l'essayer, cliquez [ici](http://yomguithereal.github.io/talisman/phonetics/#metaphone).

===

## Limites

Ces algorithmes fonctionnent assez mal pour les voyelles qui ne sont que très rarement considérées comme les lettres discriminantes d’un mot.

Utiliser des dictionnaires reste toujours une possibilité: 

En anglais, le Carnegie-Mellon University (CMU) dictionary. ~3/4mo en RAM.

===

## Provençal le gaulois

Utiliser une combinaison de toutes les méthodes que l'on vient de voir.

===

## Bonus: les inflecteurs

Algorithmes dont le but est d'"infléchir" des formes grammaticales.

Conjuguer des verbes, par exemple, ou bien passer un forme du singulier vers le pluriel etc.

===

## Le clustering

Partitionnement en français.

Consiste en la classification d’un jeu de données en rassemblant par groupe les éléments considérés comme proches.

**Exemple**: rassembler les mots d’un texte par similarité.

===

## OpenRefine

**OpenRefine** (anciennement GoogleRefine) est un programme open source permettant de raffiner et nettoyer des données (le diamant).

<p align="center">
  <img src="img/openrefine.png" width="300px" class="plain" />
</p>

===

## TP n°1: OpenRefine

**Objectifs**: 

1. comprendre comment l’outil fonctionne et ce qu’il peut vous apporter. 
2. comprendre comment on peut nettoyer des données sales aisément.
3. Utiliser du clustering et des algorithmes de logique floue.

[./tp/openrefine.html](./tp/openrefine.html)

===

## TP n°1 bis: Club 27

[./tp/27club.html](./tp/27club.html)

===

# 3. Le data mining

===

## Data mining

Ou "exploration de données" dans la langue de Molière.

Discipline consistant à explorer des données afin d’en tirer des informations utiles.

Champ très vaste. Croise de nombreuses pratiques comme les statistiques, l’intelligence artificielle, le machine learning etc. (Quand on vous dit que tous les concepts se croisent)

===

## Data mining

Peut se faire de manière automatique ou semi-automatique. (Si tout est fait à la main on ne parlera que rarement de data mining mais plutot d’analyse au sens classique du terme).

**Exemple**: détecter le clientélisme dans les collectivités territoriales.

Beaucoup de pratiques en analytics procède du data mining: A/B testing, optimisation SEO etc.

===

## Business Intelligence

Business Intelligence (BI): tout quantifier et tout stocker pour comprendre ce qui fait le succès ou l’échec d’une stratégie marketing.

C'est aussi parfois une forme de data mining.

===

## Web mining

Penchons nous sur une branche spécifique du data mining: le web mining.

"Fouille du web", dans la langue de Molière.

Collecte et analyse des données présentes sur le web.

===

## Axes

En général, on parle de trois axes du web mining:  

1. Usages du web (très lié aux analytics) 
2. Contenus du web (scraping, en partie) 
3. Structure du web (crawling, en partie)

===

## Les APIs

La manière la plus évidente de collecter des données structurées sur Internet c'est d'utiliser les API créées à cet effet.

**Exemple**: Twitter, Facebook, LinkedIn (ces deux derniers sont de plus en plus complexes à collecter / privés).

Etudier le développement d’un buzz sur Twitter peut se révéler très intéressant pour la BI. (Théorie de Lazarsfeld sur les leaders d’opinion.)

===

## Mais…

Tous les sites n’ont pas forcément d’API.

Certaines API sont limitées (contenu inaccessible, rate limit etc.).

===

<p align="center">
  <img src="img/tweet.png" class="plain" />
</p>

===

## Le scraping

To scrape: verbe anglais signifiant gratter, racler.

Vient plus généralement de l’expression "screen scraping", racler l’écran.

Désigne l’art d’extraire des données directement depuis leur présentation visuelle.

**Exemple**: Un site web est un moyen visuel d’afficher des données à un utilisateur. Scraper ce site c’est extraire les données depuis le HTML lui même.

===

## Le scraping

Très pratique pour récupérer des données structurées sur Internet là où il n’y existe pas d’API.

Processus un peu "fourbe" qui procède d’une forme de rétro-ingénierie (désassembleur inversé) (encore une heuristique).

Hide yo data, bitches! Des données ne sont JAMAIS à l’abri si l’on peut y accéder depuis son navigateur Internet (on ne peut que pourrir la vie des scrapers mais on ne les empêchera que très rarement de fonctionner).

===

## EchoJS

<p align="center">
  <img src="img/echojs.png" class="plain" />
</p>

===

## EchoJS

<p align="center">
  <img src="img/inspector.png" class="plain" />
</p>

===

## Digression: les REPL

Concept inventé par le Lisp et utilisé depuis très longtemps par les shells. (En réalité, un shell est une REPL).

**R**ead **E**val **P**rint **L**oop.

Console JavaScript du navigateur est une REPL et tant mieux car cela va nous servir immédiatement!

===

## TP n°2 - Let’s scrape!

Du coup, nous allons scraper EchoJS.

Pour cela nous allons utiliser [artoo.js](https://yomguithereal.github.io/artoo), un petit utilitaire (bookmarklet) permettant de scraper directement depuis votre navigateur.

**Objectif**: Récupérer les données de la première page dans un fichier JSON.

**Bonus**: le faire depuis Node.js ou un autre langage de script.

[./tp/echojs.html](./tp/echojs.html)

===

## JavaScript ninja casting

```js
const number = +variable;
const boolean = !!variable;
const string = '' + variable;

const floored = variable | 0;

const magicBoolean = ~array.indexOf();
```

Le duck typing.

===

## Contre-exemple

Les API du web sémantique (BNF), par exemple, sont tellement complexes qu’il est souvent plus facile de scraper leur site que de comprendre leur API.

Le scraping est une pratique qui n'est jamais dénuée d’ironie.

**Exemple**: l'entreprise ou institution incapable de vous mettre à disposition ses données.

===

<h2 style="text-align: center;">Comment emmerde-t-on les scrapers?</h2>

===

## Les écueils

Les serveurs peuvent tenter de vous empêcher de les scraper en détectant votre `User-Agent`, en vous imposant des quotas ou en vous piègeant dans des tarpits.

**Solution**: le spoofing, le throttling.

===

## Les écueils

Scraping statique vs. dynamique: Emuler un navigateur n’est pas simple.

L’authentification (essayez de scraper Google ou Facebook, juste pour voir).

**Solution**: phantomjs, electron, jsdom etc.

===

## Les écueils

Le markup de la page peut changer dans le temps et casser vos heuristiques.

**Solution**: menacer les webmasters responsables.

**Bonus**: le markup obfusqué.

===

## Mais c’est légal ça?

===

**TL;DR**: oui et non.

Le scraping est une question alégale. (Seulement quelques jurisprudences)

En soit la pratique elle-même est légale. En quoi cela diffère-t-il d’un internaute accédant à des données publiques (vous avez juste codé un stagiaire)?

En réalité c’est la réutilisation des données après qui pose problème. (CGU) (Droits d’auteur)

**Exemple**: si vous scrapez les articles d'un journal pour les revendre dans le votre, ceci est illégal.

===

## Application

* Comparateurs de prix.
* Besoin de données ponctuelles pour pallier à un Open Data déficient.
* Recherche: OMS
* Google est le plus grand scraper du monde et ne se gène vraiment pas… (les encarts)

===

## Le crawling

*To crawl*: verbe anglais signifiant ramper.

Parcourir le web à l’aide d’un programme (bot, spider) en stockant deux choses: les pages parcourues et les liens entre elles.

Leur but est d’indexer "tout" ou partie du web.

Cela va lentement constituer un graphe.

Une idée d’application?

===

## Exemples

Depuis Google, les moteurs de recherches sont des crawlers.

Linkfluence: crawler combiné à de la collecte de données des médias sociaux: ontologie du web business.

===

<!-- .slide: data-background-iframe="http://hyphe.medialab.sciences-po.fr/" -->

===

[Link](http://hyphe.medialab.sciences-po.fr/)

===

## Scraping vs. Crawling

Deux oppositions différentes:

1. **Scraping**: on souhaite récupérer des données structurées et précises. <br>**Crawling**: on souhaite récupérer beaucoup de données non structurées.
<hr>
2. **Scraping**: juste le processus d’extraction de la donnée depuis sa souche visuelle. <br>**Crawling**: le fait d’aller chercher les URLs et de naviguer sur le web.

===

## robots.txt

Juste une convention...

Personne ne vous oblige à le respecter.

===

## Soon

La semaine prochaine, nous aborderons la question de la **datavisualisation**.

**Mail**: guillaumeplique // gmail.com

**Github**: [Yomguithereal](https://github.com/Yomguithereal)

