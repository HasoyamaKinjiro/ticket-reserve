import { sizes } from '../../GlobalStyles';

const chooseDayContainer = (theme) => ({
    mb: sizes.globalMarginBottom,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
        overflowX: 'scroll',
        padding: '0 4px'
    }
});

export {
    chooseDayContainer
};
