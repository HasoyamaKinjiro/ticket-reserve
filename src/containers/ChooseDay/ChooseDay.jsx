import React, { useState, useEffect } from "react";
import { format, addMonths, eachDayOfInterval } from 'date-fns';
import { Container } from "@mui/material";
import { DateButton, OtherDays } from "../../components";
import { chooseDayContainer } from "../../styled/ChooseDayStyles/ChooseDayStyles";

const ChooseDay = () => {
    const [dates, setDates] = useState([]);
    const [isSelected, setIsSelected] = useState("");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const today = new Date();
        const endDate = addMonths(today, 1);
        const datesArray = eachDayOfInterval({ start: today, end: endDate });
        
        const formattedDates = datesArray.map(date => format(date, 'dd MMMM'));
        setDates(formattedDates);
        setIsSelected(formattedDates[0]);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const changeSelected = (e) => {
        setIsSelected(e.target.id);
    };

    return (
        <Container
            sx={chooseDayContainer}
        >
            {windowWidth >= 820 ? (
                <>
                    {dates.slice(0, 7).map((el, index) => (
                        <DateButton
                            key={index}
                            id={el}
                            title={el}
                            isSelected={isSelected}
                            onClick={changeSelected}
                        />
                    ))}
                    <OtherDays
                        dates={dates}
                        isSelected={isSelected}
                        changeSelected={changeSelected}
                    />
                </>
            ) : (
                dates.map((el, index) => (
                    <DateButton
                        key={index}
                        id={el}
                        title={el}
                        isSelected={isSelected}
                        onClick={changeSelected}
                    />
                ))
            )}
        </Container>
    );
};

export default ChooseDay;
