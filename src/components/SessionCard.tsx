import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Box
} from '@mui/material';

import {
    boxStyle,
    buttonTimeStyle,
    cardActionsTime,
    sessionCardMedia,
    sessionCardStyle,
    sessionCardTitle
} from '../styled/SessionsStyles/SessionCardStyles';
import { SessionPopUp } from './index';
import { setMovie, setPopUpIsOpen, setPopUpTime } from '../redux/ducks/reservationMovie';

import { Movie } from '../types';
import { Dispatch, State } from '../redux/store';

const portal = document.getElementById('session-popup-portal');

interface SessionCardI {
    movie: Movie
}

const SessionCard = ({ movie }: SessionCardI) => {
    const timeStamp = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];
    const isPopupOpen = useSelector((state: State) => state.reservationMovieState.popUpIsOpen)

    const navigate = useNavigate();
    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        if (isPopupOpen) {
            navigate('reservation');
        }
    }, [isPopupOpen, navigate]);

    const openPopUpReservation = (btnClickEvent: React.MouseEvent<HTMLElement>) => {
        dispatch(setPopUpIsOpen(true));
        const target = btnClickEvent.target as HTMLElement | null;

        if (target && target.innerText) {
            const time = target.innerText;
            document.body.style.overflow = 'hidden';

            dispatch(setPopUpTime(time));
            dispatch(setPopUpIsOpen(true));
            dispatch(setMovie(movie));
        }
    };

    return (
        <>
            <Grid item sm={6} md={4}>
                <Card sx={sessionCardStyle}>
                    <CardMedia
                        sx={sessionCardMedia}
                        image={movie.posterUrl}
                        title={movie.title}
                    />
                    <Box sx={boxStyle}>
                        <CardContent>
                            <Typography
                                sx={sessionCardTitle}
                                gutterBottom
                                variant="h6"
                                component="div"
                            >
                                {movie.title}
                            </Typography>
                        </CardContent>
                        <CardActions
                            sx={cardActionsTime}
                        >
                            <Grid container spacing={1} justifyContent="center">
                                {timeStamp.map((time, index) => (
                                    <Grid item key={index}>
                                        <Button
                                            size="small"
                                            sx={buttonTimeStyle}
                                            onClick={(btnClickEvent) => openPopUpReservation(btnClickEvent)}
                                        >
                                            {time}
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>
                        </CardActions>
                    </Box>
                </Card>
            </Grid>
            {isPopupOpen && portal && createPortal(
                <SessionPopUp/>,
                portal
            )}
        </>
    );
};

export default SessionCard;
