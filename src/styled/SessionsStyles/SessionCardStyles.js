const sessionCardStyle = (theme) => ({
    maxWidth: "400px",
    height: "auto",
    display: "flex",
    [theme.breakpoints.down('sm')]: {
        maxWidth: "390px",
    },
    [theme.breakpoints.down('xs')]: {
        maxWidth: "185px",
        flexDirection: "column"
    }
});

const boxBlurStyles = () => ({
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "var(--box-blur-background)",
    backdropFilter: "blur(10px)"
});

const boxStyle = {
    width: "184px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
};

const cardActionsTime = {
    paddingBottom: "40px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
};

const buttonTimeStyle = {
    color: "var(--primary-purple)",
    border: "1px solid var(--primary-purple)",
    "&:hover": {
        color: "white",
        backgroundColor: "var(--secondary-purple)"
    }
};

export {
    sessionCardStyle,
    boxBlurStyles,
    boxStyle,
    cardActionsTime,
    buttonTimeStyle
};
