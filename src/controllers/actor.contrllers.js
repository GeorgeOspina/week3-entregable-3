const catchError = require('../utils/catchError');
const Actor = require('../models/Actor');
const Movie = require('../models/Movie');
const { setMovies } = require('./genre.controllers');

const getAll = catchError(async(req, res) => {
    const results = await Actor.findAll( { include: [Movie] } );
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Actor.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Actor.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Actor.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Actor.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const setActors = catchError(async (req, res) => {
    const { id } = req.params
    const movie = await Movie.findByPk(id)
    await movie.setActors(req.body)
    const actors = await movie.getActors()
    return res.json(actors)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setMovies
}