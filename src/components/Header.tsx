import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Icon, Box } from '@mui/material';
import { LocalActivity, TableRows, BarChart } from '@mui/icons-material';

import { appBarHeader, toolbarHeader, iconHeader, boxTitle, boxRightSideSection } from '../styled/HeaderStyles';

const Header = () => {
    const navigate = useNavigate()

    const handleNavigate = (destination: string) => {
        switch (destination) {
            case 'home':
                navigate('/');
                break;
            case 'table':
                navigate('/table');
                break;
            case 'chart':
                navigate('/chart');
                break;
            default:
                console.warn('Unknown destination');
        }
    }

    return (
        <AppBar position="static" sx={appBarHeader} role="banner">
            <Toolbar sx={toolbarHeader}>
                <Box sx={boxTitle} onClick={() => handleNavigate('home')}>
                    <Typography variant="h6">Ticket reserve</Typography>
                    <Icon color="inherit" sx={iconHeader}>
                        <LocalActivity/>
                    </Icon>
                </Box>
                <Box sx={boxRightSideSection}>
                    <Box sx={boxTitle} onClick={() => handleNavigate('chart')}>
                        <Typography variant="h6">Chart</Typography>
                        <Icon color="inherit" sx={iconHeader}>
                            <BarChart/>
                        </Icon>
                    </Box>
                    <Box sx={boxTitle} onClick={() => handleNavigate('table')}>
                        <Typography variant="h6">Table</Typography>
                        <Icon color="inherit" sx={iconHeader}>
                            <TableRows/>
                        </Icon>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
