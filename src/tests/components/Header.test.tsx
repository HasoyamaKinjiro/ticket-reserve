import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from '../../components';

describe('Header component', () => {
    test('should be rendered with the correct title', () => {
        render(<Header />);

        expect(screen.getByText('Ticket reserve')).toBeInTheDocument();
    });

    test('should match a Header snapshot', () => {
        const header = render(<Header />);

        expect(header).toMatchSnapshot();
    });
});
