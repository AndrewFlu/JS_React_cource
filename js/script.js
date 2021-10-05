'use strict';

let numberOfFilms;

const start = function() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели на английском языке?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели на английском языке?", "");
    }
};

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true
};

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
};

showMyDB(personalMovieDB.private);


function rememberMovie() {
    for (let i = 0; i < 2; i++) {
        const movie = prompt("Один из последних просмотренных фильмов", "");
        const raiting = prompt("На сколько вы оцениваете этот фильм?", "");
        if(movie != null && movie != "" && raiting != null && raiting != "" && movie.length <= 50){
            personalMovieDB.movies[movie] = raiting;
        } else {
            i--;
        }
    }
}

rememberMovie();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман!");
    } else {
        alert("Попробуйте ещё раз");
    }
}

detectPersonalLevel();

function writeYourGenres() {
    let genre;
    for(let i = 0; i < 3; i++){
        genre = prompt(`Ваш любимый жанр под номером: ${i+1}`, "");
        while (genre == '' || genre == undefined || isFinite(genre)){
            genre = prompt(`Ваш любимый жанр под номером: ${i+1}`, "");
        }
        personalMovieDB.genres[i] = genre;
    }
};

writeYourGenres();