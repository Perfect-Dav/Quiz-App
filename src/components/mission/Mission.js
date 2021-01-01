import React from 'react';
import { Helmet } from 'react-helmet';

import Container from "react-bootstrap/Container";

import Header from "../landing page/Onlyheader";

import mission1 from "./missionImg/mission1.png";
import mission2 from "./missionImg/mission2.png";

const Mission = () => {
    return ( 
        <>
        <Helmet>
          <title>Our Mission | Quiz Inc.</title>
        </Helmet>

          <section>
              <Header />
            <Container fluid>a
                <div>
                     <img 
                    src={mission1} 
                    alt="Mission 1"
                />
                <img 
                  src={mission2}
                  alt="Mission 2"
                />
                </div>                
            </Container>
          </section>
        </>
     );
}
 
export default Mission;