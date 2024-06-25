import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware, {  } from 'redux-saga';
import { all } from 'redux-saga/effects';

import moviesReducer, { moviesWatcher } from './ducks/movies';
import reservationMovieReducer from './ducks/reservationMovie';
import chooseDayReducer from './ducks/chooseDay';

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

export type State = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;

const sagaMiddleware = createSagaMiddleware()
const store= createStore(rootReducer, applyMiddleware(sagaMiddleware) as any);
sagaMiddleware.run(rootWatcher)

export default store;




/*interface RootState {
    /!*reservationMovieState: (state: ReservationMovieState | undefined, action: ReservationMovieAction) => ReservationMovieState;
    moviesState: (state: MoviesState | undefined, action: MoviesAction) => MoviesState;*!/
    chooseDayState: (state: ChooseDayState | undefined, action: ChooseDayAction) => ChooseDayState;
}*/
