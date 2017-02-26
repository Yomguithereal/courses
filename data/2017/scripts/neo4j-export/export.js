var GraphDatabase = require('neo4j').GraphDatabase,
    fs = require('fs'),
    _ = require('lodash');

var query = 'MATCH (p:Project)<-[:WORKED_ON]-(s:Student) RETURN p AS project, collect(s) AS students;';

var db = new GraphDatabase('http://localhost:7474');

var nodes = {},
    edges = {};

db.cypher(query, function(err, rows) {
  if (err) return console.error(err);

  rows.forEach(function(row) {

    _.map(row.students, 'properties').forEach(function(student, i, students) {

      // Should we add a node?
      if (!nodes[student.id])
        nodes[student.id] = student;

      // Linking
      _.drop(students, i + 1).forEach(function(colleague) {
        var hash = _.sortBy([colleague.id, student.id], function(id) {
          return +id.replace(/^s/, '');
        }).join('->');

        // Should we add an edge
        if (!edges[hash])
          edges[hash] = {
            source: colleague.id,
            target: student.id,
            weight: 0
          };

        // Weighting the edge
        edges[hash].weight++;
      });
    });
  });

  fs.writeFileSync(
    'graph.json',
    JSON.stringify({nodes: _.values(nodes), edges: _.values(edges)}, null, 2)
  );
});
