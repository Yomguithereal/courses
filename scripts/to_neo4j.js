var seraph = require('seraph'),
    db = seraph('http://localhost:7474'),
    graph = require('../resources/projects.json');

var batch = db.batch();

var nodesIndex = {};
graph.nodes.forEach(function(n) {
  n.uid = n.id;
  delete n.id;
  nodesIndex[n.uid] = batch.save(n);

  if (n.type === 'student')
    batch.label(nodesIndex[n.uid], 'Student');
  else
    batch.label(nodesIndex[n.uid], 'Project');
});

graph.edges.forEach(function(e) {
  e.uid = e.id;
  delete e.id;
  batch.relate(nodesIndex[e.source], 'WORKED_ON', nodesIndex[e.target]);
});

batch.commit(function(err) {
  if (err) return console.log(err);
  console.log('Done!');
});
