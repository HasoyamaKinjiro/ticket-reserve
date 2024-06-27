import React from 'react';
import { render, screen } from '@testing-library/react';

import { Footer } from '../../components';

describe('Footer component', () => {
    test('should be rendered with the correct title', () => {
        render(<Footer />);

        expect(screen.getByText(/©/)).toBeInTheDocument();
    });

    test('should match a Footer snapshot', () => {
        const footer = render(<Footer />);

        expect(footer).toMatchSnapshot();
    });
});
