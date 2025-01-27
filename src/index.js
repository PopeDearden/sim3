import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux'
import {HashRouter as Router } from 'react-router-dom'
import store from './ducks/store';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

ReactDOM.render(
    <Provider store ={store}>
        <Router>
            <App/>
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
