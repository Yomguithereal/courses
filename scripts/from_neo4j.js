var seraph = require('seraph'),
    gexf = require('gexf'),
    fs = require('fs'),
    db = seraph('http://localhost:7474');

var palette = [
  '#534640',
  '#98BF54',
  '#A362B5',
  '#95B8B6',
  '#C55F4B'
];

var writer = gexf.create();

writer.addNodeAttribute({
  id: 'cdp',
  type: 'string'
});

writer.addNodeAttribute({
  id: 'promo',
  type: 'string'
});

var query = [
  'MATCH (s1:Student)-[:WORKED_ON]->(:Project)<-[:WORKED_ON]-(s2:Student)',
  'WHERE id(s1) < id(s2)',
  'RETURN s1,s2;'
].join('\n');

var edges = [],
    edgeIndex = {},
    nodeIndex = {};

function addNode(node) {
  var promoNb = +node.promo.replace('h', '') - 1;

  writer.addNode({
    id: node.uid,
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

      // Attention: nécessite une palette
      color: palette[promoNb]
    }
  });
}

db.query(query, function(err, rows) {
  if (err) return console.log('An error occurred:', err);

  rows.forEach(function(row) {

    var s1 = row.s1,
        s2 = row.s2;

    // Adding the nodes
    if (!nodeIndex[s1.uid]) {
      addNode(s1);
      nodeIndex[s1.uid] = true;
    }

    if (!nodeIndex[s2.uid]) {
      addNode(s2);
      nodeIndex[s2.uid] = true;
    }

    // Adding or weigthing the edge
    if (!edgeIndex[s1.uid + '|' + s2.uid]) {
      var edge = {
        source: s1.uid,
        target: s2.uid,
        weight: 1,
        viz: {}
      };

      edges.push(edge);
      edgeIndex[s1.uid + '|' + s2.uid] = edge;
    }
    else {
      edgeIndex[s1.uid + '|' + s2.uid].weight++;
    }
  });

  edges.forEach(function(e) {
    if (e.weight > 1)
      e.weight *= 100;
    e.viz.thickness = e.weigth;
    writer.addEdge(e);
  });

  fs.writeFileSync(__dirname + '/../resources/students.gexf', writer.serialize());
});
