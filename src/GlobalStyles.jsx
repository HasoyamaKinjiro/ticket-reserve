import { createGlobalStyle } from 'styled-components';

const globalColors = {
    primaryPurple: '#ce93d8',
    secondaryPurple: '#5c3e61',
    lightSecondaryPurple: '#e6c9ec',
    darkSecondaryPurple: '#705275',
    scrollbarBackground: '#f1f1f1',
    boxBlurBackground: 'rgba(255, 255, 255, 0.1)'
};

const sizes = {
    dateButton: {
        width: '140px',
        height: '60px'
    },
    list: {
        width: '180px',
        height: '276px'
    },
    filmImg: {
        width: '200px',
        height: '325px'
    },
    sessionPopupCard: {
        width: '1184px',
        height: '500px'
    },
    globalMarginBottom: '24px',
    windowWidthChangeBtns: 800
};

const mediaSizes = {
    maxWidth820: {
        sessionPopupCardHeight: '700px'
    },
    maxWidth400: {
        filmImg: {
            width: '185px',
            height: '270px'
        },
        sessionPopupCardHeight: '650px'
    }
}

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export {
    globalColors,
    sizes,
    mediaSizes,
    GlobalStyles
};
