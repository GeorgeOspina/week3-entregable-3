const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");

//Movie.hasMany(Actor);
//Movie.hasMany(Director);
Movie.belongsToMany(Genre, { through: 'moviesGenres' })
Genre.belongsToMany(Movie, { through: 'genresMovies' })
Movie.belongsToMany(Actor, { through: 'moviesActors' })
Actor.belongsToMany(Movie, { through: 'actorsMovies' })
Movie.belongsToMany(Director, { through: 'moviesDirectors' })
Director.belongsToMany(Movie, { through: 'directorsMovies' })
