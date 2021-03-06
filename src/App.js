import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Landing Page
import HomePage from "./components/landing page/Homepage";
import MainHomePage from "./components/landing page/MainHomePage";

//Auths
import Login from "./components/login/Login";
import Logout from "./components/login/Logout";
import ForgotPassword from "./components/registration/ForgotPassword";
import Register from "./components/registration/Register";

//Mission
import Mission from "./components/mission/Mission";

//Daahboard Components
import Dashboard from "./components/dashboard/Dashboard";

//Demo
import Demo from "./components/demo/Demo";

//404 page
import NoPage from "./components/404/NoPage";

// Modules Styles 
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.min.css';

const App = ({ hideLoader }) => {

  // eslint-disable-next-line
  useEffect(hideLoader, []);

  return (     
    <Router>
      
    <div className="App">

    <Helmet>
      <title>Home | Quiz Made Easy</title>
    </Helmet>

      <Switch>
        <Route path="/" exact component={MainHomePage} />
        <Route path="/HomePage" component={HomePage} />

        <Route path="/Mission" component={Mission} />

        <Route path="/Login" component={Login} />
        <Route path="/Logout" component={Logout} />
        <Route path="/Forgot-Password" component={ForgotPassword} />
        <Route path="/Register" component={Register} />

        <Route path="/Dashboard" component={Dashboard} />

        <Route path="/Demo" component={Demo} />

        <Route component={NoPage} />

      </Switch>

    </div>

    </Router>
  );
}

export default App;
