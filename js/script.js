const numberOfFilms = +prompt("Сколько фильмов вы посмотрели на английском языке?", "");

const lastMovie = prompt("Один из последних просмотренных фильмов", "");
const raiting = prompt("На сколько вы оцениваете этот фильм?", "");

const lastMovie1 = prompt("Один из последних просмотренных фильмов", "");
const raiting1 = prompt("На сколько вы оцениваете этот фильм?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

personalMovieDB.movies[lastMovie] = raiting;
personalMovieDB.movies[lastMovie1] = raiting1;

console.log(personalMovieDB);
