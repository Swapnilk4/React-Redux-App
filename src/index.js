import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
//import Counters from './components/counters';
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore from './redux/configureStore';
import {Provider as ReduxProvider} from'react-redux';

const store = configureStore();

render(
  <ReduxProvider store ={store}>
    <Router>
    <App />
    </Router>
    </ReduxProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
