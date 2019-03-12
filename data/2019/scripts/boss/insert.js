const neo4j = require('neo4j-driver').v1,
      decypher = require('decypher'),
      _ = require('lodash');

const PROJECTS = require('./projects.json'),
      STUDENTS = require('./students.json'),
      CONFIG = require('./config.json');

const AUTH = neo4j.auth.basic(CONFIG.user, CONFIG.password);

const driver = neo4j.driver('bolt://localhost', AUTH);

const batch = new decypher.Batch();

const studentReferences = {};

STUDENTS.forEach(student => {
  const ref = batch.createNode('Student', student);

  studentReferences[student.id] = ref;
});

PROJECTS.forEach(project => {
  const ref = batch.createNode('Project', project);

  project.team.forEach(student => {
    const studentRef = studentReferences[student];

    if (!studentRef)
      return;

    batch.createRelationship('WORKED_ON', studentRef, ref);
  });
});

const session = driver.session();

const query = batch.query();

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
