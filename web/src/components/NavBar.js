import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

const NavBar = props => {
    const {isAuthenticated, user, setIsAuthenticated, setUser} = useContext(AuthContext);

    const onClickLogoutHandler = () => {
        AuthService.logout().then(data=>{
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        })
    };

    const unauthenticatedNavBar = () =>{
        return (
            <>
                <Link to ="/">
                    <li className={"nav-item nav-link"}>
                        Home
                    </li>
                </Link>
                <Link to ="/register">
                    <li className={"nav-item nav-link"}>
                        Register
                    </li>
                </Link>
                </>
        )
    };

    const authenticatedNavBar = () =>{
        return (
            <>
                <Link to ="/">
                    <li className={"nav-item nav-link"}>
                        Home
                    </li>
                </Link>
                <Link to ="/Shopper">
                    <li className={"nav-item nav-link"}>
                        Shopper
                    </li>
                </Link>
                {
                    user.role === "commercant" ?
                        <Link to={"/commerce"}>
                            <li className={"nav-item nav-link"}>
                                Commerçant
                            </li>
                        </Link> : null
                }
                <button type={"button"} className={"btn btn-link nav-item nav-link"} onClick={onClickLogoutHandler}>
                    Logout
                </button>
                <li className={"nav-item nav-link"}>
                    <p>Bienvenue, { user.username }
                    </p>
                </li>
            </>
        )
    };
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <Link to={"/"}>
                <div className="navbar-brand" >Dealz</div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;
