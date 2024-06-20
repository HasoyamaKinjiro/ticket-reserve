import React from "react";
import { ChooseDay, Sessions } from "../components"

const MainPage = ({ movies }) => (
    <>
        <ChooseDay/>
        <Sessions movies={movies}/>
    </>
);

export default MainPage;
