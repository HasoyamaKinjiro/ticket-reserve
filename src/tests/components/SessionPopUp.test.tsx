import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

import { SessionPopUp } from '../../components';

const mockStore = configureStore([]);

describe('SessionPopUp component', () => {
    let store: any;

    beforeEach(() => {
        store = mockStore({
            reservationMovieState: {
                movie: {
                    title: 'Test Movie',
                    posterUrl: 'test-url',
                    duration: 120,
                    genre: 'Action',
                    rating: 'PG-13',
                    description: 'Test Description'
                },
                popUpTime: '10:00'
            }
        });
    });

    test('should render component without crashing', () => {
        render(
            <Provider store={store}>
                <Router>
                    <SessionPopUp />
                </Router>
            </Provider>
        );

        expect(screen.getByText(/Test Description/)).toBeInTheDocument();
    });

    test('should redirect if no movie is available', () => {
        store = mockStore({
            reservationMovieState: {
                movie: null,
                popUpTime: '10:00'
            }
        });

        render(
            <Provider store={store}>
                <Router>
                    <SessionPopUp />
                </Router>
            </Provider>
        );

        expect(screen.queryByText('Reservation time:')).toBeNull();
    });

    test('should close popup on click', () => {
        render(
            <Provider store={store}>
                <Router>
                    <SessionPopUp />
                </Router>
            </Provider>
        );

        fireEvent.click(screen.getByTitle('close'));
        expect(store.getActions()).toEqual([{ type: 'reservationMovie/SET_POPUP_IS_OPEN', payload: false }]);
    });

    test('should match a SessionPopUp snapshot', () => {
        const sessionPopUp = render(
            <Provider store={store}>
                <Router>
                    <SessionPopUp />
                </Router>
            </Provider>
        );

        expect(sessionPopUp).toMatchSnapshot();
    });
});
