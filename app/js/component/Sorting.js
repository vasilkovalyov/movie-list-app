class Sorting {
    constructor(array) {
        this.array = array;
    }

    getArray() {
        return this.array;
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