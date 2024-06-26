import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';

import store from '../redux/store';

describe('App', () => {
    it('render component', () => {
        render(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        );

        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(screen.getByRole('main')).toBeInTheDocument();
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('App snapshot', () => {
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
