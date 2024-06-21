export const SET_MOVIES = 'movies/SET_MOVIES';
export const FETCH_MOVIES = 'movies/FETCH_MOVIES';
export const FETCH_MOVIES_FAILED = 'movies/FETCH_MOVIES_FAILED';

const initialState = {
    movies: [],
    loading: false,
    error: null
};

export default function moviesReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false,
                error: null
            };
        case FETCH_MOVIES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export const setMovies = (movies) => ({
    type: SET_MOVIES,
    payload: movies
});

export const fetchMovies = () => ({
    type: FETCH_MOVIES
});
