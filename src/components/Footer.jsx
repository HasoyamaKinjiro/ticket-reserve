import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { appBarFooter, toolbarFooter } from '../styled/FooterStyles';

const Footer = () => {
    return (
        <AppBar position="static" sx={appBarFooter}>
            <Toolbar sx={toolbarFooter}>
                <Typography variant="subtitle1">© 2024-2024 Ticket Reserve. All rights reserved.</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
