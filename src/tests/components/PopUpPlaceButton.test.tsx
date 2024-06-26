import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { PopUpPlaceButton } from '../../components';
import PopUpPlaceButtonStyle from '../../styled/SessionsStyles/PopUpPlaceButtonStyles';

describe('PopUpPlaceButton', () => {
    it('render component', () => {
        render(<PopUpPlaceButton place="Place 1" />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onFocus when clicked', () => {
        render(<PopUpPlaceButton place="Place 1" />);

        const button = screen.getByRole('button');

        expect(button).toHaveStyle(PopUpPlaceButtonStyle(false));

        fireEvent.focus(button);
        expect(button).toHaveStyle(PopUpPlaceButtonStyle(true));
    });

    it('PopUpPlaceButton snapshot', () => {
        const popUpPlaceButton = render(
            <PopUpPlaceButton place="Place 1" />
        );

        expect(popUpPlaceButton).toMatchSnapshot();
    });
});
