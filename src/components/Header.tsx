import React from 'react';
import { AppBar, Toolbar, Typography, Icon } from '@mui/material';
import { LocalActivity } from '@mui/icons-material';

import { appBarHeader, toolbarHeader, ticketIconHeader } from '../styled/HeaderStyles';

const Header = () => (
    <AppBar position="static" sx={appBarHeader} role="banner">
        <Toolbar sx={toolbarHeader}>
            <Typography variant="h6">Ticket reserve</Typography>
            <Icon color="inherit" sx={ticketIconHeader}>
                <LocalActivity/>
            </Icon>
        </Toolbar>
    </AppBar>
);

export default Header;
