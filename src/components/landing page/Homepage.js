import React from 'react';

import Header from "./Header";
import { UsersList } from "./userImages";
import GetStarted from "./GetStarted";

const Homepage = () => {
    return ( 
        <>
            <Header />
            
            <UsersList />

            <GetStarted />
        </>
     );
}
 
export default Homepage;