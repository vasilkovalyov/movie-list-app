class Movie {
    constructor(object) {
        this.object = object;
    }

    render() {
        return `<tr class="movie-item">
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