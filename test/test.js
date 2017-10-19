const expect = require('chai').expect;
const models = require('../db/models');
const Student = models.Student;
const Campus = models.Campus;
const db = require('../db');

// describe("Setting up the specs", function() {

//   it('logs as expected', function() {
//     const log = 'i\'m alive!';
//     expect(log).to.deep.equal('i\'m alive!');
//   })

//   it('logs as expected', function() {
//     const log = 'i\'m alive!';
//     expect(log).to.not.equal('i\' alive!');
//   })
// })

// describe("", function () {

//   it("", function() {

//   })

// })


// DB & MODELS



describe("Database/model design", function () {



  describe("Student model", function () {

    let student1 = Student.create({
        name: 'BreAnna',
        email: 'bre@bre.bre'
    });

    let student2 = Student.create({
      name: 'BreAnna',
      email: 'brebbb'
  });

  let student3 = Student.create({
    name: null,
    email: 'bre@bre.bre'
});

    let campus1 = Campus.create({
      name: 'UCI',
  })

    it("has name information", function() {

      expect(student1.name).to.be.equal('BreAnna')
    });

    xit("has e-mail information", function() {

    });

    xit("cannot have a null value for name", function() {

    });

    xit("cannot have a null value for e-mail", function() {

    });

    xit('e-mail address only accepts e-mail address format', function () {

    });

    xit("must be assigned to a campus", function() {
      //can be and must be
    });

    xit("cannot be assigned to more than one campus", function() {

    });

  });

  describe("Campus model", function () {

    xit("has name information", function() {

    });

    xit("has image information", function() {

    });

    xit("must have name information", function() {

    });


  });

  describe("Associations between models", function() {

    xit("students must belong to a campus", function() {

    });

    xit("a campus can have many students assigned to xit", function() {

    });

    xit("a campus can have no students assigned to it", function() {

    })

  });

});


