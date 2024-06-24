import React, { forwardRef, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

import DateButtonStyles from '../styled/ChooseDayStyles/DateButtonStyles';

const DateButton = forwardRef(({ title, id, onClick, sx }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const selectedDay = useSelector((state) => state.chooseDayState.selectedDay)

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
