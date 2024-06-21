import React from 'react';
import { Header, Footer } from './index';
import { Outlet } from 'react-router-dom/dist';

const GeneralLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default GeneralLayout;
