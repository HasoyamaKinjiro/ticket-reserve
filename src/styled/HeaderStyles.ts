import { sizes } from '../GlobalStyles';

const appBarHeader = {
    padding: '0 24px',
    mb: sizes.globalMarginBottom
};

const toolbarHeader = {
    margin: '0 31.5px',
    display: 'flex',
    justifyContent: 'space-between'
}

const boxTitle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none'
}

const boxRightSideSection = {
    display: 'flex',
    gap: 4
}

const iconHeader = {
    ml: 1
}

export {
    appBarHeader,
    toolbarHeader,
    boxTitle,
    boxRightSideSection,
    iconHeader
};
