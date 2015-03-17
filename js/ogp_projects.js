// Projects / 2013-2014 / done
var students = artoo.store.get('students'),
    graph = {
      nodes: [],
      edges: []
    };

// Populating nodes
for (var k in students)
  graph.nodes.push(students[k]);

// Populating edges
var data = artoo.$('[class^="item_"]:has(td) td:nth-child(4)').scrape(function($) {
  return $(this).find('a').scrape(function($) {
    return $(this).text().replace(' (CDP)', '').trim();
  });
});

data.forEach(function(group) {
  var groupStudents = group
    .map(function(name) {
      return students[name];
    })
    .filter(function(s) {
      return s;
    });

  var s1 = groupStudents[0];

  groupStudents.slice(1).forEach(function(s2) {
    graph.edges.push({source: s1.id, target: s2.id});
  });
});

artoo.savePrettyJson(graph, 'projects.json');
