import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const theme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#121212',
            secondary: '#ce93d8'
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
