import moviesReducer, { MoviesState, MoviesAction } from '../../redux/ducks/movies';
import { Movie } from '../../types';

describe('moviesReducer', () => {
    const initialState: MoviesState = {
        movies: [],
        loading: false,
        error: null
    };

    it('return the initial state', () => {
        expect(moviesReducer(undefined, {} as MoviesAction)).toEqual(initialState);
    });

    it('handle FETCH_MOVIES', () => {
        const prevState = {
            movies: [],
            loading: false,
            error: null
        };
        const action: MoviesAction = { type: 'movies/FETCH_MOVIES' };

        expect(moviesReducer(prevState, action)).toEqual({
            ...prevState,
            loading: true,
            error: null
        });
    });

    it('handle SET_MOVIES', () => {
        const prevState = {
            movies: [],
            loading: true,
            error: null
        };
        const mockMovies: Movie[] = [{
            "title": "Fight Club",
            "genre": "Drama",
            "duration": 139,
            "releaseDate": "1999-10-15",
            "rating": 8.8,
            "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
            "posterUrl": "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
        }];
        const action: MoviesAction = { type: 'movies/SET_MOVIES', payload: mockMovies };

        expect(moviesReducer(prevState, action)).toEqual({
            movies: mockMovies,
            loading: false,
            error: null
        });
    });

    it('handle FETCH_MOVIES_FAILED', () => {
        const prevState = {
            movies: [],
            loading: true,
            error: null
        };
        const error = 'Failed to fetch movies';
        const action: MoviesAction = { type: 'movies/FETCH_MOVIES_FAILED', payload: error };

        expect(moviesReducer(prevState, action)).toEqual({
            ...prevState,
            loading: false,
            error: error
        });
    });
});
