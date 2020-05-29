import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './Context/AuthContext';

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage";
import LoginPage from "views/LoginPage/LoginPage.js";
import MapPage from "views/MapPage/MapPage.js"


ReactDOM.render(
    <AuthProvider>
        <App/>
    </AuthProvider>,
    document.getElementById('root'));
