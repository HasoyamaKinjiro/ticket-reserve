const SET_MOVIE = 'reservationMovie/SET_MOVIE';
const SET_POPUP_IS_OPEN = 'reservationMovie/SET_POPUP_TIME';
const SET_POPUP_TIME = 'reservationMovie/SET_POPUP_TIME';

const initialState = {
    movie: null,
    popUpIsOpen: false,
    popUpTime: ''
};

export default function movieReducer (state = initialState, action) {
    switch (action.type) {
        case SET_MOVIE:
            return {
                ...state,
                movie: action.payload
            };
        case SET_POPUP_IS_OPEN:
            return {
                ...state,
                popUpIsOpen: action.payload
            }
        case SET_POPUP_TIME:
            return {
                ...state,
                popUpTime: action.payload
            };
        default:
            return state;
    }
};

export const setMovie = (movie) => ({
    type: SET_MOVIE,
    payload: movie
});

export const setPopUpIsOpen = (bool) => ({
    type: SET_POPUP_IS_OPEN,
    payload: bool
});

export const setPopUpTime = (time) => ({
    type: SET_POPUP_TIME,
    payload: time
});
