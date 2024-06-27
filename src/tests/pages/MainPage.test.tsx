import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import MainPage from '../../pages/MainPage';

import store from '../../redux/store';

describe('MainPage component', () => {
    test('should render component without crashing', () => {
        render(
            <Provider store={store}>
                <Router>
                    <MainPage />
                </Router>
            </Provider>
        );

        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    test('should match a MainPage snapshot', () => {
        const mainPage = render(
            <Provider store={store}>
                <Router>
                    <MainPage />
                </Router>
            </Provider>
        );

        expect(mainPage).toMatchSnapshot();
    });
});
