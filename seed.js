'use strict';

//    /images/campuses/planet2.png

var chance = require('chance')(123);
var Promise = require('bluebird');

var db = require('./db');
var { Student, Campus } = require('./db/models');
var numStudents = 100;


const Fullstack = Campus.create({
  name: 'Fullstack',
  image: '/images/campuses/fa-logo@2x.png'
})

const CSMO = Campus.create({
  name: 'CSMO',
  image: '/images/campuses/jupiter.png'
})

const Terracademy = Campus.create({
  name: 'Terracademy',
  image: '/images/campuses/terra1.png'
})

const SaturnU = Campus.create({
  name: 'SaturnU',
  image: '/images/campuses/saturn.png'
})

const LUNA = Campus.create({
  name: 'LUNA',
  image: '/images/campuses/planet3.png'
})

const schools = Promise.all([Fullstack, CSMO, Terracademy, SaturnU, LUNA])


var emails = chance.unique(chance.email, numStudents);

function doTimes (n, fn) {
  var results = [];
  while (n--) {
    results.push(fn());
  }
  return results;
}



function randStudent () {
  var gender = chance.gender();
  return Student.create({
    name: [chance.first({gender: gender}), chance.last()].join(' '),
    image: `/images/profile/profile${Math.ceil(Math.random()*26)}`,
    email: emails.pop()
  })
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


function createStudents () {
  return Promise.map(generateStudents(), Student => {
    var campus = schools[Math.floor(Math.random()*5)]
    return Student.setCampus(campus, {save: true})
  });
}


function seed () {
  return createStudents()
  // });
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
