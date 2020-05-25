import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage";
import LoginPage from "views/LoginPage/LoginPage.js";

//Utilisateurs
import UserPage from "views/Utilisateurs/UserPage"


//Commerçants
import CommercantPage from "./views/Commerçants/CommercantPage";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
        <Route path="/shop-profile" component={CommercantPage} />
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={UserPage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/" component={LandingPage} />


    </Switch>
  </Router>,
  document.getElementById("root")
);
