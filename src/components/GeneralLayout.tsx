import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from './index';
import { Layout, Main } from '../styled/GeneralLayoutStyles';

const GeneralLayout = () => (
    <Layout>
        <Header/>
        <Main role="main">
            <Outlet/>
        </Main>
        <Footer/>
    </Layout>
);

export default GeneralLayout;
