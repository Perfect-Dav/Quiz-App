import React, { useEffect } from 'react';

import Homepage from "./Homepage";

const MainHomePage = () => {

    useEffect(() => {
        document.title = "Home | Quiz Made Easy"
    }, []);

    return ( 
        <>
        <Homepage />
        </>
     );
}
 
export default MainHomePage;