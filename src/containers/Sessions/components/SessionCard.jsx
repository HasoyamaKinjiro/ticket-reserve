import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Box
} from "@mui/material";
import {
    boxBlurStyles,
    boxStyle,
    buttonTimeStyle,
    cardActionsTime,
    sessionCardStyle
} from "../../../styled/SessionsStyles/SessionCardStyles";
import { SessionPopUp } from "../../../components";

const portal = document.getElementById("session-popup-portal");

const SessionCard = ({ movie }) => {
    const timeStamp = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popUpTime, setPopUpTime] = useState("");

    const openPopUpReservation = (e) => {
        setIsPopupOpen(true);
        setPopUpTime(e.target.innerText);
        document.body.style.overflow = 'hidden';
    };

    const closePopUpReservation = () => {
        setIsPopupOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <Grid item sm={6} md={4} >
                <Card sx={sessionCardStyle}>
                    <CardMedia
                        sx={{ height: "var(--film-img-height)", width: "var(--film-img-width)" }}
                        image={movie.posterUrl}
                        title={movie.title}
                    />
                    <div style={boxStyle}>
                        <CardContent>
                            <Typography
                                sx={{ textAlign: "center" }}
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
                                            onClick={(e) => openPopUpReservation(e)}
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
                <Box
                    sx={boxBlurStyles}
                    onClick={closePopUpReservation}
                >
                    <SessionPopUp movie={movie} time={popUpTime} close={closePopUpReservation}/>
                </Box>,
                portal
            )}
        </>
    );
};

export default SessionCard;
