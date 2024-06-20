import React from "react";
import { Container, Grid } from "@mui/material";
import { SessionCard } from "../../components";

const Sessions = ({ movies }) => (
    <Container>
        <Grid container spacing={2} sx={{ mb: "var(--global-margin-bottom)" }} justifyContent="center">
            {movies.map((movie, index) => (
                <SessionCard movie={movie} key={index}/>
            ))}
        </Grid>
    </Container>
);

export default Sessions;
