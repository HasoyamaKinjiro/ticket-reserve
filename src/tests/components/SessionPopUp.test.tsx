import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AnyAction } from 'redux-saga';
import { State } from '../../redux/store';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

import { SessionPopUp } from '../../components';


const mockStore = configureStore([]);

describe('SessionPopUp', () => {
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

    it('render component', () => {
        render(
            <Provider store={store}>
                <Router>
                    <SessionPopUp />
                </Router>
            </Provider>
        );

        expect(screen.getByText(/Test Description/)).toBeInTheDocument();
    });

    it('redirects if no movie is available', () => {
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

    it('close popup on click', () => {
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

    it('SessionPopUp snapshot', () => {
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
