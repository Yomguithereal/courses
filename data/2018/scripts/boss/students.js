;(function($, undefined) {

  const promos = $('#select_list_promo_students > option')
    .scrape()
    .map(string => +string.slice(1))
    .sort();

  function scrapeStudents($page) {
    const promo = $page
      .find('#select_list_promo_students > option[selected]')
      .text();

    const students = $page
      .find('#students tbody > tr')
      .scrape({
        promo: () => promo,
        id: function() {
          return $(this)
            .find('td:first > a')
            .attr('href')
            .split('/')
            .slice(-1)[0];
        },
        name: function() {
          return $(this)
            .find('td:first')
            .text()
            .trim();
        },
        firstName: function() {
          return $(this)
            .find('td:nth-child(2)')
            .text()
            .trim();
        }
      });

    return students;
  }

  const urls = promos
    .map(promo => `http://outils.hetic.net/ogp/students/${promo}`);

  artoo.ajaxSpider(urls, {
    jquerify: true,
    concat: true,
    process: scrapeStudents,
    done(students) {
      artoo.savePrettyJson(students, 'students.json');
    }
  });

}).call(this, artoo.$);
