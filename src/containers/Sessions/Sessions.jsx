import React from 'react';
import { Container, Grid } from '@mui/material';
import { SessionCard } from '../../components';
import { sessionsGrid } from '../../styled/SessionsStyles/SessionsStyles';

const Sessions = ({ movies }) => (
    <Container>
        <Grid container spacing={2} sx={sessionsGrid} justifyContent="center">
            {movies.map((movie, index) => (
                <SessionCard movie={movie} key={index}/>
            ))}
        </Grid>
    </Container>
);

export default Sessions;
