import React from "react";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from "@mui/material";

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

const SessionCard = ({ movie }) => {
    const timeStamp = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];

    const goToReservationPage = () => {
        console.log("Coming soon")
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
                                            onClick={goToReservationPage}
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
        </>
    );
};

export default SessionCard;
