import { globalColors, mediaSizes, sizes } from '../../GlobalStyles';
import { Theme } from '@mui/material';

const sessionPopUpBackdrop = {
    background: globalColors.boxBlurBackground,
    backdropFilter: 'blur(3px)'
};

const cardStyles = (theme: Theme) => ({
    width: sizes.sessionPopupCard.width,
    height: sizes.sessionPopupCard.height,
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        height: mediaSizes.maxWidth820.sessionPopupCardHeight,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 1
    },
    [theme.breakpoints.down('xs')]: {
        height: mediaSizes.maxWidth400.sessionPopupCardHeight
    }
});

const sessionPopUpBox = {
    display: 'flex'
};

const sessionPopUpMedia = (theme: Theme) => ({
    height: sizes.filmImg.height,
    width: sizes.filmImg.width,
    [theme.breakpoints.down('xs')]: {
        height: mediaSizes.maxWidth400.filmImg.height,
        width: mediaSizes.maxWidth400.filmImg.width
    }
});

const cardActionsPlaceBtns = (theme: Theme) => ({
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gridTemplateRows: 'repeat(3, auto)',
    justifyItems: 'end',
    gap: 1,
    [theme.breakpoints.down('sm')]: {
        width: '375px',
        overflowX: 'scroll'
    }
});

const boxFilmInfo = {
    width: '50%',
    ml: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
};

const boxFilmInfoTypography = {
    fontWeight: 'bold'
};

const boxFilmInfoTypographyDescription = {
    color: 'white',
    fontWeight: 'bold'
};

const reservationTimeTypography = {
    ml: '8px',
    mb: 2
};

const sessionPopUpCloseButton = {
    position: 'absolute',
    right: 24,
    top: 20
};

const sessionPopUpReservationButton = {
    position: 'absolute',
    right: 24,
    bottom: 20
};

export {
    sessionPopUpBackdrop,
    cardStyles,
    sessionPopUpBox,
    sessionPopUpMedia,
    cardActionsPlaceBtns,
    boxFilmInfo,
    boxFilmInfoTypography,
    boxFilmInfoTypographyDescription,
    reservationTimeTypography,
    sessionPopUpCloseButton,
    sessionPopUpReservationButton
};
