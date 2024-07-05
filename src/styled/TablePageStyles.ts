import { sizes } from '../GlobalStyles';

const boxTable = {
    display: 'flex',
    justifyContent: 'center',
    mb: sizes.globalMarginBottom
}

const paperTable = {
    maxWidth: '800px',
    '& .MuiTableCell-root': {
        borderBottom: '5px solid rgba(224, 224, 224, 1)'
    }
}

export {
    boxTable,
    paperTable
}
