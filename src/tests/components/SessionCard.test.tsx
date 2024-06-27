import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { SessionCard } from '../../components';

import store from '../../redux/store';

const movie = {
    "title": "Inception",
    "genre": "Sci-Fi, Thriller",
    "duration": 148,
    "releaseDate": "2010-07-16",
    "rating": 8.8,
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
}

describe('SessionCard component', () => {
    test('should render component without crashing', () => {
        render(
            <Provider store={store}>
                <Router>
                    <SessionCard movie={movie} />
                </Router>
            </Provider>
        );

        expect(screen.getByText(/Inception/)).toBeInTheDocument();
    });

    test('should open popup on click', async () => {
        render(
            <Provider store={store}>
                <Router>
                    <SessionCard movie={movie} />
                </Router>
            </Provider>
        );

        const timeBtn = screen.getByText('10:00');
        fireEvent.click(timeBtn);
        await waitFor(() => {
            expect(store.getState().reservationMovieState.popUpIsOpen).toBe(true);
        });
    });

    test('should match a SessionCard snapshot', () => {
        const sessionCard = render(
            <Provider store={store}>
                <Router>
                    <SessionCard movie={movie} />
                </Router>
            </Provider>
        );

        expect(sessionCard).toMatchSnapshot();
    });
});
