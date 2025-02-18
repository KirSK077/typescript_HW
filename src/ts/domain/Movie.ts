export class Movie {
    title: string;
    year: number;
    country: string;
    slogan: string;
    genres: string[];
    duration: string;

    constructor(title: string, year: number, country: string, slogan: string, genres: string[], duration: string) {
        this.title = title;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genres = genres;
        this.duration = duration;
    }

    displayInfo() {
        return `
            Название: ${this.title},
            Год выпуска: ${this.year},
            Страна: ${this.country},
            Слоган: ${this.slogan},
            Жанры: ${this.genres.join(', ')},
            Длительность: ${this.duration}
        `;
    }
}