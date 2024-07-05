import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

import store from './redux/store';
import App from './App';
import { GlobalStyles } from './GlobalStyles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#121212'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'rgba(255, 255, 255, 0.87) !important'
                }
            }
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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
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
