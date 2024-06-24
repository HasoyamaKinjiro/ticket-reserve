import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, List, ListItem, ListItemText } from '@mui/material';

import { DateButton } from '../components';
import {
    listStyles,
    listItemStyles,
    boxOtherDays,
    dateButtonOtherDays,
    primaryTypographyStylesOtherDays
} from '../styled/ChooseDayStyles/OtherDaysStyles';
import { setSelectedDay } from '../redux/ducks/chooseDay';

const OtherDays = ({ dates }) => {
    const [otherDays, setOtherDays] = useState(false);
    const [buttonId, setButtonId] = useState(null);
    const buttonRef = useRef(null);
    const listRef = useRef(null);

    const dispatch = useDispatch();

    const handleButtonClick = () => {
        setOtherDays(!otherDays)
    }

    const handleClick = (listItemClickEvent) => {
        if (listItemClickEvent.currentTarget === listItemClickEvent.target) {
            setButtonId(listItemClickEvent.target.id);
            dispatch(setSelectedDay(listItemClickEvent.target.id));
        }
        else {
            setButtonId(listItemClickEvent.target.innerText);
            dispatch(setSelectedDay(listItemClickEvent.target.innerText));
        }
        setOtherDays(false);
    };

    const handleClickOutside = (mouseEvent) => {
        if (
            listRef.current &&
            !listRef.current.contains(mouseEvent.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(mouseEvent.target)
        ) {
            setOtherDays(false);
        }

    };

    useEffect(() => {
        if (otherDays) {
            document.addEventListener('mouseup', handleClickOutside);
        } else {
            document.removeEventListener('mouseup', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, [otherDays]);

    return (
        <Box sx={boxOtherDays}>
            <DateButton
                sx={dateButtonOtherDays}
                id={buttonId}
                title="Choose day"
                onClick={handleButtonClick}
                ref={buttonRef}
            />
            {otherDays && (
                <List sx={listStyles} ref={listRef}>
                    {dates.slice(7).map((date, index) => (
                        <ListItem
                            id={date}
                            key={index + 11}
                            sx={listItemStyles}
                            onClick={(listItemClickEvent) => handleClick(listItemClickEvent)}
                        >
                            <ListItemText
                                primary={date}
                                primaryTypographyProps={primaryTypographyStylesOtherDays}
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default OtherDays;
