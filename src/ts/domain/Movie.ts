export class Movie {
    constructor(
        public title: string,
        public year: number,
        public country: string,
        public slogan: string,
        public genres: string[],
        public duration: string
    ) {}

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