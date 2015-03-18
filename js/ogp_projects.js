// Projects / 2013-2014 / done
var students = artoo.store.get('students'),
    graph = {
      nodes: [],
      edges: []
    };

// Populating edges
var data = artoo.$('[class^="item_"]:has(td) td:nth-child(4)').scrape(function($) {
  return $(this).find('a').scrape({
    name: function($) {
      return $(this).text().replace(' (CDP)', '').trim();
    },
    cdp: function($) {
      return !!~$(this).text().search(/\(CDP\)/);
    }
  });
});

var edgeIndex = {};
data.forEach(function(group) {
  var groupStudents = group
    .map(function(s) {
      if (students[s.name]) {
        students[s.name].cdp = s.cdp;
        if (!students[s.name].nb_projects)
          students[s.name].nb_projects = 0;
        return students[s.name];
      }

      return null;
    })
    .filter(function(s) {
      return s;
    });

  var pairs = [];
  groupStudents.forEach(function(s1, i) {
    s1.nb_projects++;

    groupStudents.slice(i).forEach(function(s2) {
      pairs.push([s1, s2]);
    });
  });

  pairs.forEach(function(p) {
    var s1 = p[0],
        s2 = p[1];

    if (!edgeIndex[s1.id + '|' + s2.id] && !edgeIndex[s2.id + '|' + s1.id]) {
      var edge = {source: s1.id, target: s2.id, weight: 1};
      edgeIndex[s1.id + '|' + s2.id] = edge;
      edgeIndex[s2.id + '|' + s1.id] = edge;
      graph.edges.push(edge);
    }
    else {
      (edgeIndex[s1.id + '|' + s2.id] || edgeIndex[s2.id + '|' + s1.id]).weight++;
    }
  });
});

// Populating nodes
var validStudents = Object.keys(students)
  .map(function(k) {
    return students[k];
  })
  .filter(function(s) {
    return s.hasOwnProperty('cdp');
  })
  .forEach(function(s) {
    graph.nodes.push(s);
  });

artoo.savePrettyJson(graph, 'projects.json');
