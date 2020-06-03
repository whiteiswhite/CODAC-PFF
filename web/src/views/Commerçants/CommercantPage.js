import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import {
  Apps,
  Email,
  EuroSymbol,
  Face,
  Speaker,
  SpeakerNotes,
  Store,
  Tune,
} from "@material-ui/icons";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import SectionTabs from "../Components/Sections/SectionTabs";

// import de composants de l'onglet de profil
import ReductionPermanente from "../Components/Commerçants/Profile/ReductionPermanente";
import OffrePonctuelle from "../Components/Commerçants/Profile/OffrePonctuelle";
import Etablissement from "../Components/Commerçants/Profile/Etablissement";
import Options from "../Components/Commerçants/Profile/Options";

const useStyles = makeStyles(styles);

export default function CommercantPage(props) {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <CustomTabs
          headerColor="primary"
          backgroundColor="tranparent"
          tabs={[
            {
              tabName: "Profil",
              tabIcon: Face,
              tabContent: (
                <div>
                  <p> coucou </p>
                </div>
              ),
            },
            {
              tabName: "Réduction permanente",
              tabIcon: EuroSymbol,
              tabContent: <ReductionPermanente />,
            },
            {
              tabName: "Offres ponctuelle",
              tabIcon: SpeakerNotes,
              tabContent: <OffrePonctuelle />,
            },
            {
              tabName: "Etablissement",
              tabIcon: Store,
              tabContent: <Etablissement />,
            },
            {
              tabName: "Options",
              tabIcon: Tune,
              tabContent: <Options />,
            },
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}
