import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuth } from "../auth/auth";

import Header from "../landing page/Onlyheader";
import Logo from "../assets/Quiz_image.png";

import styles from "./Registration.module.css";

import { Box, TextField, Button } from "@material-ui/core";

class Registerpage1 extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() { 
      const { values, handleChange } = this.props;

        return ( 
            <>
             {isAuth()? <Redirect to='/'/> : null}
            <section>
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
                            <form className={styles.form}>
                                <div>
                                    <img 
                                        src={Logo}
                                        alt="Forgot Logo"
                                        className="img-fluid"
                                        style={{ maxWidth: '46%' }}
                                    />
                                <h2>Welcome to Quiz Inc. <br /> Create your account now!</h2>

                                <div className="col-12 form-group">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <ul className={styles.progressbar}>
                                                <li className={styles.active}></li>
                                                <li className=""></li>
                                                <li className=""></li>
                                            </ul>
                                        </div>
                                    </div>
                                  </div>
                                  {/** Progress **/}
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
                                    defaultValue={values}
                                    onChange={handleChange('firstname')}
                                    placeholder="First name...."
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
                                    //value={values.lastname}
                                    onChange={handleChange('laghstname')}
                                    placeholder="Last name...."
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
                                    //value={values.firstname}
                                    defaultValue={values}
                                    onChange={handleChange('username')}
                                    placeholder="Username"
                                />
                                <label>Role: </label>
                                  <TextField
                                    id="outlined-basic"
                                    label="Username"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ display: 'block', marginTop: '4px' }}
                                    size="small"
                                    autoComplete="true"
                                    type="text"
                                    //value={values.firstname}
                                    defaultValue={values}
                                    onChange={handleChange('username')}
                                    placeholder="Username"
                                />
                              </div>
                              <Button onClick={this.continue} type="submit">Next</Button>
                            </form>
                        </Box>
                    </Box>
            </section>
            </>
         );
    }
}
 
export default Registerpage1;