import React, { Component } from 'react';

import RegisterPage1 from "./Registerpage1";

class Register extends Component {
    state = { 
        step: 1,
        firstname: '',
        lastname: '',
        username: '',
        password: ''
     };


    componentDidMount() {
        document.title = "Register | Quiz Made Easy"
    };

    nextStep = () => {
        const { step } = this.state;
            this.setState({
                step: step + 1
        });
    };

    prevStep =() => {
        const { step } = this.state;
            this.setState({
                step: step - 1
        });
    }
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    resetState = () => {
        this.setState({
            step: 1,
            firstname: '',
            lastname: '',
            username: '',
            password: ''
        });
    };

    render() {  

        const { step } = this.state;
        const { firstname, lastname, username, password } = this.state;
        const values = { firstname, lastname, username, password };

        // eslint-disable-next-line
            switch (step) {
                case 1:
                    return(
                        <>
                          <RegisterPage1 
                            nextStep={this.nextStep}
                            resetState={this.resetState}
                            handleChange={this.handleChange}
                            value={values}
                          />
                        </>                  
                    );

                    case 2: 
                    return(
                        <>
                          <RegisterPage1 
                            nextStep={this.nextStep}
                            resetState={this.resetState}
                            handleChange={this.handleChange}
                            value={values}
                          />
                        </> 
                    );
                    case 3: 
                    return <h2>Sucsess !</h2>;  
            }

    }
}
 
export default Register;