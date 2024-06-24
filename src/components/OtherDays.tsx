import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, List, ListItem, ListItemText } from '@mui/material';

import { DateButton } from './index';
import {
    listStyles,
    listItemStyles,
    boxOtherDays,
    dateButtonOtherDays,
    primaryTypographyStylesOtherDays
} from '../styled/ChooseDayStyles/OtherDaysStyles';
import { setSelectedDay } from '../redux/ducks/chooseDay';

import { Dates } from '../types';

interface OtherDaysI {
    dates: Dates;
}

const OtherDays = ({ dates }: OtherDaysI) => {
    const [otherDays, setOtherDays] = useState<boolean>(false);
    const [buttonId, setButtonId] = useState<string>("initial");
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const listRef = useRef<HTMLUListElement | null>(null);

    const dispatch = useDispatch();

    const handleButtonClick = () => {
        setOtherDays(!otherDays)
    }

    const handleClick = (listItemClickEvent: React.MouseEvent<HTMLElement>) => {
        const target = listItemClickEvent.target as HTMLElement;
        if (listItemClickEvent.currentTarget === target) {
            setButtonId(target.id);
            dispatch(setSelectedDay(target.id));
        } else {
            setButtonId(target.innerText);
            dispatch(setSelectedDay(target.innerText));
        }
        setOtherDays(false);
    };

    const handleClickOutside = (mouseEvent: MouseEvent) => {
        if (
            listRef.current &&
            !listRef.current.contains(mouseEvent.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(mouseEvent.target as Node)
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
