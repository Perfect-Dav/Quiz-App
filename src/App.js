import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from "./components/landing page/Homepage";
import MainHomePage from "./components/landing page/MainHomePage";
import "bootstrap/dist/css/bootstrap.css";

const App = ({ hideLoader }) => {

  // eslint-disable-next-line
  useEffect(hideLoader, []);

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainHomePage} />
        <Route path="/HomePage" component={HomePage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
