import React, { useRef, useState, useEffect } from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import DateButton from "./DateButton";

const listStyles = {
    width: "180px",
    height: "276px",
    marginTop: 1,
    padding: 0,
    position: "absolute",
    right: 0,
    border: "1px solid #ce93d8",
    borderRadius: "4px",
    overflowY: "auto",
    zIndex: 1500,
    "&::-webkit-scrollbar": {
        width: "10px",
        background: "white"
    },
    "&::-webkit-scrollbar-track": {
        background: "#f1f1f1",
        borderRadius: "10px"
    },
    "&::-webkit-scrollbar-thumb": {
        background: "#ce93d8",
        borderRadius: "10px",
        border: "3px solid #f1f1f1"
    },
};

const listItemStyles = {
    padding: "8px 16px",
    borderBottom: "1px solid #ce93d8",
    cursor: "pointer",
    background: 'white',
    "&:hover": {
        backgroundColor: "#e6c9ec"
    },
    '&:last-child': {
        borderBottom: 'none'
    }
};

const OtherDays = ({ dates, isSelected, changeSelected }) => {
    const [otherDays, setOtherDays] = useState(false);
    const [buttonId, setButtonId] = useState(null);
    const listRef = useRef(null);

    const handleClick = (e) => {
        changeSelected(e);
        setButtonId(e.target.id);
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
