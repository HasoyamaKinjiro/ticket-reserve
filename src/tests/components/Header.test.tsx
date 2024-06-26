import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from '../../components';

describe('Header', () => {
    it('render with correct title', () => {
        render(<Header />);

        expect(screen.getByText('Ticket reserve')).toBeInTheDocument();
    });

    it('Header snapshot', () => {
        const header = render(<Header />);

        expect(header).toMatchSnapshot();
    });
});
