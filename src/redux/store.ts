import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import moviesReducer, { MoviesState, moviesWatcher } from './ducks/movies';
import reservationMovieReducer, { ReservationMovieState } from './ducks/reservationMovie';
import chooseDayReducer, { ChooseDayState } from './ducks/chooseDay';

/*interface RootState {
    reservationMovieState: ReservationMovieState;
    moviesState: MoviesState;
    chooseDayState: ChooseDayState;
}*/

const rootReducer = combineReducers({
    reservationMovieState: reservationMovieReducer,
    moviesState: moviesReducer,
    chooseDayState: chooseDayReducer
});

function* rootWatcher() {
    yield all([
        moviesWatcher()
    ])
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher)

export default store;

export type State = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch
