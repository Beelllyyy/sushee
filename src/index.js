import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter as Router} from 'react-router-dom'

import './styles.css'
import App from './App';
import {ContextProvider} from "./Context";


ReactDOM.render(
    <ContextProvider>
        <Router basename={window.location.pathname || ''}>
            <App />
        </Router>
    </ContextProvider>,
    document.getElementById('root')
);
