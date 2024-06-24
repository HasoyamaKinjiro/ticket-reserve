import { globalColors, mediaSizes, sizes } from '../../GlobalStyles';

const sessionCardStyle = (theme) => ({
    maxWidth: '400px',
    height: 'auto',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        maxWidth: '390px'
    },
    [theme.breakpoints.down('xs')]: {
        maxWidth: '185px',
        flexDirection: 'column'
    }
});

const sessionCardMedia = (theme) => ({
    height: sizes.filmImg.height,
    width: sizes.filmImg.width,
    [theme.breakpoints.down('xs')]: {
        height: mediaSizes.maxWidth400.filmImg.height,
        width: mediaSizes.maxWidth400.filmImg.width
    }
});

const boxStyle = {
    width: '184px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

const sessionCardTitle = {
    textAlign: 'center'
};

const cardActionsTime = {
    paddingBottom: '40px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
};

const buttonTimeStyle = {
    color: globalColors.primaryPurple,
    border: `1px solid ${globalColors.primaryPurple}`,
    '&:hover': {
        color: 'white',
        backgroundColor: globalColors.secondaryPurple
    }
};

export {
    sessionCardStyle,
    sessionCardMedia,
    boxStyle,
    sessionCardTitle,
    cardActionsTime,
    buttonTimeStyle
};
