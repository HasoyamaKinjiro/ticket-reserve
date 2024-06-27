import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';

import store from '../redux/store';

describe('App component', () => {
    test('should render component without crashing', () => {
        render(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        );

        const rolesToCheck = ['banner', 'main', 'contentinfo'];

        rolesToCheck.forEach(role => {
            const elements = screen.queryAllByRole(role);
            expect(elements).toHaveLength(1);
        });
    });

    test('should match a App snapshot', () => {
        const app = render(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        );

        expect(app).toMatchSnapshot();
    });
});
