const PopUpPlaceButtonStyle = (isButtonFocused) => ({
    minWidth: 8,
    width: 32,
    height: 40,
    background: isButtonFocused ? "var(--primary-purple)" : "var(--secondary-purple)",
    border: "1px solid var(--primary-purple)"
});

export default PopUpPlaceButtonStyle;
