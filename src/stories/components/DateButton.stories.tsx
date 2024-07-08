import React from 'react';
import { Provider } from 'react-redux';
import { Meta, StoryFn } from '@storybook/react';

import DateButton, { DateButtonProps } from '../../components/DateButton';

import store from '../../redux/store';

export default {
    title: 'DateButton',
    component: DateButton
} as Meta;

const Template: StoryFn<DateButtonProps> = (args) =>(
    <Provider store={store}>
        <DateButton {...args} />
    </Provider>
);

export const Default = Template.bind({});
Default.args = {
    title: 'DateButton',
    id: '0'
};
