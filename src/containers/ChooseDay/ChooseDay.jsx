import React, { useState, useEffect } from "react";
import { format, addMonths, eachDayOfInterval } from 'date-fns';
import { Container } from "@mui/material";
import DateButton from "./components/DateButton";
import OtherDays from "./components/OtherDays";

const ChooseDay = () => {
    const [dates, setDates] = useState([]);
    const [isSelected, setIsSelected] = useState("");

    useEffect(() => {
        const today = new Date();
        const endDate = addMonths(today, 1);
        const datesArray = eachDayOfInterval({ start: today, end: endDate });
        
        const formattedDates = datesArray.map(date => format(date, 'dd MMMM'));
        setDates(formattedDates);
        setIsSelected(formattedDates[0])
    }, []);

    const changeSelected = (e) => {
        setIsSelected(e.target.id);
    };

    return (
        <Container
            sx={{
                mb: 3,
                display: "flex",
                justifyContent: "space-between"
            }}
        >
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
        </Container>
    );
};

export default ChooseDay;
