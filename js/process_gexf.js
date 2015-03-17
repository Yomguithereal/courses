var gexf = require('gexf'),
    projects = require('./projects.json'),
    fs = require('fs');

var writer = gexf.create();

var palette = [
  '#534640',
  '#98BF54',
  '#A362B5',
  '#95B8B6',
  '#C55F4B'
];

projects.nodes.forEach(function(node) {
  var promoNb = +node.promo.replace('h', '') - 1;

  writer.addNode({
    id: node.id,
    label: node.name + ' ' + node.surname,
    viz: {
      color: palette[promoNb]
    }
  });
});

projects.edges.forEach(function(edge) {
  writer.addEdge(edge);
});

fs.writeFileSync('projects.gexf', writer.serialize());
