const SET_SELECTED_DAY = 'chooseDay/SET_SELECTED_DAY';

export interface ChooseDayState {
    selectedDay: string;
}

export type ChooseDayAction = {
    type: typeof SET_SELECTED_DAY;
    payload: string;
}

const initialState: ChooseDayState = {
    selectedDay: ''
};

export default function chooseDayReducer(state = initialState, action: ChooseDayAction): ChooseDayState {
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

export const setSelectedDay = (day: string): ChooseDayAction => ({
    type: SET_SELECTED_DAY,
    payload: day
});
