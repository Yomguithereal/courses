---
layout: page
title: Cours de Perfectionnement (2017)
---

---

## Trame

1. [Collecter des données sur le web](#scrape)
  * [a. Scraper le "cinéma" français](#cinema)
  * [b. Crawler et scraper les publications transparency](#transparency)
  * [c. Le casse-tête HackerNews](#hackernews)
2. [Insérer des données dans une BDD NoSQL](#nosql)
3. [Algorithmie et tests unitaires](#jaccard)
4. [Concevoir une recherche "full-text"](#fulltext)
5. [Développer une API REST et linter son code](#rest)
6. [Développer une app client pour visualiser les données](client)
  * [a. Utiliser webpack](#webpack)
  * [b. React + Redux](#reactredux)
  * [c. Le Hot Module Reload](#hmr)
  * [d. Les visualisation classiques](#viz)
  * [e. Utiliser D3 ou pas](#d3)
  * [f. Visualiser un réseau](#reseau)
7. [Détection de duplicats flous](#recordlinkage)
  * [a. Utiliser OpenRefine](#openrefine)
  * [b. Concevoir un algorithme de partitionnement](#clustering)
  * [c. MinHashing et partitionnement à l'échelle](#minhash)
8. [Les chaînes de Markov](#markov)
  * [a. Manipuler un réseau](#graph)
  * [b. Générer de fausses observations](#observations)
9. [Utiliser un algorithme de machine learning](#ml)
  * [a. Vectoriser des données](#vectorisation)
  * [b. Entraîner un modèle de classification](#modele)

---

## Principes du cours

* Vous choisissez la granularité qui vous intéresse: vous pouvez très bien approfondir au maximum un seul des axes de la trame, ou au contraire tenter de travailler tous les axes
* Vous êtes libres de travailler les sujets dans n'importe quel sens, même si je vous recommande de suivre la trame qui se veut plus ou moins "logique" (et full-stack, tmtc).
* De la même manière, si vous souhaitez approfondir vraiment un domaine (le scraping, par exemple) et que les sujets proposés sont trop faciles, on peut tout à fait les corser.
* Vous êtes libres de constituer des équipes ou bien de travailler seul(e)s.
* Si vous avez en tête des données plus concrètes et plus utiles pour vous que celles que je mets à disposition ou vous demande de récupérer, n'hésitez pas.
* Si vous avez des projets pédagogiques et personnels en rapport avec les sujets du cours et que vous voulez en profiter pour que nous puissions les travailler ensemble, allons-y (en *record linkage*, notamment).
* Si vous trouvez que la présente page n'est pas claire, discutons-en et ouvrons une fusiodemande. De plus, je vais probablement améliorer cette page au cours des deux journées au fur et à mesure que nous aborderons les différents sujets ensemble.
* Si vous avez des questions quand je ne suis pas là, ouvrez une issue sur le repo:

[Repo GitHub](https://github.com/Yomguithereal/courses)

---

## Langages

Vous êtes libres de travailler sur les langages de programmation que vous préférez.

Sachez seulement que je suis plus à même de vous aider sur des langages que je maîtrise (dans l'ordre):

* JavaScript
* Python
* Clojure
* Ruby
* PHP
* Java
* C

---

<h3 id="scrape">1. Collecter des données sur le web</h3>

<h4 id="cinema">a. Scraper le "cinéma" français</h4>

URL: [http://www.cinema-francais.fr/](http://www.cinema-francais.fr/)

**Objectif**: récupérer une liste quelconque (monteurs, scénaristes etc.) et ensuite, si vous en avez envie, scraper une liste éclatée sur plusieurs pages.

**Difficultés**:

* Les données sales (trim, squeeze, parsing)

<h4 id="transparency">b. Crawler et scraper les publications transparency</h4>

URL: [https://www.transparency.org/whatwedo/publications](https://www.transparency.org/whatwedo/publications)

**Objectif**: récupérer la liste des publications ainsi que leurs métadonnées.

**Difficultés**:

* Throttling (le site est loin d'être rapide)
* Faire de la rétro-ingénierie sur une pagination pour la crawler.
* Scraper toutes les pages nécessaires afin de récupérer les données.

<h4 id="hackernews">c. Le casse-tête HackerNews</h4>

URL: [https://news.ycombinator.com/](https://news.ycombinator.com/)

**Objectif**: récupérer les données du site HackerNews.

**Difficultés**:

* Trouver des patterns dans du markup non-cohérent.

---

<h3 id="nosql">2. Insérer des données dans une BDD NoSQL</h3>

**Objectifs**:

1. Choisir une BDD NoSQL que vous souhaitez essayer (une qui soit pertinente et vous devrez justifier votre choix).
2. Y insérer les données que nous avons scrapé de transparency.org.
3. Etre capable de formuler des requêtes pour récupérer les données dont une API pourrait avoir besoin.

TODO: lien vers scraped data

---

<h3 id="jaccard">3. Algorithmie et tests unitaires</h3>

**Objectifs**:

1. Implémenter un index de Jaccard (théorie des ensembles).
2. Ecrire des tests unitaires pour s'assurer de son bon fonctionnement (notion de régression).

TODO: lien

---

<h3 id="fulltext">4. Concevoir une recherche "full-text"</h3>

**Objectifs**:

1. Créer un tokenizer
2. Trouver une liste de stopwords
3. Trouver ou créer un stemmer
4. Concevoir un index inversé
5. Requêter un index inversé
6. Ajouter un poil de logique floue
7. Pour les plus taré(e)s: Fréquences, taille, TF-IDF et similarité cosinus


