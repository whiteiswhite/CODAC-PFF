import React from 'react';
import NavBar from '../src/components/NavBar'
import Home from './components/Home';
import Login from './components/Login'
import Register from "./components/Register";
import CommercantPage from "./views/Commerçants/CommercantPage";
import { BrowserRouter as Router, Route} from "react-router-dom";


function App() {
    return (
        <Router>
            <NavBar/>
            <Route exact path={"/"} component={Home}></Route>
            <Route exath path={"/login"} component={Login}></Route>
            <Route exath path={"/register"} component={Register}></Route>
            <Route exatch path={"/shopper"} component={CommercantPage}></Route>
        </Router>
    )
}

export default App;
