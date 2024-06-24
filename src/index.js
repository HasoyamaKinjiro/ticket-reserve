import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom/dist";
import { ThemeProvider, createTheme } from "@mui/material";

import store from "./redux/store";
import App from "./App";
import { GlobalStyles } from "./GlobalStyles";

import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
    palette: {
        mode: "dark",
        secondary: {
            main: "#121212",
            secondary: "var(--primary-purple)"
        }
    },
    breakpoints: {
        values: {
            xs: 400,
            sm: 820,
            md: 1260,
            lg: 1280,
            xl: 1920
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Provider store={store}>
            <GlobalStyles/>
            <ThemeProvider theme={theme}>
                <Router>
                    <App/>
                </Router>
            </ThemeProvider>
        </Provider>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
