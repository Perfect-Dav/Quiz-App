import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

//import { authenticate, isAuth } from "../auth/auth";

import Header from "../landing page/Onlyheader";
import Logo from "../assets/Quiz_image.png";

import{ Box, TextField, Link, Button } from "@material-ui/core";

import styles from "./Login.module.css";

const Logout = () => {

    const { logout } = useAuth0();

    useEffect(() => {
        document.title = "LogOut | Quiz Made Easy"
    }, []);

    
    return ( 
        <>
            <section className={styles.loginSection}>                
                <Header />

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    paddingY={10}
                    bgcolor="#2f49b0"
                    width="100%"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        width={500}
                        border="1px solid #f4f4f4"
                        p={3}
                        borderRadius={13}
                        bgcolor="#fff"
                    >
                        <Button onClick={() => logout({ returnTo: window.location.origin })} className={styles.loginBtn}>Log Out</Button>
                    </Box>
                </Box>
            </section>
        </>
        )
}
 
export default Logout;