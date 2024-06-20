import React from "react";
import { AppBar, Toolbar, Typography, Icon } from "@mui/material";
import { LocalActivity } from "@mui/icons-material";
import { appBarStyles } from "../styled/HeaderStyles";

const Header = () => (
    <AppBar position="static" sx={appBarStyles}>
        <Toolbar>
            <Typography variant="h6">Ticket reserve</Typography>
            <Icon color="inherit" sx={{ ml: 1 }}>
                <LocalActivity/>
            </Icon>
        </Toolbar>
    </AppBar>
);

export default Header;
