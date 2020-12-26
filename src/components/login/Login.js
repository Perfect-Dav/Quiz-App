import React, { useState, useEffect } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import axios from "axios";

import { authenticate, isAuth } from "../auth/auth";

import Header from "../landing page/Onlyheader";
import Logo from "../assets/Quiz_image.png";

import{ Box, TextField, Link, Button } from "@material-ui/core";

import styles from "./Login.module.css";

const Login = ({ history }) => {

    useEffect(() => {
        document.title = "Login | Quiz Made Easy"
    }, []);

    const[ formData, setFormData ] = useState({
        email: '',
        password: ''
    })

    const handleChange = input => e => {
        setFormData({ ...formData, [input]: e.target.value });
    };

    const { email, password } = formData;

    const handleSubmit = e => {

    e.preventDefault();
        if (email && password) {
          //setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .post(`${process.env.REACT_APP_API_URL}login`, {
              email,
              password
            })
            .then(res => {
                authenticate(res.json(), () => {
                    setFormData({
                    ...formData,
                    email: '',
                    password: '',
                    // textChange: 'Sign In'
                    });
                    console.log(res.data)
                    //toast.success('Sign in successfull');
                });

                // If authenticate but not admin, redirect to /private
                // If admin, redirect to /admin
                isAuth() && isAuth().role === 'admin'
                  ? history.push('/Login')
                  : history.push('/');

            })
            .catch(err => {
                console.log(err.response);          
            });
        } else {
          alert('Please enter your email and password. Thanks.');
        }
    };

    return ( 
        <>
            <section className={styles.loginSection}>
                {isAuth()? <Redirect to='/'/> : null}

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
                      <form>
                        <div className={styles.loginDiv}>
                            <div className={styles.loginDiv_heading}>
                                <img 
                                    src={Logo}
                                    alt="Login Logo"
                                    className="img-fluid"
                                    style={{ maxWidth: '46%' }}
                                />
                                <h3>Welcome to Quiz Inc.</h3>
                                <h5>Please enter your email and password.</h5>
                            </div>
                            <div className={styles.login_input}>
                                <label>Email Address:</label>
                                <TextField
                                    id="outlined-basic"
                                    label="Email Address"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ display: 'block', marginTop: '4px' }}
                                    size="small"
                                    autoComplete="true"
                                    type="email"
                                    defaultValue={email}
                                    onChange={handleChange('email')}
                                    placeholder="you@email.com"
                                /> <br />
                                <label>Password:</label>
                                <TextField
                                    id="outlined-basic password"
                                    label="Password"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ display: 'block', marginTop: '4px' }}
                                    size="small"
                                    autoComplete="true"
                                    type="password"
                                    defaultValue={password}
                                    onChange={handleChange('password')}
                                />

                                <Link className={styles.forgotLink} component={RouterLink} to="/Forgot-Password">
                                    Forgot password?
                                </Link>

                                <Button onClick={handleSubmit} className={styles.loginBtn}>Login</Button>

                                <h5>Don't have an account?</h5>

                                <Button component={RouterLink} to="/Register" className={styles.loginBtn}>Create an account</Button>

                            </div>
                        </div>
                      </form>
                    </Box>
                </Box>
            </section>
        </>
     );
}

export default Login; 