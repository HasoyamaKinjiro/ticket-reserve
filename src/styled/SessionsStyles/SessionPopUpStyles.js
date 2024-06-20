const cardStyles = (theme) => ({
    width: "var(--session-popup-card-width)",
    height: "var(--session-popup-card-height)",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    position: "relative",
    [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        justifyContent: "center",
        gap: 1
    }
});

const cardActionsPlaceBtns = (theme) => ({
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    gridTemplateRows: "repeat(3, auto)",
    justifyItems: "end",
    gap: 1,
    [theme.breakpoints.down('sm')]: {
        width: "375px",
        overflowX: "scroll"
    }
});

const boxFilmInfo = {
    width: "50%",
    ml: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
};

const iconBtnsPosition = (sx) => ({
    position: "absolute",
    right: 24,
    ...sx
})

export {
    cardStyles,
    cardActionsPlaceBtns,
    boxFilmInfo,
    iconBtnsPosition
};
