import React from 'react';
import { Helmet } from 'react-helmet';

import Header from "../landing page/Onlyheader";

const Demo = () => {
    return ( 
        <>
          <Helmet>
              <title>Demo | Quiz Made Easy</title>
          </Helmet>
          
            <section>
                <Header/>
            </section>
        </>
     );
}
 
export default Demo;