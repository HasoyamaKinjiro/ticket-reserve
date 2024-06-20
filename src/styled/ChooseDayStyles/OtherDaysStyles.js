const listStyles = {
    width: "var(--list-width)",
    height: "var(--list-height)",
    marginTop: 1,
    padding: 0,
    position: "absolute",
    right: 0,
    border: "1px solid var(--primary-purple)",
    borderRadius: "4px",
    overflowY: "auto",
    zIndex: 1500,
    "&::-webkit-scrollbar": {
        width: "10px",
        background: "white"
    },
    "&::-webkit-scrollbar-track": {
        background: "var(--scrollbar-background)",
        borderRadius: "10px"
    },
    "&::-webkit-scrollbar-thumb": {
        background: "var(--primary-purple)",
        borderRadius: "10px",
        border: "3px solid #f1f1f1"
    },
};

const listItemStyles = {
    padding: "8px 16px",
    borderBottom: "1px solid var(--primary-purple)",
    cursor: "pointer",
    background: 'white',
    "&:hover": {
        backgroundColor: "var(--light-secondary-purple)"
    },
    '&:last-child': {
        borderBottom: 'none'
    }
};

export {
    listStyles,
    listItemStyles
}
