const numberOfFilms = prompt("How many films did you saw?", " ");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastSeenFilm = prompt("What film did you see in last time?", " ");

const rateFilm = prompt("Rated please?", " ");

personalMovieDB.movies[lastSeenFilm] = rateFilm;

console.log(personalMovieDB);
