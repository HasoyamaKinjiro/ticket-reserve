const DateButtonStyles = (isFocused, sx) => ({
    width: "var(--date-button-width)",
    height: "var(--date-button-height)",
    backgroundColor: isFocused && "var(--primary-purple)",
    "&:hover": {
        backgroundColor: "var(--dark-secondary-purple)"
    },
    ...sx
});

export default DateButtonStyles;
