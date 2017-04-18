const req = require('request'),
      async = require('async'),
      cheerio = require('cheerio'),
      range = require('lodash/range'),
      fs = require('fs');

/**
 * Constants.
 */
const DOMAIN = 'http://www.transparency.org';

const URLS = require('./urls.json').map(url => {
  return DOMAIN + url;
});

/**
 * Functions.
 */
function getMultipleTags($, $sel) {
  const tags = [];

  $sel.find('a').each(function() {
    tags.push($(this).text().trim());
  });

  return tags;
}

function scrape(url, $) {
  const $title = $('h1.headerRegular'),
        $body = $('.highlight.publication'),
        $tags = $('.tagMain > .tagHold');

  const data = {
    url,
    title: $title
      .first()
      .text()
      .trim(),
    topic: $title
      .next('p')
      .find('a')
      .text()
      .trim(),
    date: $('#Posted')
      .text()
      .split('published')
      .slice(-1)[0]
      .trim(),
    img: DOMAIN + $body
      .find('img')
      .attr('src'),
    excerpt: $($body.find('p').get().slice(0, -1))
      .text()
      .trim()
      .trim(),
    download: $body
      .find('a')
      .attr('href'),
    translations: {},
    territories: getMultipleTags($, $($tags.get(0))),
    regions: getMultipleTags($, $($tags.get(1))),
    languages: getMultipleTags($, $($tags.get(2))),
    topics: getMultipleTags($, $($tags.get(3))),
    tags: getMultipleTags($, $($tags.get(4)))
  };

  $body.find('a[href^="/whatwedo/publication"]').each(function() {
    data.translations[$(this).text().trim()] = $(this).attr('href');
  });

  return data;
}

/**
 * Retrieving data.
 */
async.mapSeries(URLS, (url, next) => {
  req(url, (err, response, body) => {
    if (err)
      return next(err);

    console.log('Scraping ' + url);

    return next(null, scrape(url, cheerio.load(body)));
  });
}, (err, data) => {
  if (err)
    return console.error(err);

  console.log(data);
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
});
