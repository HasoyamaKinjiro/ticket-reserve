import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import { DateButton } from '../../components';

import store from '../../redux/store';
import { globalColors } from '../../GlobalStyles';

describe('DateButton', () => {
    it('renders with correct title', () => {
        render(
            <Provider store={store}>
                <DateButton title="Test Button" id="1" />
            </Provider>
        );

        expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    it('applies styles correctly when selected', () => {
        render(
            <Provider store={store}>
                <DateButton title="Test Button" id="1" />
            </Provider>
        );

        const button = screen.getByText('Test Button').closest('button');
        expect(button).toHaveStyle(`background-color: ${globalColors.secondaryPurple}`);
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(
            <Provider store={store}>
                <DateButton title="Test Button" id="1" onClick={handleClick} />
            </Provider>
        );

        const button = screen.getByText('Test Button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('DateButton snapshot', () => {
        const dateButton = render(
            <Provider store={store}>
                <DateButton title="Test Button" id="1" />
            </Provider>
        );

        expect(dateButton).toMatchSnapshot();
    });
});
