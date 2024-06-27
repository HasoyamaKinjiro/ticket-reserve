import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import { DateButton } from '../../components';

import store from '../../redux/store';
import { globalColors } from '../../GlobalStyles';

describe('DateButton component', () => {
    test('should be rendered with the correct title', () => {
        render(
            <Provider store={store}>
                <DateButton title="Test Button" id="1" />
            </Provider>
        );

        expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    test('should apply styles correctly when selected', () => {
        render(
            <Provider store={store}>
                <DateButton title="Test Button" id="1" />
            </Provider>
        );

        const button = screen.getByText('Test Button').closest('button');
        expect(button).toHaveStyle(`background-color: ${globalColors.secondaryPurple}`);
    });

    test('should call the onClick handler when clicked', () => {
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

    test('should match a DateButton snapshot', () => {
        const dateButton = render(
            <Provider store={store}>
                <DateButton title="Test Button" id="1" />
            </Provider>
        );

        expect(dateButton).toMatchSnapshot();
    });
});
