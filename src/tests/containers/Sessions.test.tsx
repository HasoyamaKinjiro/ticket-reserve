import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Sessions } from '../../components';

import store from '../../redux/store';

const mockMovies = [
    {
        "title": "The Matrix",
        "genre": "Action, Sci-Fi",
        "duration": 136,
        "releaseDate": "1999-03-31",
        "rating": 8.7,
        "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        "posterUrl": "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
    },
    {
        "title": "Fight Club",
        "genre": "Drama",
        "duration": 139,
        "releaseDate": "1999-10-15",
        "rating": 8.8,
        "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        "posterUrl": "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
    }
];

describe('Sessions', () => {
    it('render component', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Sessions movies={mockMovies} />
                </Router>
            </Provider>
        );

        expect(screen.getByText(/Fight Club/)).toBeInTheDocument();
    });

    it('Sessions snapshot', () => {
        const sessions = render(
            <Provider store={store}>
                <Router>
                    <Sessions movies={mockMovies} />
                </Router>
            </Provider>
        );

        expect(sessions).toMatchSnapshot();
    });
});
