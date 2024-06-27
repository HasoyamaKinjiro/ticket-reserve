import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from './index';

const GeneralLayout = () => (
    <div>
        <Header/>
        <main role="main">
            <Outlet/>
        </main>
        <Footer/>
    </div>
);

export default GeneralLayout;
