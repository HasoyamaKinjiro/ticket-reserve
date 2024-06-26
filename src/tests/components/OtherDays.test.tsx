import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { OtherDays } from '../../components';

import store from '../../redux/store';

const dates = [
    '26 June', '27 June', '28 June', '29 June', '30 June',
    '01 July', '02 July', '03 July', '04 July', '05 July'
]

describe('OtherDays', () => {
    it('render component', () => {
        render(
            <Provider store={store}>
                <OtherDays dates={dates} />
            </Provider>
        );

        expect(screen.getByText(/Choose day/)).toBeInTheDocument();
    });

    it('toggle list on button click', () => {
        render(
            <Provider store={store}>
                <OtherDays dates={dates} />
            </Provider>
        );

        const chooseDayBtn = screen.getByText(/Choose day/);
        fireEvent.click(chooseDayBtn);
        expect(screen.queryByRole('list')).toBeInTheDocument();
        fireEvent.click(chooseDayBtn);
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('closes list on outside click', () => {
        render(
            <Provider store={store}>
                <OtherDays dates={dates} />
            </Provider>
        );

        const chooseDayBtn = screen.getByText(/Choose day/);
        fireEvent.click(chooseDayBtn);
        expect(screen.queryByRole('list')).toBeInTheDocument();
        fireEvent.mouseUp(document);
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('OtherDays snapshot',  () => {
        const otherDays = render(
            <Provider store={store}>
                <OtherDays dates={dates} />
            </Provider>
        );

        expect(otherDays).toMatchSnapshot();
    });
});
