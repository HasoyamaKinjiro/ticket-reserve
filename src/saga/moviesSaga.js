import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_MOVIES, FETCH_MOVIES_FAILED, setMovies } from '../store/movies';
import { fetchMovies } from '../api/fetchMovies';

function* fetchMoviesWorker () {
    try {
        const response = yield call(fetchMovies);
        const data = yield call([response, 'json']);
        yield put(setMovies(data));
    } catch (error) {
        yield put({ type: FETCH_MOVIES_FAILED, payload: error.message });
    }
}

export function* moviesWatcher () {
    yield takeEvery(FETCH_MOVIES, fetchMoviesWorker)
}
