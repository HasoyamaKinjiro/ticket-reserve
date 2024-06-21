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
import { setSelectedDay } from '../store/chooseDay';

const OtherDays = ({ dates }) => {
    const [otherDays, setOtherDays] = useState(false);
    const [buttonId, setButtonId] = useState(null);
    const listRef = useRef(null);

    const dispatch = useDispatch();

    const handleClick = (listItemClickEvent) => {
        //Need more think
        setButtonId(listItemClickEvent.target.id);
        dispatch(setSelectedDay(listItemClickEvent.target.id));
        setOtherDays(false);
    };

    const handleClickOutside = (mouseEvent) => {
        if (
            listRef.current &&
            !listRef.current.contains(mouseEvent.target) &&
            listRef.current &&
            !listRef.current.contains(mouseEvent.target)
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
                onClick={() => setOtherDays(!otherDays)}
            />
            {otherDays && (
                <List sx={listStyles} ref={listRef}>
                    {dates.slice(7).map((el, index) => (
                        <ListItem
                            id={el}
                            key={index + 11}
                            sx={listItemStyles}
                            onClick={(listItemClickEvent) => handleClick(listItemClickEvent)}
                        >
                            <ListItemText
                                primary={el}
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
