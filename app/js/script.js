import { Movie } from './component/Movie.js';
import { Sorting } from './component/Sorting.js';
import { Filter } from './component/Filter.js';

const urlMovieList = './movie-list-database.json';
const movieTable = document.querySelector('.movie-body-list');
const sort = document.querySelector('.sort-movies');
const filterList = document.querySelector('.filter-by-letter');

const moviesArray = getMovieArray();

showMovie();

filterList.addEventListener('click', (e) => {
    e.preventDefault();
    removeActive(filterList.children);
    e.target.parentNode.classList.add('active');
    showSearchCount(moviesArray);


    if (e.target.getAttribute('data-letter') == 'All') {
        sortBy(moviesArray);
    } else if (e.target.tagName == 'A') {
        let filter = new Filter(moviesArray);
        let filterArray = filter.filterTitleByLetter(e.target.getAttribute('data-letter'));
        sortBy(filterArray);
        showSearchCount(filterArray);
    }
});

function removeActive(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove('active');
    }
}

sort.addEventListener('change', (e) => {
    const sortObj = new Sorting(moviesArray);

    switch (sort.value) {
        case 'year-up':
            {
                sortBy(sortObj.byYearUp());
                break;
            }
        case 'year-down':
            {
                sortBy(sortObj.byYearDown());
                break;
            }
        case 'rating-up':
            {
                sortBy(sortObj.byRatingUp());
                break;
            }
        case 'rating-down':
            {
                sortBy(sortObj.byRatingDown());
                break;
            }
        case 'default':
            {
                break;
            }
        default:
            {
                break;
            }
    }
});

function showSearchCount(array) {
    let search = document.querySelector('.search-count');
    search.innerHTML = array.length;
}

function sortBy(typeSort) {
    removeAllMovie(movieTable);

    typeSort.forEach(item => {
        let movie = new Movie(item);
        movieTable.insertAdjacentHTML('beforeEnd', movie.render());
    });
}


function removeAllMovie(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getMovieArray() {
    let array = [];
    fetch(urlMovieList)
        .then(response => response.json())
        .then(function(data) {
            data.forEach(item => {
                array.push(item);
            });
        });
    return array;
}


function showMovie() {
    fetch(urlMovieList)
        .then(response => response.json())
        .then(function(data) {
            data.forEach(item => {
                let movie = new Movie(item);
                movieTable.insertAdjacentHTML('beforeEnd', movie.render());
            });
        });
}