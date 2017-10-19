const campusRouter = require('express').Router();
const { Campus } = require('../../db/models')



campusRouter.get('/', (req, res, next) => {
	Campus.findAll()
		.then(campuses => res.json(campuses))
		.catch(next);
});

campusRouter.get('/:campusId', (req, res, next) => {
	Campus.findById(req.params.campusId)
		.then(campus => res.json(campus.json))
		.catch(next);
});

campusRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

campusRouter.put('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => campus.update(req.body))
    .then(campus => res.json(campus))
    .catch(next);
});

campusRouter.delete('/:campusId', (req, res, next) => {
  Campus.destroy({ where: {id: req.params.campusId}})
    .then(() => res.status(204).end())
    .catch(next);
});



module.exports = campusRouter;
