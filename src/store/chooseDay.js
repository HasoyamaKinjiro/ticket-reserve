export const SET_SELECTED_DAY = 'chooseDay/SET_SELECTED_DAY';

const initialState = {
    selectedDay: ''
};

export default function chooseDayReducer (state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_DAY:
            return {
                ...state,
                selectedDay: action.payload
            };
        default:
            return state;
    }
};

export const setSelectedDay = (day) => ({
    type: SET_SELECTED_DAY,
    payload: day
});

