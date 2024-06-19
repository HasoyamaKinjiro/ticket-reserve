import React, { useState } from "react";
import { Button, Tooltip } from "@mui/material";

const PopUpPlaceButton = ({ place }) => {
    const [isButtonFocused, setIsButtonFocused] = useState(false);

    const handleButtonFocus = () => {
        setIsButtonFocused(!isButtonFocused);
    };
    return (
        <Tooltip
            title={place}
            placement="top"
            disableInteractive
            arrow
        >
            <Button
                sx={{
                    minWidth: 8,
                    width: 32,
                    height: 40,
                    background: isButtonFocused ? "#ce93d8" : "#5c3e61",
                    border: "1px solid #ce93d8"
                }}
                onFocus={handleButtonFocus}
            ></Button>
        </Tooltip>
    );
};

export default PopUpPlaceButton;
