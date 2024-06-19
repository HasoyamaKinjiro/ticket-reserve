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
import SessionPopUp from "./SessionPopUp";

const boxBlurStyles = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(10px)",
};

const boxStyle = {
    width: "184px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
};

const buttonTimeStyle = {
    color: "#ce93d8",
    border: "1px solid #ce93d8",
    "&:hover": {
        color: "white",
        backgroundColor: "#5c3e61"
    }
};

const portal = document.getElementById("session-popup-portal");

const SessionCard = ({ movie }) => {
    const timeStamp = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popUpTime, setPopUpTime] = useState("");

    const openPopUpReservation = (e) => {
        setIsPopupOpen(true);
        setPopUpTime(e.target.innerText);
    };

    const closePopUpReservation = () => {
        setIsPopupOpen(false);
    };


    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: "auto", display: "flex" }}>
                    <CardMedia
                        sx={{ height: 325, width: 200 }}
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
                            sx={{
                                paddingBottom: "40px",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center"
                            }}
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
