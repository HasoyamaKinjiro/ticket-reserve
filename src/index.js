import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from "./GlobalStyles";


const theme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#121212',
            secondary: 'var(--primary-purple)'
        },
    },
    breakpoints: {
        values: {
            xs: 400,
            sm: 820,
            md: 1260,
            lg: 1280,
            xl: 1920,
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
