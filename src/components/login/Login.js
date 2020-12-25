import React, { useEffect } from 'react';
//import { Link as RouterLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
//import { ToastContainer, toast } from 'react-toastify';

//import { authenticate, isAuth } from "../auth/auth";

import Header from "../landing page/Onlyheader";
//import Logo from "../assets/Quiz_image.png";

import{ Box, Button } from "@material-ui/core";

import styles from "./Login.module.css";

const Login = () => {

    const { isAuthenticated, loginWithRedirect} = useAuth0()

    useEffect(() => {
        document.title = "Login | Quiz Made Easy"
    }, []);

    const handleSubmit = () => {            
        loginWithRedirect();
    };

    return ( 
      !isAuthenticated && (
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
                        <Button onClick={handleSubmit} className={styles.loginBtn}>Login</Button>
                    </Box>
                </Box>
            </section>
        </>
        )
     )
}
 
export default Login;