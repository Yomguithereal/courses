;(function($, undefined) {

  const cell = (el, index) => {
    return $(el)
      .find(`td:nth-child(${index})`)
      .text()
      .trim();
  };

  const projects = $('#projets tbody > tr')
    .scrape({
      name: function() {
        return cell(this, 1);
      },
      client: function() {
        return cell(this, 2);
      },
      state: function() {
        return cell(this, 3);
      },
      promo: function() {
        return cell(this, 4);
      },
      end: function() {
        return cell(this, 5);
      },
      team: function() {
        return $(this)
          .find('td:nth-child(6) > a')
          .scrape(function() {
            return $(this)
              .attr('href')
              .split('/')
              .slice(-1)[0];
          });
      },
      id: function() {
        return $(this)
          .find('td:first > a')
          .attr('href')
          .split('/')
          .slice(-1)[0];
      }
    });

  artoo.savePrettyJson(projects, 'projects.json');
}).call(this, artoo.$);
