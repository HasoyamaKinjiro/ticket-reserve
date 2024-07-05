import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GeneralLayout, SessionPopUp } from './components';
import MainPage from './pages/MainPage';
import TablePage from './pages/TablePage';

const App = () => (
    <Routes>
        <Route element={<GeneralLayout/>}>
            <Route path="/" element={<MainPage/>}>
                <Route path="reservation" element={<SessionPopUp/>}/>
            </Route>
            <Route path="table" element={<TablePage/>}/>
        </Route>
    </Routes>
);

export default App;
