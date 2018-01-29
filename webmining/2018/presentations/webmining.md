# Webmining

<p align="center">
  *Scraping, crawling et autres fantaisies...*
</p>

===

## Url du cours

[http://yomguithereal.github.io/courses/webmining/2018](http://yomguithereal.github.io/courses/webmining/2018)

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

Le **webmining**. Au travers des pratiques suivantes:

* Le scraping.
* Le crawling.
* La collecte de données via les APIs.

===

Qui en a entendu parler?

===

Qui a déjà pratiqué?

===

## Méthodologie du cours

Peu question ici de théorie.

On va surtout pratiquer et mettre les mains dans le cambouis, plutôt que de gloser.

On ne va pas non plus parler de l'analyse des données collectées. Vous avez normalement d'autres cours pour cela.

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
* PHP
* Java

===

## Github & Slack

Avez-vous tous un compte github ou équivalent.

Pratique pour moi pour faire la revue de votre code si besoin.

Je suis aussi disponible sur Slack pour toute question.

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

Le cours est en Open Source [ici](https://github.com/Yomguithereal/courses).

N'hésitez pas à ouvrir une PR pour le corriger ou ajouter des précisions si vous trouvez le contenu trop lacunaire.

===

## Des question?

Avant que l'on commence?

===

## Le webmining

Le webmining est une branche spécifique du datamining.

"Fouille du web", dans la langue de Molière.

**Collecte** et **analyse** des données présentes sur le web.

===

## Pourquoi?

De nombreuses données sont présentes sur le web. Il serait dommage de ne pas exploiter cette manne.

Pour le marketing et les sciences humaines, le web a une spécificité intéressante:

Contrairement aux données recueillies lors de questionnaires/entretiens, les gens produisent spontanément des contenus.

Ceci contourne les limites de la méthodologie classique. Il devient possible d'analyser quantitativement le champ social plutôt aisément.

===

## Axes

En général, on parle de trois axes du web mining:  

1. Usages du web (très lié aux analytics)  ✗
2. Contenus du web (scraping, en partie) ✓ 
3. Structure du web (crawling, en partie) ✓

===

# Les technos web

<p align="center">
  *Quelques rappels concernant les technos web...*
</p>

===

## Rappels

* La résolution DNS
* Le client/serveur
* HTTP
* Le HTML, le CSS, le templating
* L'authentification, les cookies
* Les formulaires
* L'ajax
* Les scripts

===

# Le scraping

<p align="center">
  *De l'art de récupérer des données structurées dans la fange visuelle du web...*
</p>

===

## Les APIs web

La manière la plus évidente de collecter des données structurées sur Internet c'est d'utiliser les API créées à cet effet.

**Exemple**: Twitter, Facebook, LinkedIn.

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

Désigne l’art d’extraire des données directement depuis leur représentation visuelle.

**Exemple**: Un site web est un moyen visuel d’afficher des données à un utilisateur. Scraper ce site c’est extraire les données depuis le HTML lui même.

===

## Le scraping

Très pratique pour récupérer des données structurées sur Internet là où il n’y existe pas d’API.

Processus un peu "fourbe" qui procède d’une forme de rétro-ingénierie.

Hide yo data, bitches! Des données ne sont **JAMAIS** à l’abri si l’on peut y accéder depuis son navigateur Internet (on ne peut que pourrir la vie des scrapers mais on ne les empêchera que très rarement de fonctionner).

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

[EchoJS](http://www.echojs.com/)

===

## Le cambouis

Au menu:

1. Etape 1: [EchoJS](http://www.echojs.com/)
2. Etape 2: [HackerNews](https://news.ycombinator.com/) 
3. Etape 3: [HackerNews PWA](https://react-hn.kristoferbaxter.com/)
4. Etape 4: [Le cinéma français](http://www.cinema-francais.fr/)
5. Etape 5: L'OGP
6. Etape 6: Fiabilité et scalabilité

===

## 1) EchoJS

*Tout est simple dans le meilleur des mondes*

[Site](http://www.echojs.com/)

===

## 2) Hacker News

*Des turpitudes du markup web*

[Site](https://news.ycombinator.com/)

Note: La difficulté réside dans le markup inbuvable.

===

## 3) Hacker News PWA

*Le web moderne et ses challenges*

[Site](https://angular2-hn.firebaseapp.com)

Note: Soit rétro-ingénierie de l'API, soit émulation de navigateur.

===

## 4) Le cinéma français

*Le web, c'est sale...*

[Site](http://www.cinema-francais.fr/)

Note: Les problèmes d'encodage etc. Premières bases de crawling avec queue de processing et conservation des pages déjà récupérées? Parsing complexe des noms non-structurés. Le sleep pour éviter la DDOS. Les b dans les a et l'inverse. Générer les urls soi-même.

===

## 5) L'OGP

*Un peu de challenge?*

Note: authentification et stratégie.

===

<h2 style="text-align: center;">Comment emmerde-t-on les scrapers?</h2>

===

## Les écueils

Les serveurs peuvent tenter de vous empêcher de les scraper en détectant votre `User-Agent`, en vous imposant des quotas ou en vous piègeant dans des tarpits.

**Solution**: le spoofing, le throttling.

===

## Digression: les DDOS

Fonctionnement d'un serveur apache.

Fonctionnement d'un serveur nginx.

Le slow loris.

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

## Ironie

Les API du web sémantique (BNF), par exemple, sont tellement complexes qu’il est souvent plus facile de scraper leur site que de comprendre leur API.

Le scraping est une pratique qui n'est jamais dénuée d’ironie.

**Exemple**: l'entreprise ou institution incapable de vous mettre à disposition ses données.

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

## [rel=nofollow]

Pareil...
