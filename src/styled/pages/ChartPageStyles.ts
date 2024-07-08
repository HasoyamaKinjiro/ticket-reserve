import { sizes } from '../../GlobalStyles';

const chartPageContainer = {
    display: 'flex',
    justifyContent: 'center'
};

const chartPageBox = {
    overflowX: 'auto',
    width: sizes.chart.pageBox.width
};

const titleChartBox = {
    textAlign: 'center'
};

const chartPaper = (moviesLength: number) => ({
    minWidth: `${moviesLength * sizes.chart.bar.width}px`,
    height: `calc(100vh - 228px)`
});

export {
    chartPageContainer,
    chartPageBox,
    titleChartBox,
    chartPaper
};
