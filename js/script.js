'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели на английском языке?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели на английском языке?", "");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    rememberMovie: function() {
        for (let i = 0; i < 2; i++) {
            const movie = prompt("Один из последних просмотренных фильмов", "");
            const raiting = prompt("На сколько вы оцениваете этот фильм?", "");
            if(movie != null && movie != "" && raiting != null && raiting != "" && movie.length <= 50){
                personalMovieDB.movies[movie] = raiting;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман!");
        } else {
            alert("Попробуйте ещё раз");
        }
    },
    writeYourGenres: function() {
        let genre;
        for(let i = 0; i < 3; i++){
            genre = prompt(`Ваш любимый жанр под номером: ${i+1}`, "");

            if (genre === '' || genre === undefined || genre === null) {
                alert("Пожалуйста, ответьте на вопрос. Нам это важно");
                i--;
            } else {
                this.genres[i] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр №${index + 1}— это ${item}`);
        });
    },
    toggleVisibleMyDb: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    print: () => {
        console.log(personalMovieDB);
    }
};

// personalMovieDB.start();
personalMovieDB.print();

personalMovieDB.toggleVisibleMyDb();

personalMovieDB.print();
