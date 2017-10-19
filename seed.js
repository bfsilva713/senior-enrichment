'use strict';

var chance = require('chance')(123);
// var toonAvatar = require('cartoon-avatar');
var Promise = require('bluebird');

var db = require('./db');
var { Student, Campus } = require('./db/models');
var numStudents = 100;
var numCampuses = 8;

var emails = chance.unique(chance.email, numStudents);

function doTimes (n, fn) {
  var results = [];
  while (n--) {
    results.push(fn());
  }
  return results;
}

// function randPhoto (gender) {
//   gender = gender.toLowerCase();
//   var id = chance.natural({
//     min: 1,
//     max: gender === 'female' ? 114 : 129
//   });
//   return toonAvatar.generate_avatar({ gender: gender, id: id });
// }

function randStudent () {
  var gender = chance.gender();
  return Student.build({
    name: [chance.first({gender: gender}), chance.last()].join(' '),
    image: `/images/profile/profile${Math.ceil(Math.random()*26)}`,
    email: emails.pop()
  });
}


function generateStudents () {
  var Students = doTimes(numStudents, randStudent);
  Students.push(Student.build({
    name: 'BreAnna Silva',
    photo: '/images/octopus.jpg',
    email: 'bre@bre.bre'
  }));
  return Students;
}

function generateStories (createdStudents) {
  return doTimes(numStories, function () {
    return randStory(createdStudents);
  });
}

function createStudents () {
  return Promise.map(generateStudents(), function (Student) {
    return Student.save();
  });
}

function createStories (createdStudents) {
  return Promise.map(generateStories(createdStudents), function (story) {
    return story.save();
  });
}

function seed () {
  return createStudents()
  .then(function (createdStudents) {
    return createStories(createdStudents);
  });
}

console.log('Syncing database');

db.sync({force: true})
.then(function () {
  console.log('Seeding database');
  return seed();
})
.then(function () {
  console.log('Seeding successful');
}, function (err) {
  console.error('Error while seeding');
  console.error(err.stack);
})
.finally(function () {
  db.close();
  return null;
});
