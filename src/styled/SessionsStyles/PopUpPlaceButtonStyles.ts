import { globalColors } from '../../GlobalStyles';

const PopUpPlaceButtonStyle = (isButtonFocused: boolean) => ({
    minWidth: '8px',
    width: '32px',
    height: '40px',
    background: isButtonFocused ? globalColors.primaryPurple : globalColors.secondaryPurple,
    border: `1px solid ${globalColors.primaryPurple}`
});

export default PopUpPlaceButtonStyle;
