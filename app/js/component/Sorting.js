import { Movie } from './Movie.js';

class Sorting {
    constructor(array) {
        this.array = array;
    }

    sortBy(typeSort) {
        const movieTable = document.querySelector('.movie-body-list');
        new Movie().removeAllMovie(movieTable);
        typeSort.forEach(item => {
            let movie = new Movie(item);
            movieTable.insertAdjacentHTML('beforeEnd', movie.render());
        });
    }

    choiseSort(value) {
        switch (value) {
            case 'year-up':
                {
                    this.sortBy(this.byYearUp());
                    break;
                }
            case 'year-down':
                {
                    this.sortBy(this.byYearDown());
                    break;
                }
            case 'rating-up':
                {
                    this.sortBy(this.byRatingUp());
                    break;
                }
            case 'rating-down':
                {
                    this.sortBy(this.byRatingDown());
                    break;
                }
            default:
                {
                    break;
                }
        }
    }

    byYearUp() {
        this.array.sort((a, b) => {
            if (a.Year > b.Year) {
                return 1;
            } else {
                return -1;
            }
        });
        return this.array;
    }

    byYearDown() {
        this.array.sort((a, b) => {
            if (a.Year < b.Year) {
                return 1;
            } else {
                return -1;
            }
        });
        return this.array;
    }

    byRatingUp() {
        this.array.sort((a, b) => {
            if (Math.fround(a.imdbRating) > Math.fround(b.imdbRating)) {
                return 1;
            } else {
                return -1;
            }
        });
        return this.array;
    }

    byRatingDown() {
        this.array.sort((a, b) => {
            if (Math.fround(a.imdbRating) < Math.fround(b.imdbRating)) {
                return 1;
            } else {
                return -1;
            }
        });
        return this.array;
    }

}

export { Sorting };