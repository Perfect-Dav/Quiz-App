import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme";
import reportWebVitals from './reportWebVitals';

const loader = document.querySelector('.loader');

const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader =() => loader.classList.add('loader--hide');

setTimeout(() => 
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App 
        hideLoader={hideLoader}
        showLoader={showLoader}
      />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
