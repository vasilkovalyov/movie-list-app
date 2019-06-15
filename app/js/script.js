import { Movie } from './component/Movie.js';
import { Sorting } from './component/Sorting.js';

const urlMovieList = './movie-list-database.json';

const movieTable = document.querySelector('.movie-body-list');
let numberMovie = 1;

let totalCount = document.querySelector('.total-count');

const sort = document.querySelector('.sort-movies');

let moviesArray = getMovieArray();

sort.addEventListener('change', (e) => {
    const sortObj = new Sorting(moviesArray);

    switch (sort.value) {
        case 'year':
            {
                console.log('sort by year');
                new Sorting().byYear(moviesArray)
                removeAllMovie(movieTable);
                break;
            }
        case 'rating':
            {
                console.log('sort by rating');
                removeAllMovie(movieTable);
                break;
            }
        case 'default':
            {
                console.log('show all');
                showMovie();
                break;
            }
        default:
            {
                break;
            }
    }
});


function removeAllMovie(holder) {
    while (holder.firstChild) {
        holder.removeChild(holder.firstChild);
    }
}

function getMovieArray() {
    let array = [];
    fetch(urlMovieList)
        .then(response => response.json())
        .then(function(data) {
            data.forEach(item => {
                arr.push(item);
            });
        });
    return array;
}


function showMovie() {
    fetch(urlMovieList)
        .then(response => response.json())
        .then(function(data) {
            data.forEach(item => {
                let movie = new Movie(item, numberMovie);
                movieTable.insertAdjacentHTML('beforeEnd', movie.render());
                numberMovie++;
            });
            totalCount.innerHTML = data.length;
        });
}



showMovie();