import React, { useState } from 'react';
import { Button, Tooltip } from '@mui/material';
import PopUpPlaceButtonStyle from '../styled/SessionsStyles/PopUpPlaceButtonStyles';

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
                sx={PopUpPlaceButtonStyle(isButtonFocused)}
                onFocus={handleButtonFocus}
            ></Button>
        </Tooltip>
    );
};

export default PopUpPlaceButton;
