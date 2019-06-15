class Movie {
    constructor(object, number) {
        this.object = object;
        this.number = number;
    }

    render() {
        return `<tr class="movie-item">
                    <td>${this.number}</td>
                    <td>
                        <div class="image-holder">
                            <img src="${this.object.Poster}" alt="${this.object.Title}">
                        </div>
                    </td>
                    <td>
                        <a href="${this.object.Website}">${this.object.Title}</a>
                    </td>
                    <td>${this.object.Year}</td>
                    <td>${this.object.Country}</td>
                    <td>${this.object.Genre}</td>
                    <td>${this.object.imdbRating}</td>
                </tr>`
    }
}

export { Movie };