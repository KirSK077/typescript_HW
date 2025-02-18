import { Movie } from '../domain/Movie';

describe('Movie Class', () => {
    let movie: Movie;

    beforeEach(() => {
        movie = new Movie('Inception', 2010, 'USA', 'Your mind is the scene of the crime.', ['Action', 'Sci-Fi'], '148 min');
    });

    test('Должен быть создан экземпляр класса Movie', () => {
        expect(movie.title).toBe('Inception');
        expect(movie.year).toBe(2010);
        expect(movie.country).toBe('USA');
        expect(movie.slogan).toBe('Your mind is the scene of the crime.');
        expect(movie.genres).toEqual(['Action', 'Sci-Fi']);
        expect(movie.duration).toBe('148 min');
    });

    test('Должен показать информацию о фильме', () => {
        const expectedInfo = `
            Название: Inception,
            Год выпуска: 2010,
            Страна: USA,
            Слоган: Your mind is the scene of the crime.,
            Жанры: Action, Sci-Fi,
            Длительность: 148 min
        `;
        expect(movie.displayInfo()).toBe(expectedInfo);
    });
});
