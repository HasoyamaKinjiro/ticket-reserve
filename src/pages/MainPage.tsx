import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom/dist';
import { CircularProgress, Container, Typography } from '@mui/material';

import { ChooseDay, Sessions } from '../components';
import { fetchMovies } from '../redux/ducks/movies';
import { mainPageContainer, mainPageError } from '../styled/MainPageStyles';
import { State } from '../redux/store';

const MainPage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state: State) => state.moviesState.movies);
    const loading = useSelector((state: State) => state.moviesState.loading);
    const error = useSelector((state: State) => state.moviesState.error);

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch]);

    if (loading) {
        return <CircularProgress color="success"/>
    }

    if (error) {
        return <Typography variant="h6" sx={mainPageError}>Error: {error}</Typography>;
    }

    return (
        <Container
            maxWidth="lg"
            sx={mainPageContainer}
        >
            <ChooseDay/>
            <Sessions movies={movies}/>
            <Outlet/>
        </Container>
    )
};

export default MainPage;
