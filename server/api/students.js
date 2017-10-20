const studentRouter = require('express').Router();
const { Student, Campus } = require('../../db/models')

studentRouter.get('/', (req, res, next) => {
  Student.findAll({ include: [{ all: true }]})
    .then(students => res.json(students))
    .catch(next);
});

studentRouter.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId, { include: [{ all: true }]})
    .then(student => res.json(student))
    .catch(next);
});

studentRouter.post('/', (req, res, next) => {
  Campus.findOne({ where: { name: req.body.campusName }})
    .then(campus => {
      const newStudent = Student.build(req.body);
      newStudent.setCampus(campus, {save: false});
      return newStudent.save();
    })
    .then(newStudent => newStudent.reload(Student.options.scopes.populated()))
    .then(student => {
      res.json(student)
    })
    .catch(next);
});

studentRouter.put('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId, { include: [{ all: true }]})
    .then(student => student.update(req.body))
    .then(student => student.reload(Student.options.scopes.populated()))
    .then(student => res.json(student))
    .catch(next);
});

studentRouter.delete('/:studentId', (req, res, next) => {
  console.log('INSIDE STUDENT ROUTER DELETE')
  Student.destroy({ where: { id: req.params.studentId } })
  console.log('DELETED FROM DATABASE')
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = studentRouter;
