import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { format, addMonths, eachDayOfInterval } from 'date-fns';
import { Container } from '@mui/material';

import { DateButton, OtherDays } from '../components';
import { chooseDayContainer } from '../styled/ChooseDayStyles/ChooseDayStyles';
import { setSelectedDay } from '../redux/ducks/chooseDay';
import { sizes } from '../GlobalStyles';

import { Dispatch } from '../redux/store';
import { Dates } from '../types';

const ChooseDay = () => {
    const [dates, setDates] = useState<Dates>([]);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        const today = new Date();
        const endDate = addMonths(today, 1);
        const datesArray = eachDayOfInterval({ start: today, end: endDate });

        const formattedDates = datesArray.map(date => format(date, 'dd MMMM'));
        setDates(formattedDates);
        dispatch(setSelectedDay(formattedDates[0]))
    }, [dispatch]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const changeSelected = (btnClickEvent: React.MouseEvent<HTMLElement>) => {
        if (btnClickEvent.target instanceof HTMLElement) {
            dispatch(setSelectedDay(btnClickEvent.target.id));
        }
    };

    return (
        <Container
            sx={chooseDayContainer}
        >
            {windowWidth >= sizes.windowWidthChangeBtns ? (
                <>
                    {dates.slice(0, 7).map((date: string, index: number) => (
                        <DateButton
                            key={index}
                            id={date}
                            title={date}
                            onClick={(btnClickEvent) => changeSelected(btnClickEvent)}
                        />
                    ))}
                    <OtherDays
                        dates={dates}
                    />
                </>
            ) : (
                dates.map((date: string, index: number) => (
                    <DateButton
                        key={index}
                        id={date}
                        title={date}
                        onClick={(btnClickEvent) => changeSelected(btnClickEvent)}
                    />
                ))
            )}
        </Container>
    );
};

export default ChooseDay;
