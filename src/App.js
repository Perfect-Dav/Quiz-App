import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from "./components/landing page/Homepage";
import MainHomePage from "./components/landing page/MainHomePage";
import Login from "./components/login/Login";
import ForgotPassword from "./components/registration/ForgotPassword";
import Register from "./components/registration/Register";

import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.min.css';

const App = ({ hideLoader }) => {

  // eslint-disable-next-line
  useEffect(hideLoader, []);

  return (
    <Router>
      
    <div className="App">

      <Switch>
        <Route path="/" exact component={MainHomePage} />
        <Route path="/HomePage" component={HomePage} />

        <Route path="/Login" component={Login} />
        <Route path="/Forgot-Password" component={ForgotPassword} />
        <Route path="/Register" component={Register} />

      </Switch>

    </div>

    </Router>
  );
}

export default App;
