import React from 'react';
import { Container, Grid } from '@mui/material';

import { SessionCard } from '../components';
import { sessionsGrid } from '../styled/SessionsStyles/SessionsStyles';
import { Movie } from '../types';

interface SessionsI {
    movies: Movie[];
}

const Sessions = ({ movies }: SessionsI) => (
    <Container>
        <Grid container spacing={2} sx={sessionsGrid} justifyContent="center">
            {movies.map((movie: Movie, index: number) => (
                <SessionCard movie={movie} key={index}/>
            ))}
        </Grid>
    </Container>
);

export default Sessions;
