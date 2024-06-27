import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { PopUpPlaceButton } from '../../components';
import PopUpPlaceButtonStyle from '../../styled/SessionsStyles/PopUpPlaceButtonStyles';

describe('PopUpPlaceButton component', () => {
    test('should render component without crashing', () => {
        render(<PopUpPlaceButton place="Place 1" />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('should call onFocus when clicked', () => {
        render(<PopUpPlaceButton place="Place 1" />);

        const button = screen.getByRole('button');
        fireEvent.focus(button);
        expect(button).toHaveStyle(PopUpPlaceButtonStyle(true));
    });

    test('should match a PopUpPlaceButton snapshot', () => {
        const popUpPlaceButton = render(
            <PopUpPlaceButton place="Place 1" />
        );

        expect(popUpPlaceButton).toMatchSnapshot();
    });
});
