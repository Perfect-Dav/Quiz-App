import React from 'react';

import Container from "react-bootstrap/Container";

import Header from "../landing page/Onlyheader";

import mission1 from "./missionImg/mission1.png";
import mission2 from "./missionImg/mission2.png";

const Mission = () => {
    return ( 
        <>
          <section>
              <Header />
            <Container fluid>
                <div>
                     <img 
                    src={mission1} 
                    alt="Mission 1"
                />
                </div>                
            </Container>
          </section>
        </>
     );
}
 
export default Mission;