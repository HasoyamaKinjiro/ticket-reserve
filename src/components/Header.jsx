import React from "react";
import { AppBar, Toolbar, Typography, Icon } from "@mui/material";
import { LocalActivity } from "@mui/icons-material";

const Header = () => {
    return (
        <AppBar position="static" sx={{ mb: 3 }}>
            <Toolbar>
                <Typography variant="h6">Ticket reserve</Typography>
                <Icon color="inherit" sx={{ ml: 1 }}>
                    <LocalActivity />
                </Icon>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
