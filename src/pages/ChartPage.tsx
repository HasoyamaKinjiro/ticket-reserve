import React, { useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    BarController,
    Tooltip,
    Legend
} from 'chart.js';
import { Container, Box, Paper, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';

import { State } from '../redux/store';
import { fetchMovies } from '../redux/ducks/movies';
import { globalColors } from '../GlobalStyles';
import {
    chartPageBox,
    chartPageContainer,
    chartPaper,
    titleChartBox
} from '../styled/pages/ChartPageStyles';

ChartJS.register(CategoryScale, LinearScale, BarElement, BarController, Tooltip, Legend);

const ChartPage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state: State) => state.moviesState.movies);

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch]);

    return (
        <Container sx={chartPageContainer}>
            <Box sx={chartPageBox}>
                <Box sx={titleChartBox}>
                    <Typography variant="h6">Films rating</Typography>
                </Box>
                <Paper sx={chartPaper(movies.length)}>
                    <Bar
                        data={{
                            labels: movies.map(movie => movie.title),
                            datasets: [
                                {
                                    label: 'Rating',
                                    data: movies.map((movie) => movie.rating),
                                    backgroundColor: globalColors.primaryPurple,
                                    borderColor: globalColors.secondaryPurple,
                                    borderWidth: 1,
                                    barThickness: 70
                                }
                            ]
                        }}
                        options={{
                            maintainAspectRatio: false,
                            layout: {
                                padding: {
                                    left: 10,
                                    right: 10
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    ticks: {
                                        color: globalColors.scrollbarBackground
                                    },
                                    grid: {
                                        color: globalColors.boxBlurBackground
                                    }
                                },
                                x: {
                                    ticks: {
                                        color: globalColors.scrollbarBackground,
                                        maxRotation: 0,
                                        autoSkip: false
                                    },
                                    grid: {
                                        color: globalColors.boxBlurBackground
                                    }
                                }
                            },
                            plugins: {
                                legend: {
                                    display: true,
                                    align: 'start',
                                    labels: {
                                        color: globalColors.scrollbarBackground
                                    }
                                }
                            }
                        }}
                    />
                </Paper>
            </Box>
        </Container>
    );
};

export default ChartPage;
