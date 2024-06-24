import React from 'react';
import { Outlet } from 'react-router-dom/dist';

import { Header, Footer } from './index';

const GeneralLayout = () => (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
);

export default GeneralLayout;
