import React, { useState, forwardRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ToastContainer, toast } from 'react-toastify';

import{ Box, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@material-ui/core";

import Header from "../landing page/Onlyheader";
import Logo from "../assets/Quiz_image.png";

import styles from "./Registration.module.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Registers = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleClickModalOpen = () => {
        setOpenModal(true);
    };    

    const handleClickModalClose = () => {
        setOpenModal(false);
    };

    const[ formData, setFormData ] = useState({
        FirstName: '',
        LastName: '',
        Username: '',
        email: '',
        Password: '',
        ConfirmPassword: ''
    });

    const handleChange = input => e => {
        setFormData({ ...formData, [input]: e.target.value });
    };

    const { FirstName, LastName, Username, email, Password, ConfirmPassword } = formData;

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        if ( FirstName && LastName && Username && email && Password && ConfirmPassword ) {    
            handleClickModalOpen();
        } else {
            toast.error("Error, kindly fill the required inputs.")
        }
    };

    const handleFinalSubmit = e => {
        e.preventDefault();
        if ( FirstName && LastName && Username && email && Password && ConfirmPassword ) {    
            history.push('/Login');
        }
    }
    const handlePassword = e => {
        e.preventDefault();
        if (Password === ConfirmPassword )  {
            toast.success("Password matches")
        } else {
            toast.error("Password doesn't match")
        }
    };

    return ( 
            <>
            <Helmet>
                <title>Register | Quiz Made Easy</title>
            </Helmet>

            <section>
                
                <Header />

                <Dialog
                    open={openModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClickModalClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                <DialogTitle id="alert-dialog-slide-title">
                    {"Quiz Inc. Registration Form Confirmation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Hello, {FirstName} {LastName}. Thank you for creating an account with Quiz Inc.
                        Kindly, ensure you filled the correct informations as they
                        would be validated on your account approval.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickModalClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleFinalSubmit} color="primary">
                        Agree
                    </Button>
                </DialogActions>
                </Dialog>
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
                                  <h2>Welcome to Quiz Inc. <br /> Create your account now!</h2>
                                </div>

                             <div style={{ textAlign: 'left' }}>
                                  <label>First Name: </label>
                                  <TextField
                                    id="outlined-basic"
                                    label="First Name"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ display: 'block', marginTop: '4px' }}
                                    size="small"
                                    autoComplete="true"
                                    type="text"
                                    //value={values.firstname}
                                    defaultValue={FirstName}
                                    onChange={handleChange('FirstName')}
                                    placeholder="Firstname"
                                />
                                <label>Last Name: </label>
                                  <TextField
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ display: 'block', marginTop: '4px' }}
                                    size="small"
                                    autoComplete="true"
                                    type="text"
                                    defaultValue={LastName}
                                    onChange={handleChange('LastName')}
                                    placeholder="Last Name"
                                />
                                <label>Email Address: </label>
                                  <TextField
                                    id="outlined-basic"
                                    label="Email Address"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ display: 'block', marginTop: '4px' }}
                                    size="small"
                                    autoComplete="true"
                                    type="email"
                                    //value={values.firstname}
                                    defaultValue={email}
                                    onChange={handleChange('email')}
                                    placeholder="you@email.com"
                                />
                                <label>Username: </label>
                                  <TextField
                                    id="outlined-basic"
                                    label="Username"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ display: 'block', marginTop: '4px' }}
                                    size="small"
                                    autoComplete="true"
                                    type="text"
                                    defaultValue={Username}
                                    onChange={handleChange('Username')}
                                    placeholder="Username"
                                />
                                <label>Password: </label>
                                  <TextField
                                    id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ display: 'block', marginTop: '4px' }}
                                    size="small"
                                    autoComplete="true"
                                    type="password"
                                    //value={values.firstname}
                                    defaultValue={Password}
                                    onChange={handleChange('Password')}
                                    placeholder="Password"
                                />
                                <label>Confirm Password: </label>
                                  <TextField
                                    id="outlined-basic"
                                    label="Confirm Password"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ display: 'block', marginTop: '4px' }}
                                    size="small"
                                    autoComplete="true"
                                    type="password"
                                    defaultValue={ConfirmPassword}
                                    onKeyUp={handlePassword}
                                    onChange={handleChange('ConfirmPassword')}
                                    placeholder="Confirm Password"
                                />
                              </div>
                              <Button className={styles.regBtn} onClick={handleSubmit} type="submit">Submit</Button>
                            </form>
                            <ToastContainer/>
                        </Box>
                    </Box>
            </section>
            </>
         );
}
 
export default Registers;