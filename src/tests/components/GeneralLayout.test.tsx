import React from 'react';
import { render, screen } from '@testing-library/react';

import { GeneralLayout } from '../../components';

describe('GeneralLayout', () => {
    it('renders inner components ', function () {
        render(<GeneralLayout />);

        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(screen.getByRole('main')).toBeInTheDocument();
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('GeneralLayout snapshot ', () => {
        const generalLayout = render(<GeneralLayout />);

        expect(generalLayout).toMatchSnapshot();
    });
});
