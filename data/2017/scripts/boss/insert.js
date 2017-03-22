const neo4j = require('neo4j-driver').v1,
      decypher = require('decypher'),
      _ = require('lodash');

const e = decypher.helpers.escapeIdentifier;

const PROJECTS = require('./projects.json'),
      STUDENTS = require('./students.json'),
      CONFIG = require('./config.json');

const AUTH = neo4j.auth.basic(CONFIG.user, CONFIG.password);

const driver = neo4j.driver('bolt://localhost', AUTH);

function insertStudents() {
  const query = new decypher.Query(),
        nodeSegment = query.segment(),
        edgeSegment = query.segment();

  const nodes = STUDENTS.map(student => {
    return `(${e(student.id)}:Student {${e(student.id + '_props')}})`;
  });

  PROJECTS.forEach(project => {
    nodes.push(`(${e('p' + project.id)}:Project {${e('p' + project.id + '_props')}})`);

    project.team.forEach(student => {
      edgeSegment.create(`(${e('p' + project.id)})<-[:WORKED_ON]-(${e(student)})`);
    });
  });

  nodeSegment.create(nodes, _.keyBy(STUDENTS, student => `${student.id}_props`));
  query.params(_.keyBy(PROJECTS, project => `p${project.id}_props`));

  const session = driver.session();

  return session
    .run(query.compile(), query.params())
    .then(result => {
      console.log('Data inserted!');
      session.close();
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}

insertStudents();
