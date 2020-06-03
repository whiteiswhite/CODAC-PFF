import React, { useContext } from "react";
import Parallax from "./Parallax/Parallax";
import Register from "./Register";
import Login from "./Login";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import Promotions from "../components/Promotions";

const Home = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );
  // TODO : Recover password

  const unauthenticatedHomePage = () => {
    return (
      <div>
        <Login />
        <Link to={"/register"}>
          Vous n'avez pas encore de compte ? Enregistrez-vous
        </Link>
      </div>
    );
  };

  const authenticatedHomePage = () => {
    return <Promotions></Promotions>;
  };

  return (
    <div>
      {!isAuthenticated ? unauthenticatedHomePage() : authenticatedHomePage()}
    </div>
  );
};

export default Home;
