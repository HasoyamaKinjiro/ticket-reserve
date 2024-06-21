import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';
import moviesReducer from './movies';
import movieReducer from './reservationMovie';
import chooseDayReducer from './chooseDay';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    reservationMovieState: movieReducer,
    moviesState: moviesReducer,
    chooseDayState: chooseDayReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(rootWatcher)
