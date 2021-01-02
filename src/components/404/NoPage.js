import React from 'react';
import { Helmet } from "react-helmet";

const NoPage = () => {
    return ( 
        <>
          <Helmet>
              <title>404 | Page Not Found</title>
          </Helmet>
          
            <section>
                <h2>NOT FOUND</h2>
            </section>
        </>
     );
}
 
export default NoPage;