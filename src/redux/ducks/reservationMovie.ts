import { Movie } from '../../types';

const SET_MOVIE = 'reservationMovie/SET_MOVIE';
const SET_POPUP_IS_OPEN = 'reservationMovie/SET_POPUP_IS_OPEN';
const SET_POPUP_TIME = 'reservationMovie/SET_POPUP_TIME';

export interface ReservationMovieState {
    movie: null | Movie;
    popUpIsOpen: boolean;
    popUpTime: string;
}

export type ReservationMovieAction = {
    type: typeof SET_MOVIE | typeof SET_POPUP_IS_OPEN | typeof SET_POPUP_TIME;
    payload: any;
}

const initialState: ReservationMovieState = {
    movie: null,
    popUpIsOpen: false,
    popUpTime: ''
};

export default function reservationMovieReducer(
    state = initialState,
    action: ReservationMovieAction
): ReservationMovieState {
    switch (action.type) {
        case SET_MOVIE:
            console.log('Setting movie:', action.payload);
            return {
                ...state,
                movie: action.payload
            };
        case SET_POPUP_TIME:
            console.log('Setting popUpTime:', action.payload);
            return {
                ...state,
                popUpTime: action.payload
            };
        case SET_POPUP_IS_OPEN:
            console.log('Setting popUpIsOpen:', action.payload);
            return {
                ...state,
                popUpIsOpen: action.payload
            }
        default:
            return state;
    }
};

export const setMovie = (movie: Movie): ReservationMovieAction => ({
    type: SET_MOVIE,
    payload: movie
});

export const setPopUpIsOpen = (bool: boolean): ReservationMovieAction => ({
    type: SET_POPUP_IS_OPEN,
    payload: bool
});

export const setPopUpTime = (time: string): ReservationMovieAction => ({
    type: SET_POPUP_TIME,
    payload: time
});
