import React from "react";
import { Container, Grid } from "@mui/material";
import SessionCard from "./components/SessionCard";

const Sessions = ({ movies }) => {
    return (
        <Container>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                {movies.map((movie, index) => (
                    <SessionCard movie={movie} key={index} />
                ))}
            </Grid>
        </Container>
    );
};

export default Sessions;
