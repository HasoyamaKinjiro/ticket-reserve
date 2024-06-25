import React from 'react';
import { render, screen } from '@testing-library/react';

import { Footer } from '../../components';

describe('Footer', () => {
    it('renders with correct title', () => {
        render(<Footer />);

        expect(screen.getByText(/©/)).toBeInTheDocument();
    });

    it('Footer snapshot', () => {
        const footer = render(<Footer />);

        expect(footer).toMatchSnapshot();
    });
});
