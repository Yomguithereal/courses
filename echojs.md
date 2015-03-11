---
layout: page
title:  "EchoJS"
---

---

## {{ page.title }}

---

### 1) Vérifier que sa barre de favoris est accessible

---

### 2) Installer artoo.js

* Se rendre [ici](http://medialab.github.io/artoo/).

---

### 3) Analyser la page

---

### 4) Déterminer ce que l'on souhaite récupérer

---

### 5) Analyser le markup de la page

* Charger artoo.
* Utiliser `artoo.$`.
* Regarder les articles.
* Comprendre la fonction `artoo.scrape`.

---

### 6) Trouver les patterns nécessaires

---

<h3 id="sol-browser">7) Solution (utiliser artoo pour la trouver)</h3>

```js
var data = artoo.scrape('article', {
  title: {
    sel: 'h2 > a',
    method: 'text'
  },
  link: {
    sel: 'h2 > a',
    attr: 'href'
  },
  upvotes: {
    sel: 'p > .upvotes',
    method: function($) {
      return +$(this).text();
    }
  },
  comments: {
    sel: 'p > a',
    method: function($) {
      var txt = $(this).text();

      if (txt === 'discuss')
        return 0;
      else
        return +txt.replace(/ comments?/, '');
    }
  }
});

artoo.savePrettyJson(data, 'echojs.json');
```

---

### 8) Créer un bookmarklet

* Générateur [ici](http://medialab.github.io/artoo/generator).

---

### 9) Bonus: Scraper depuis Node.js

* Installer [node.js](https://nodejs.org/).
* Initialiser un package:

```
npm init
```

* Installer les librairies `request`, `cheerio` et `artoo-js`:

```
npm install --save request cheerio artoo-js
```

---

<h3 id="sol-node">9) Solution</h3>

```js
var request = require('request'),
    artoo = require('artoo-js'),
    cheerio = require('cheerio'),
    fs = require('fs');

console.log('Starting script...');
request('http://www.echojs.com/', function(err, response, body) {

  console.log('Page fetched!');

  // Always handle errors!
  if (err)
    throw err;

  var $ = cheerio.load(body);
  artoo.setContext($);

  var data = artoo.scrape('article', {
    title: {
      sel: 'h2 > a',
      method: 'text'
    },
    link: {
      sel: 'h2 > a',
      attr: 'href'
    },
    upvotes: {
      sel: 'p > .upvotes',
      method: function($) {
        return +$(this).text();
      }
    },
    comments: {
      sel: 'p > a',
      method: function($) {
        var txt = $(this).text();

        if (txt === 'discuss')
          return 0;
        else
          return +txt.replace(/ comments?/, '');
      }
    }
  });

  console.log('Data scraped! Writing...');
  fs.writeFileSync('echojs.json', JSON.stringify(data, null, 2));
});

```

---

<script type="text/javascript" src="{{ site.baseurl }}/js/echojs.js"></script>

