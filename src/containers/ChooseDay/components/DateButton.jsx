import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const DateButtonStyle = (isFocused, sx) => ({
    width: "140px",
    height: "60px",
    backgroundColor: isFocused && "#ce93d8",
    "&:hover": {
        backgroundColor: "#705275"
    },
    ...sx
});

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
            sx={DateButtonStyle(isFocused, sx)}
            onClick={onClick}
        >
            {title}
        </Button>
    );
};

export default DateButton;
