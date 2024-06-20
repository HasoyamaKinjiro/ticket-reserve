import React, { useRef, useState, useEffect } from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { DateButton } from "../../../components";
import { listStyles, listItemStyles } from "../../../styled/ChooseDayStyles/OtherDaysStyles";

const OtherDays = ({ dates, isSelected, changeSelected }) => {
    const [otherDays, setOtherDays] = useState(false);
    const [buttonId, setButtonId] = useState(null);
    const listRef = useRef(null);

    const handleClick = (e) => {
        changeSelected(e);
        setButtonId(e.target.id);
        setOtherDays(false);
        console.log("this moment should be rethink");
    };

    const handleClickOutside = (e) => {
        if (
            listRef.current &&
            !listRef.current.contains(e.target) &&
            listRef.current &&
            !listRef.current.contains(e.target)
        ) {
            setOtherDays(false);
        }
    };

    useEffect(() => {
        if (otherDays) {
            document.addEventListener("mouseup", handleClickOutside);
        } else {
            document.removeEventListener("mouseup", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, [otherDays]);

    return (
        <Box
            sx={{
                position: "relative",
            }}
        >
            <DateButton
                sx={{ ml: "1px" }}
                id={buttonId}
                title="Choose day"
                isSelected={isSelected}
                onClick={() => setOtherDays(!otherDays)}
            />
            {otherDays && (
                <List sx={listStyles} ref={listRef}>
                    {dates.slice(7).map((el, index) => (
                        <ListItem
                            id={el}
                            key={index + 11}
                            sx={listItemStyles}
                            onClick={(e) => handleClick(e)}
                        >
                            <ListItemText
                                primary={el}
                                primaryTypographyProps={{
                                    sx: {
                                        fontSize: "14px",
                                    },
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default OtherDays;
