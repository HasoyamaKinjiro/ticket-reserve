import { globalColors, sizes } from '../../GlobalStyles';

const DateButtonStyles = (isFocused: boolean, sx?: any) => ({
    width: sizes.dateButton.width,
    height: sizes.dateButton.height,
    backgroundColor: isFocused && globalColors.primaryPurple,
    '&:hover': {
        backgroundColor: globalColors.secondaryPurple
    },
    '&:focus': {
        backgroundColor: globalColors.primaryPurple
    },
    ...sx
});

export default DateButtonStyles;
