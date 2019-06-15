class Filter {
    constructor(array) {
        this.array = array;
    }

    filterTitleByLetter(letter) {
        // let movies = [
        //     "Iron Man",
        //     "Iron Man 2",
        //     "Iron Man 3",
        //     "Thor",
        //     "Thor: The Dark World",
        //     "Thor: Ragnarok",
        //     "Captain America: The First Avenger",
        //     "Captain America: The Winter Soldier",
        //     "Captain America: Civil War",
        //     "The Avengers",
        //     "Avengers: Age of Ultron",
        //     "Avengers: Infinity War",
        //     "Avengers: Endgame",
        //     "Guardians of the Galaxy",
        //     "Guardians of the Galaxy Vol. 2",
        //     "Ant-Man",
        //     "Ant-Man and the Wasp",
        //     "Doctor Strange",
        //     "Spider-Man: Far from Home",
        //     "Spider-Man: Homecoming",
        //     "Black Panther",
        //     "Captain Marvel"
        // ];

        let newArray = this.array.filter((item) => item.Title.startsWith(letter));
        return newArray;



        // let newArray = [];

        // for (let i = 0; i < this.array.length; i++) {
        //     if (this.array[i].Title.startsWith(letter)) {
        //         newArray.push(this.array[i]);
        //     }
        // }




    }
}

export { Filter };