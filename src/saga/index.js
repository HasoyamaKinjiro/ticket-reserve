import { all } from 'redux-saga/effects';
import { moviesWatcher } from './moviesSaga';

export function* rootWatcher () {
    yield all([
        moviesWatcher()
    ])
}
