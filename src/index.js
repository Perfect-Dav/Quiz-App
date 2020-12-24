import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme";
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

//const domain = process.env.REACT_APP_AUTH0_DOMAIN
//const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

const loader = document.querySelector('.loader');

const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader =() => loader.classList.add('loader--hide');

setTimeout(() => 
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="pdev-tech.us.auth0.com"
      clientId="YTZiNveqFQFYRyX4yLgRlmpSKq9R2vzJ"
      redirectUri={window.location.origin}
    >
    <ThemeProvider theme={theme}>
      <App 
        hideLoader={hideLoader}
        showLoader={showLoader}
      />
    </ThemeProvider>
   </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
