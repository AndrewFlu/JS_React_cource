const numberOfFilms = +prompt("Сколько фильмов вы посмотрели на английском языке?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const movie = prompt("Один из последних просмотренных фильмов", "");
    const raiting = prompt("На сколько вы оцениваете этот фильм?", "");
    if(movie != null && movie != "" && raiting != null && raiting != "" && movie.length <= 50){
        personalMovieDB.movies[movie] = raiting;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман!");
} else {
    alert("Попробуйте ещё раз");
}

console.log(personalMovieDB);
