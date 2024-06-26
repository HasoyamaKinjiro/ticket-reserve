import chooseDayReducer, { setSelectedDay, ChooseDayAction } from '../../redux/ducks/chooseDay';

describe('chooseDay', () => {
    it('return the initial state', function () {
        expect(chooseDayReducer(undefined, {} as ChooseDayAction)).toEqual({
            selectedDay: ''
        });
    });

    it('handle SET_SELECTED_DAY', () => {
        const prevState = {
            selectedDay: 'Monday'
        };
        const action = setSelectedDay('Tuesday');

        expect(chooseDayReducer(prevState, action)).toEqual({
            selectedDay: 'Tuesday'
        });
    });
});
