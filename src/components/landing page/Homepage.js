import React from 'react';

import Header from "./Header";
import { UsersList } from "./userImages";
import GetStarted from "./GetStarted";
import Overview from "./Overview";
import Footer from "./Footer";

const Homepage = () => {
    return ( 
        <>
            <Header />
            
            <UsersList />

            <GetStarted />

            <Overview />

            <Footer />
        </>
     );
}
 
export default Homepage;