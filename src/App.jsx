import React from 'react';
import { Route, Routes } from 'react-router-dom/dist';
import { GeneralLayout, SessionPopUp } from './components';
import MainPage from './pages/MainPage';

function App () {
    return (
        <Routes>
            <Route element={<GeneralLayout/>}>
                <Route path="/" element={<MainPage/>}>
                    <Route path="/reservation" element={<SessionPopUp/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
