import React, { Component } from 'react';

import Registers from "./Registers";
import Registerpage2 from "./RegisterPage2";

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
            firstName: '',
            lastName: '',
            userName: '',
            password: ''
        });
    };

    render() {  

        const { step } = this.state;
        const { firstName, lastName, userName, email, password } = this.state;
        const values = { firstName, lastName, userName, email, password };

        // eslint-disable-next-line
            switch (step) {
                case 1:
                    return(
                          <Registers
                            
                          />           
                    );

                    case 2: 
                        return(
                          <Registerpage2 
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            value={values}
                          />
                        
                        );

                    case 3: 
                        return <h2>Sucsess !</h2>;  
            }

    }
}
 
export default Register;