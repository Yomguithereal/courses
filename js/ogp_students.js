// Students / 2013-2014
var identifiers = ['item_p1', 'item_p2', 'item_h1', 'item_h2', 'item_h3'],
    students = {};

function trim($) {
  return $(this).text().trim();
}

identifiers.forEach(function(identifier, i) {

  var promoStudents = artoo.scrape('.' + identifier + ':has(td)', {
    surname: {
      sel: 'td:nth-child(1)',
      method: trim
    },
    name: {
      sel: 'td:nth-child(2)',
      method: trim
    }
  });

  promoStudents.forEach(function(s, j) {
    s.promo = 'h' + (i + 1);
    s.id = s.promo + '_' + j;
    students[s.name + ' ' + s.surname] = s;
  });
});

artoo.store.set('students', students);
