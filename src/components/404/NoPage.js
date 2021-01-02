import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from "react-helmet";

import{ Box, Button } from "@material-ui/core";

//Images
import topImg from "./assets/404image.png";

//Styles
import styles from "./nopage.module.css";

const NoPage = () => {
    return ( 
        <>
          <Helmet>
              <title>404 | Page Not Found</title>
          </Helmet>

            <section className={styles.noPageBg}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    paddingY={10}
                    bgcolor="#2f49b0"
                    width="100%"
                    height="100%"
                    style={{ padding: '20px' }}
                >
                    <div>
                        <img 
                            src={topImg}
                            alt="404 logo"
                            className="img-fluid"
                        />
                        <h1>404 | PAGE NOT FOUND !</h1>
                        <h2>Sure you know the page you are looking for?</h2>

                        <Button component={RouterLink} to="/" className={styles.homeButton}>
                            Go Back Home
                        </Button>

                    </div>
                </Box>
                
            </section>
        </>
     );
}
 
export default NoPage;