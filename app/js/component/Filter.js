class Filter {
    constructor(array) {
        this.array = array;
    }

    filterTitleByLetter(letter) {
        let newArray = this.array.filter((item) => item.Title.startsWith(letter));
        return newArray;
    }
}

export { Filter };