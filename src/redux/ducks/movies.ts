import { put, takeEvery, call } from 'redux-saga/effects';

import { fetchMovies as fetchMoviesApi } from '../../api/fetchMovies';

import { Movie } from '../../types';

const SET_MOVIES = 'movies/SET_MOVIES';
const FETCH_MOVIES = 'movies/FETCH_MOVIES';
const FETCH_MOVIES_FAILED = 'movies/FETCH_MOVIES_FAILED';

export interface MoviesState {
    movies: Movie[];
    loading: boolean;
    error: null | string;
}

const initialState = {
    movies: [],
    loading: false,
    error: null
};

export default function moviesReducer(state: MoviesState = initialState, action: any) {
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

export const setMovies = (movies: Movie[]) => ({
    type: SET_MOVIES,
    payload: movies
});

export const fetchMovies = () => ({
    type: FETCH_MOVIES
});

function* fetchMoviesWorker(): Generator<any, void, any> {
    try {
        const response = yield call(fetchMoviesApi);
        const data = yield call([response, 'json']);
        yield put(setMovies(data));
    } catch (error: any) {
        yield put({ type: FETCH_MOVIES_FAILED, payload: error.message });
    }
}

export function* moviesWatcher() {
    yield takeEvery(FETCH_MOVIES, fetchMoviesWorker);
}
