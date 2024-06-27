import chooseDayReducer, { setSelectedDay, ChooseDayAction } from '../../redux/ducks/chooseDay';

describe('chooseDay duck', () => {
    test('should return the initial state', function () {
        expect(chooseDayReducer(undefined, {} as ChooseDayAction)).toEqual({
            selectedDay: ''
        });
    });

    test('should update selected day in the state', () => {
        const prevState = {
            selectedDay: 'Monday'
        };
        const action = setSelectedDay('Tuesday');

        expect(chooseDayReducer(prevState, action)).toEqual({
            selectedDay: 'Tuesday'
        });
    });
});
