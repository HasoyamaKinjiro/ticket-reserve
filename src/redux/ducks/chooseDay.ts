const SET_SELECTED_DAY = 'chooseDay/SET_SELECTED_DAY';

export interface ChooseDayState {
    selectedDay: string;
}

interface ChooseDayAction {
    type: string;
    payload?: any;
}

const initialState = {
    selectedDay: ''
};

export default function chooseDayReducer(state: ChooseDayState = initialState, action: ChooseDayAction) {
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

export const setSelectedDay = (day: string) => ({
    type: SET_SELECTED_DAY,
    payload: day
});
