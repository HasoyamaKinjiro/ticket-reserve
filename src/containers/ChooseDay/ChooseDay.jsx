import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { format, addMonths, eachDayOfInterval } from 'date-fns';
import { Container } from '@mui/material';

import { DateButton, OtherDays } from '../../components';
import { chooseDayContainer } from '../../styled/ChooseDayStyles/ChooseDayStyles';
import { setSelectedDay } from '../../redux/ducks/chooseDay';
import { sizes } from '../../GlobalStyles';

const ChooseDay = () => {
    const [dates, setDates] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const dispatch = useDispatch();

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

    const changeSelected = (btnClickEvent) => {
        dispatch(setSelectedDay(btnClickEvent.target.id))
    };

    return (
        <Container
            sx={chooseDayContainer}
        >
            {windowWidth >= sizes.windowWidthChangeBtns ? (
                <>
                    {dates.slice(0, 7).map((date, index) => (
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
                dates.map((date, index) => (
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
