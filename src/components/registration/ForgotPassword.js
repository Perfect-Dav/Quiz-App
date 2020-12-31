import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { isAuth } from "../auth/auth";
import { toast, ToastContainer } from "react-toastify";

import Header from "../landing page/Onlyheader";
import styles from "./Registration.module.css";

import Logo from "../assets/Quiz_image.png";

import{ Box, TextField, Button } from "@material-ui/core";

const ForgotPassword = () => {

    useEffect(() => {
        document.title = "Forgot Password | Quiz Made Easy"
    }, []);

    const [ formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
    };

    const handleSubmit = e => {

    e.preventDefault();
    
    if (email) {
      setFormData({ ...formData, textChange: 'Submitting' });
      axios
        .put(`${process.env.REACT_APP_API_URL}/password/forgot`, {
          email
        })
        .then(res => {
            setFormData({
              ...formData,
              email: '',
            });
            //toast.success(`Success! Check your mail.`);
            toast.success("Success! Check your mail.")
          
        })
        .catch(err => {
        console.log(err.response)
          toast.error(err.response.data.error);
        });
    } else {
      //toast.error('Error. try again!');
      toast.error('Error, try again!');
    }
  };

    return ( 
        <>
          <section className={styles.forgotSection}>
            {isAuth()? <Redirect to='/login'/> : null}
            <Header />
            <ToastContainer/>
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
                <form className={styles.form}>
                  <div>
                    <img 
                      src={Logo}
                      alt="Forgot Logo"
                      className="img-fluid"
                      style={{ maxWidth: '46%' }}
                    />
                    <h2>Hi, Enter your email address to retrieve your password.</h2>
                  </div>
                  <div style={{ textAlign: 'left' }}>
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
                    />
                  </div>

                  <Button onClick={handleSubmit} className={styles.forgotBtn}>Submit</Button>

                </form>
              </Box>
            </Box>
          </section>
        </>
     );
}
 
export default ForgotPassword;