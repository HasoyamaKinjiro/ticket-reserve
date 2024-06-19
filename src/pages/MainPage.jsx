import React, { useState, useEffect } from "react";
import { Container, CircularProgress, Typography } from "@mui/material";
import ChooseDay from "../containers/ChooseDay/ChooseDay";
import Sessions from "../containers/Sessions/Sessions";

const MainPage = ({ movies }) => {
    return (
        <>
            <ChooseDay/>
            <Sessions movies={movies}/>
        </>
    );
};

export default MainPage;
