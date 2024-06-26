import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { ChooseDay } from '../../components';

import store from '../../redux/store';

describe('ChooseDay', () => {
    const resizeWindow = (width: number) => {
        window.innerWidth = width;
        window.dispatchEvent(new Event('resize'));
    };

    it('render component with window width above threshold', () => {
        resizeWindow(800);

        render(
            <Provider store={store}>
                <ChooseDay />
            </Provider>
        );

        expect(screen.getByText(/Choose day/)).toBeInTheDocument();
    });

    it('render component with window width below threshold', () => {
        resizeWindow(600);

        render(
            <Provider store={store}>
                <ChooseDay />
            </Provider>
        );

        expect(screen.queryByText(/Choose day/)).toBeNull();
    });

    it('ChooseDay snapshot', () => {
        const chooseDay = render(
            <Provider store={store}>
                <ChooseDay />
            </Provider>
        );

        expect(chooseDay).toMatchSnapshot();
    });
});
