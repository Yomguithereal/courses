var gexf = require('gexf'),
    projects = require('./projects.json'),
    fs = require('fs');

var writer = gexf.create();

writer.addNodeAttribute({
  id: 'cdp',
  type: 'string'
});

writer.addNodeAttribute({
  id: 'promo',
  type: 'string'
});

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
    attributes: {
      promo: node.promo,
      cdp: node.cdp ? 'oui' : 'non'
    },
    viz: {
      position: {
        x: Math.random(),
        y: Math.random()
      },
      size: node.nb_projects,
      color: palette[promoNb]
    }
  });
});

projects.edges.forEach(function(edge) {
  writer.addEdge({
    source: edge.source,
    target: edge.target,
    weight: edge.weight
  });
});

fs.writeFileSync('projects.gexf', writer.serialize());
