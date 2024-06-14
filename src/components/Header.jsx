import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar>
        <Toolbar>
            <Typography
                variant='h2'
            >
                Ticket reserve
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header
