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

## Des questions?

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

===

# 1. Le Record Linkage

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
* Elaguer les chaînes
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

* Tokénisation
* Déduplication
* Tri des tokens

Pour essayer, cliquez [ici](http://yomguithereal.github.io/talisman/keyers#fingerprint).

===

## Les distances

Dupond & Dupont.

Trouver une distance mathématique entre deux chaînes.

Il s’agit de trouver un nombre plus ou moins grand représentant la distance théorique à parcourir pour aller d’une chaîne A à une chaîne B.

===

<p align="center">
  <img src="img/distance.png" class="plain" />
</p>

===

## Levenshtein

Une distance absolue: Levenshtein (1965)

Considérant deux chaînes `M` et `P`:La distance entre `M` et `P` est égale à:

1. Nb de substitutions entre `M` et `P`
2. Nb d’ajout de `M` vers `P`
3. Nb de suppressions de `M`

```
LD(livre, libre) = 1
LD(ivre, libre) = 2
```

Pour essayer, cliquez [ici](https://yomguithereal.github.io/talisman/metrics/distance#levenshtein).

===

## Damerau-Levenshtein

Ajoutons la transposition au nombre des opérations possibles.

En anglais, 90% des fautes d'orthographe se trouvent à une distance de Damerau-Levenshtein de 1 de leur version corrigée.

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

* **Exemple**: `JWD(Duane, Dwayne) = 0.84`

===

## La racinisation

La racinisation (*stemming* en anglais) consiste à éliminer les désinences et les formes spécifiques de certains mots afin de les réduire à leur racine.

**Exemple**: "mange", "manger", "mangeoire" se réduisent tous à la racine "mange".

Cela permet de faire de la recherche un peu plus intelligente que de la recherche stricte ou en `LIKE`.

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

**Exemple**: trouver des doublons flous dans des données (record linkage).

===

## Le clustering

Plusieurs approches:

1. La matrice
2. L'indexation
3. L'approximation
4. etc. (Boss final si on a le temps)

===

## OpenRefine

**OpenRefine** (anciennement GoogleRefine) est un programme open source permettant de raffiner et nettoyer des données (le diamant).

<p align="center">
  <img src="img/openrefine.png" width="300px" class="plain" />
</p>

===

## OpenRefine

[Lien](http://openrefine.org/download.html)

===

## TP: OpenRefine

**Objectifs**:

1. comprendre comment l’outil fonctionne et ce qu’il peut vous apporter.
2. comprendre comment on peut nettoyer des données sales aisément.
3. Utiliser du clustering et des algorithmes de logique floue.

[Lien du TP](../../data/2016/tp/openrefine.html)

===

## TP: Club 27

[Lien du TP](../../data/2016/tp/27club.html)

===

## Boss de fin: MinHash

* Text et n-grammes
* Jaccard et MinHash
* MinHash clustering

===

# 2. L'Information Retrieval

===

## Information retrieval?

Discipline consistant en l'organisation de données peu ou pas structurées (surtout du langage naturel) dans des structures permettant de les requêter efficacement et de manière pertinente.

Donc surtout:

1. l'indexation
2. les algorithmes de requêtage.

Moteurs de recherche, indexation *full-text*.

Lucene, ElasticSearch, Solr etc.

===

## L'index inversé

Comment fonctionnent les moteurs de recherche *full-text*.

Ce sont en général des `MultiMap`.

1. On tokenize le texte.
2. On filtre certains tokens (stopwords, par exemple)
3. On floute les tokens (stemmers, phonétique, normalisation etc.)
4. Pour chaque token, on associe le document au token dans l'index.

===

```js
// Documents
{id: 1, text: 'Le chat mange la souris.'}
{id: 2, text: 'La souris mange le fromage.'}
{id: 3, text: 'Le gateau au fromage'}

// Index
{
  chat: {1},
  mange: {1, 2},
  souris: {1, 2},
  fromage: {2, 3},
  gateau: {3}
}
```

===

## Comment requêter?

On applique les mêmes transformations à la requête et on fait l'intersection des documents.

Exemple sur le cas précédent.

Possibilité de stocker plus d'information comme des positions (pour le highlight et les requêtes d'expression) ou des scores de pertinence (que l'on va voir un peu plus tard).

===

## Requêtes floues

On a une `MultiMap` avec des accès en `O(1)`.

Comme on l'a vu précédemment, dès qu'on veut calculer des distances cela se complique, surtout lorsque l'on veut éviter de coûteux calculs en `O(n)`.

Structures de données dédiées que l'on va interroger en amont de l'index inversé (BK-Tree, SymSpell, Levenshtein automata etc.).

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


