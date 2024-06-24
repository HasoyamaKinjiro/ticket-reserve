import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import moviesReducer, { moviesWatcher } from './ducks/movies';
import movieReducer from './ducks/reservationMovie';
import chooseDayReducer from './ducks/chooseDay';

const rootReducer = combineReducers({
    reservationMovieState: movieReducer,
    moviesState: moviesReducer,
    chooseDayState: chooseDayReducer
});

function* rootWatcher () {
    yield all([
        moviesWatcher()
    ])
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher)

export default store;
