var GraphDatabase = require('neo4j').GraphDatabase,
    Query = require('decypher').Query;

// Requiring the data
var graph = require('../../resources/promo.json');

// Connecting to the Neo4j database
var db = new GraphDatabase('http://localhost:7474');

// Building the query
var insert = new Query(),
    nodesSegment = insert.segment(),
    edgesSegment = insert.segment();

graph.nodes.forEach(function(node) {
  var propertyIdentifier = 'props_' + node.id,
      label = node.type === 'student' ? 'Student' : 'Project',
      params = {};

  // Normalizing date
  if (node.type === 'project') {
    var s = node.date.split('/');
    node.date = +(s[2] + s[1] + s[0]);
  }

  params[propertyIdentifier] = node;

  nodesSegment.create('(' + node.id + ':' + label + ' {' + propertyIdentifier + '})', params);
});

graph.edges.forEach(function(edge) {
  edgesSegment.create('(' + edge.source + ')-[:WORKED_ON]->(' + edge.target + ')');
});

// Committing
db.cypher(insert.build(), function(err) {
  if (err)
    return console.error(err);

  console.log('Success!');
});
