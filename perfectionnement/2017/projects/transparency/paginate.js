const req = require('request'),
      async = require('async'),
      cheerio = require('cheerio'),
      range = require('lodash/range'),
      fs = require('fs');

/**
 * Constants.
 */
const MAX = 340;
const URL = 'http://www.transparency.org/whatwedo/publications';

/**
 * Building urls.
 */
const URLS = range(0, MAX + 10, 10).map(i => i ? `${URL}/P${i}` : URL);

/**
 * Fetching data.
 */
const DATA = [];

async.eachSeries(URLS, (url, next) => {
  console.log(`Fetching ${url}`);

  req(url, (err, response, body) => {
    if (err)
      return next(err);

    const $ = cheerio.load(body);

    $('.article.story > .highlight.publication > a').each(function() {
      DATA.push($(this).attr('href'));
    });

    return next();
  });
}, err => {
  if (err)
    return console.error(err);

  console.log(DATA);
  fs.writeFileSync('./urls.json', JSON.stringify(DATA, null, 2));
});
