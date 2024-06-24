import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { useDispatch, useSelector } from 'react-redux';
import {
    Backdrop,
    Box,
    Button,
    Card,
    CardActions,
    CardMedia, IconButton,
    Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
    boxFilmInfo,
    boxFilmInfoTypography,
    boxFilmInfoTypographyDescription,
    cardActionsPlaceBtns,
    cardStyles,
    reservationTimeTypography,
    sessionPopUpBackdrop,
    sessionPopUpBox,
    sessionPopUpCloseButton,
    sessionPopUpMedia, sessionPopUpReservationButton
} from '../styled/SessionsStyles/SessionPopUpStyles';
import { PopUpPlaceButton } from '../components';
import { setPopUpIsOpen } from '../redux/ducks/reservationMovie';

const places = [
    'Place 1', 'Place 2', 'Place 3', 'Place 4', 'Place 5',
    'Place 6', 'Place 7', 'Place 8', 'Place 9', 'Place 10',
    'Place 11', 'Place 12', 'Place 13', 'Place 14', 'Place 15',
    'Place 16', 'Place 17', 'Place 18', 'Place 19', 'Place 20',
    'Place 21', 'Place 22', 'Place 23', 'Place 24', 'Place 25',
    'Place 26', 'Place 27', 'Place 28', 'Place 29', 'Place 30'
];

const SessionPopUp = () => {
    const movie = useSelector((state) => state.reservationMovieState.movie);
    const time = useSelector((state) => state.reservationMovieState.popUpTime);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!movie) {
            navigate('/');
        }
    }, [movie, navigate])

    const closePopUpReservation = () => {
        document.body.style.overflow = 'auto';

        dispatch(setPopUpIsOpen(false))
        navigate('/');
    };

    if (!movie) {
        return null;
    }

    return (
        <Backdrop
            sx={sessionPopUpBackdrop}
            open={true}
            onClick={closePopUpReservation}
        >
            <Card
                sx={cardStyles}
                onClick={mouseEvent => {
                    mouseEvent.stopPropagation()
                }}
            >
                <Box
                    sx={sessionPopUpBox}
                >
                    <CardMedia
                        sx={sessionPopUpMedia}
                        image={movie.posterUrl}
                        title={movie.title}
                    />
                    <Box
                        sx={boxFilmInfo}
                    >
                        <Box>
                            <Typography>
                                <span style={boxFilmInfoTypography}>Duration:</span> {movie.duration} min
                            </Typography>
                            <Typography>
                                <span style={boxFilmInfoTypography}>Genre:</span> {movie.genre}
                            </Typography>
                            <Typography>
                                <span style={boxFilmInfoTypography}>Rating:</span> {movie.rating}
                            </Typography>
                        </Box>
                        <Typography color="text.secondary">
                            <span style={boxFilmInfoTypographyDescription}>Description:</span> {movie.description}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={reservationTimeTypography}>Reservation time: {time}</Typography>
                    <CardActions
                        sx={cardActionsPlaceBtns}
                    >
                        {
                            places.map((place, index) => (
                                <PopUpPlaceButton key={index} place={place}/>
                            ))
                        }
                    </CardActions>
                </Box>
                <Button
                    color="success"
                    variant="contained"
                    sx={sessionPopUpReservationButton}
                >Reservation</Button>
                <IconButton
                    color="error"
                    sx={sessionPopUpCloseButton}
                    title="close"
                    onClick={closePopUpReservation}
                ><CloseIcon/></IconButton>
            </Card>
        </Backdrop>
    );
};

export default SessionPopUp;
