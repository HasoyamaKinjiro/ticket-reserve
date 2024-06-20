import React from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardMedia, IconButton,
    Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
    boxFilmInfo,
    cardActionsPlaceBtns,
    cardStyles,
    iconBtnsPosition
} from "../../../styled/SessionsStyles/SessionPopUpStyles";
import { PopUpPlaceButton } from "../../../components";

const SessionPopUp = ({ movie, close, time }) => {
    const places = [
        "Place 1", "Place 2", "Place 3", "Place 4", "Place 5",
        "Place 6", "Place 7", "Place 8", "Place 9", "Place 10",
        "Place 11", "Place 12", "Place 13", "Place 14", "Place 15",
        "Place 16", "Place 17", "Place 18", "Place 19", "Place 20",
        "Place 21", "Place 22", "Place 23", "Place 24", "Place 25",
        "Place 26", "Place 27", "Place 28", "Place 29", "Place 30"
    ];

    return (
        <Card
            sx={cardStyles}
            onClick={e => {
                e.stopPropagation()
            }}
        >
            <Box
                sx={{
                    display: "flex"
                }}
            >
                <CardMedia
                    sx={{ height: "var(--film-img-height)", width: "var(--film-img-width)" }}
                    image={movie.posterUrl}
                    title={movie.title}
                />
                <Box
                    sx={boxFilmInfo}
                >
                    <Box>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>Duration:</span> {movie.duration} min
                        </Typography>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>Genre:</span> {movie.genre}
                        </Typography>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>Rating:</span> {movie.rating}
                        </Typography>
                    </Box>
                    <Typography color="text.secondary">
                        <span style={{ color: "white", fontWeight: "bold" }}>Description:</span> {movie.description}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography sx={{ ml: "8px", mb: 2 }}>Reservation time: {time}</Typography>
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
                sx={iconBtnsPosition({ bottom: 20 })}
            >Reservation</Button>
            <IconButton
                color="error"
                sx={iconBtnsPosition({ top: 20 })}
                title="close"
                onClick={close}
            ><CloseIcon/></IconButton>
        </Card>
    );
};

export default SessionPopUp;
