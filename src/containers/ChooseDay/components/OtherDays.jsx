import React, { useRef, useState, useEffect } from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import DateButton from "./DateButton";

const OtherDays = ({ data, isSelected, changeSelected }) => {
  const [otherDays, setOtherDays] = useState(false);
  const [buttonId, setButtonId] = useState(null)
  const listRef = useRef(null);

  const handleClick = (e) => {
    changeSelected(e)
    setButtonId(e.target.id)
    console.log('hi')
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
        id={buttonId}
        title="Choose day" 
        isSelected={isSelected}
        onClick={() => setOtherDays(!otherDays)} 
      />
      {otherDays && (
        <List
          sx={{
            width: "180px",
            height: "276px",
            marginTop: 1,
            padding: 0,
            position: "absolute",
            right: 0,
            border: "1px solid #ce93d8",
            borderRadius: "4px",
            overflowY: "auto",
          }}
          ref={listRef}
        >
          {data.slice(7).map((el, index) => (
            <ListItem
              id={el}
              key={index + 11}
              sx={{
                padding: "8px 16px",
                borderBottom: "1px solid #ce93d8",
                cursor: "pointer"
              }}
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
