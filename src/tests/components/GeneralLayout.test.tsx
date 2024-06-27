import React from 'react';
import { render, screen } from '@testing-library/react';

import { GeneralLayout } from '../../components';

describe('GeneralLayout component', () => {
    test('should render the banner component', () => {
        render(<GeneralLayout />);

        expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    test('should render the main component', () => {
        render(<GeneralLayout />);

        expect(screen.getByRole('main')).toBeInTheDocument();
    });

    test('should render the contentinfo component', () => {
        render(<GeneralLayout />);

        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    test('should match a GeneralLayout snapshot', () => {
        const generalLayout = render(<GeneralLayout />);

        expect(generalLayout).toMatchSnapshot();
    });
});
