import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Icon, Box } from '@mui/material';
import { LocalActivity, TableRows } from '@mui/icons-material';

import { appBarHeader, toolbarHeader, ticketIconHeader, boxTitle } from '../styled/HeaderStyles';

const Header = () => {
    const navigate = useNavigate()

    const handleNavigateToHome = () => {
        navigate('/')
    }

    const handleNavigateToTable = () => {
        navigate('/table')
    }

    return (
        <AppBar position="static" sx={appBarHeader} role="banner">
            <Toolbar sx={toolbarHeader}>
                <Box sx={boxTitle} onClick={handleNavigateToHome}>
                    <Typography variant="h6">Ticket reserve</Typography>
                    <Icon color="inherit" sx={ticketIconHeader}>
                        <LocalActivity/>
                    </Icon>
                </Box>
                <Box sx={boxTitle} onClick={handleNavigateToTable}>
                    <Typography variant="h6">Table</Typography>
                    <Icon color="inherit" sx={ticketIconHeader}>
                        <TableRows/>
                    </Icon>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
