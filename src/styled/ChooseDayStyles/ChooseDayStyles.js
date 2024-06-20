const chooseDayContainer = (theme) => ({
    mb: "var(--global-margin-bottom)",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down('sm')]: {
        overflowX: "scroll",
        padding: "0 4px"
    }
});

export {
    chooseDayContainer
};
