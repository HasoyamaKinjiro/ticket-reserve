import React, { forwardRef, MouseEventHandler, useEffect, useState } from 'react';
import { Button, SxProps, Theme } from '@mui/material';
import { useSelector } from 'react-redux';

import DateButtonStyles from '../styled/ChooseDayStyles/DateButtonStyles';

import { State } from '../redux/store';

interface DateButtonProps {
    title: string;
    id: string | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    sx?: SxProps<Theme>;
}

const DateButton = forwardRef<HTMLButtonElement, DateButtonProps>(
    ({ title, id, onClick, sx }, ref) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const selectedDay = useSelector((state: State) => state.chooseDayState.selectedDay)

    useEffect(() => {
        if (id && id === selectedDay) {
            setIsFocused(true);
        } else {
            setIsFocused(false);
        }
    }, [id, selectedDay]);

    return (
        <Button
            id={id}
            color="secondary"
            variant="contained"
            sx={DateButtonStyles(isFocused, sx)}
            onClick={onClick}
            ref={ref}
        >
            {title}
        </Button>
    );
});

export default DateButton;
