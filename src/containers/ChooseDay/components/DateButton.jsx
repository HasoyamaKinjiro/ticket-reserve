import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import DateButtonStyles from "../../../styled/ChooseDayStyles/DateButtonStyles";

const DateButton = ({ title, id, onClick, isSelected, sx }) => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (id && id === isSelected) {
            setIsFocused(true);
        } else {
            setIsFocused(false);
        }
    }, [id, isSelected]);

    return (
        <Button
            id={id}
            color="secondary"
            variant="contained"
            sx={DateButtonStyles(isFocused, sx)}
            onClick={onClick}
        >
            {title}
        </Button>
    );
};

export default DateButton;
