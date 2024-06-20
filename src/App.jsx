import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Typography } from "@mui/material";
import { Header } from "./components";
import MainPage from "./pages/MainPage";

function App () {
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
                console.error("Error fetching movies:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return <CircularProgress color="success"/>
    }

    if (error) {
        return <Typography variant="h6" sx={{ color: "tomato" }}>Error: {error}</Typography>;
    }

    return (
        <div>
            <Header/>
            <Container
                maxWidth="lg"
                sx={{
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                }}
            >
                <MainPage movies={movies}/>
            </Container>
        </div>
    );
}

export default App;
