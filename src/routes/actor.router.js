const { getAll, create, getOne, remove, update } = require('../controllers/actor.contrllers');
const express = require('express');
const { setActors } = require('../controllers/movie.controllers');

const routerActor = express.Router();

routerActor.route('/')
    .get(getAll)
    .post(create);

routerActor.route('/:id/movies')
    .post(setActors);

routerActor.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerActor;