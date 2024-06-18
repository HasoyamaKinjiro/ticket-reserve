import React, { useState, useEffect } from "react";
import { Container, CircularProgress, Typography } from "@mui/material";
import ChooseDay from "../containers/ChooseDay/ChooseDay";
import Sessions from "../containers/Sessions/Sessions";

const MainPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("https://demo1132065.mockable.io/movies");
                if (!response.ok) {
                    throw new Error(
                        "Network response was not ok: " + response.statusText
                    );
                }
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return <CircularProgress color="success" />
    }

    if (error) {
        return <Typography variant="h6" sx={{ color: 'tomato' }}>Error: {error}</Typography>;
    }

    return (
        <Container maxWidth="lg">
            <ChooseDay />
            <Sessions movies={movies}/>
        </Container>
    );
};

export default MainPage;
