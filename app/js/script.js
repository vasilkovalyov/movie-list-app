import { Movie } from './component/Movie.js';
import { Sorting } from './component/Sorting.js';
import { Filter } from './component/Filter.js';

const urlMovieList = './movie-list-database.json';
const movieTable = document.querySelector('.movie-body-list');
const sort = document.querySelector('.sort-movies');
const filterList = document.querySelector('.filter-by-letter');
const movieWrapper = document.querySelector('.movie-wrapper');

const moviesArray = getMovieArray();

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

showMovie();


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

function getArrayFilterDataId() {
    let arrayMoviesDataId = [];
    for (let i = 0; i < movieTable.children.length; i++) {
        arrayMoviesDataId.push(movieTable.children[i].getAttribute('data-movie-id'));
    }
    return arrayMoviesDataId;
}

function getArrayFilterObjects(arrayId) {
    let array = [];
    for (let i = 0; i < arrayId.length; i++) {
        for (let j = 0; j < moviesArray.length; j++) {
            if (arrayId[i] == moviesArray[j].Id) {
                array.push(moviesArray[j]);
            }
        }
    }
    return array;
}


filterList.addEventListener('click', (e) => {
    e.preventDefault();
    removeActive(filterList.children);
    e.target.parentNode.classList.add('active');
    const sortObj = new Sorting(moviesArray);

    if (e.target.getAttribute('data-letter') == 'All') {
        sortObj.sortBy(moviesArray);
        showSearchCount(moviesArray);
    } else if (e.target.tagName == 'A') {
        let filter = new Filter(moviesArray);
        let filterArray = filter.filterTitleByLetter(e.target.getAttribute('data-letter'));
        sortObj.sortBy(filterArray);
        showSearchCount(filterArray);
        showMsgNotFoundElemInArray(filterArray);
    }
});

sort.addEventListener('change', (e) => {
    let filterArray = getArrayFilterObjects(getArrayFilterDataId());
    const sortObj = new Sorting(filterArray);
    sortObj.choiseSort(sort.value);
});

function showMsgNotFoundElemInArray(array) {
    if (array.length == 0) {
        movieWrapper.classList.add('not-found');
    } else {
        movieWrapper.classList.remove('not-found');
    }
}

function removeActive(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove('active');
    }
}

function showSearchCount(array) {
    let search = document.querySelector('.search-count');
    search.innerHTML = array.length;
}