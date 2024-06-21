import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovie, setPopUpIsOpen, setPopUpTime } from '../store/reservationMovie';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom/dist';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@mui/material';
import {
    boxStyle,
    buttonTimeStyle,
    cardActionsTime,
    sessionCardMedia,
    sessionCardStyle,
    sessionCardTitle
} from '../styled/SessionsStyles/SessionCardStyles';
import { SessionPopUp } from '../components';

const portal = document.getElementById('session-popup-portal');

const SessionCard = ({ movie }) => {
    const timeStamp = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];
    const isPopupOpen = useSelector((state) => state.reservationMovieState.popUpIsOpen)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isPopupOpen) {
            navigate('reservation');
        }
    }, [isPopupOpen, navigate]);

    const openPopUpReservation = (btnClickEvent) => {
        const time = btnClickEvent.target.innerText;
        document.body.style.overflow = 'hidden';

        dispatch(setPopUpIsOpen(true));
        dispatch(setMovie(movie));
        dispatch(setPopUpTime(time));
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
                    <div style={boxStyle}>
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
                    </div>
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
