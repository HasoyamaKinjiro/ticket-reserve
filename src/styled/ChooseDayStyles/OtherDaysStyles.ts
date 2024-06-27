import { globalColors, sizes } from '../../GlobalStyles';

const boxOtherDays = {
    position: 'relative'
};

const dateButtonOtherDays = {
    ml: '1px'
};

const listStyles = {
    width: sizes.list.width,
    height: sizes.list.height,
    marginTop: 1,
    padding: 0,
    position: 'absolute',
    right: 0,
    border: `1px solid ${globalColors.primaryPurple}`,
    borderRadius: '4px',
    overflowY: 'auto',
    zIndex: 1500,
    '&::-webkit-scrollbar': {
        width: '10px',
        background: 'white'
    },
    '&::-webkit-scrollbar-track': {
        background: globalColors.scrollbarBackground,
        borderRadius: '10px'
    },
    '&::-webkit-scrollbar-thumb': {
        background: globalColors.primaryPurple,
        borderRadius: '10px',
        border: `3px solid ${globalColors.scrollbarBackground}`
    }
};

const listItemStyles = {
    padding: '8px 16px',
    borderBottom: `1px solid ${globalColors.primaryPurple}`,
    cursor: 'pointer',
    background: 'white',
    '&:hover': {
        backgroundColor: globalColors.lightSecondaryPurple
    },
    '&:last-child': {
        borderBottom: 'none'
    }
};

const primaryTypographyStylesOtherDays = {
    sx: {
        fontSize: '14px'
    }
};

export {
    boxOtherDays,
    dateButtonOtherDays,
    listStyles,
    listItemStyles,
    primaryTypographyStylesOtherDays
}
