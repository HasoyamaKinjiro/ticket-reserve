import { globalColors } from '../../GlobalStyles';

const PopUpPlaceButtonStyle = (isButtonFocused) => ({
    minWidth: 8,
    width: 32,
    height: 40,
    background: isButtonFocused ? globalColors.primaryPurple : globalColors.secondaryPurple,
    border: `1px solid ${globalColors.primaryPurple}`
});

export default PopUpPlaceButtonStyle;
