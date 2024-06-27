import { sizes } from '../../GlobalStyles';
import { Theme } from '@mui/material';

const chooseDayContainer = (theme: Theme) => ({
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
