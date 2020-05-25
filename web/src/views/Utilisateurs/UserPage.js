import React from "react";
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
import {Apps, EuroSymbol, Face, Speaker, SpeakerNotes, Tune} from "@material-ui/icons";
import {TextareaAutosize, TextField} from "@material-ui/core";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import SectionTabs from "../Components/Sections/SectionTabs";

const useStyles = makeStyles(styles);

export default function UserPage(props) {
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
            <Header
                color="transparent"
                brand="Dealz"
                href="http://localhost:3000"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}
                {...rest}
            />
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
                                <p> coucou </p>
                            )
                        },
                        {
                            tabName: "Options",
                            tabIcon: Tune,
                            tabContent: (
                                <p> Hey </p>
                            )
                        }
                    ]}
                />
                {/*<div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={6}>
                            <div className={classes.profile}>
                                <div>
                                    <img src={profile} className={imageClasses}/>
                                </div>
                                <div className={classes.name}>
                                    <h3 className={classes.title}> Nom de l'utilisateur </h3>
                                </div>
                            </div>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                        <TextField placeholder="Réduction permanente"/>
                        <Button> Publiez la réduction</Button>
                    </GridContainer>
                    <CustomTabs
                        headerColor="primary"
                        backgroundColor="tranparent"
                        tabs={[
                            {
                                tabName: "Profil",
                                tabIcon: Face,
                                tabContent: (
                                    <p> coucou </p>
                                )
                            }
                        ]}
                    />
                    <GridContainer justify="center">

                        <GridItem xs={12} sm={12} md={6}>
                            <CustomDropdown
                                buttonText="Edition de l'email"
                                buttonProps={{
                                    className: classes.navLink,
                                    color: "transparent"
                                }}
                                buttonIcon={Apps}
                                dropdownList={[
                                    <CustomInput
                                        labelText="Ancienne adresse Email"
                                        type="text"
                                        color="info"
                                    />,
                                    <CustomInput
                                    labelText="Nouvelle adresse Email"
                                    type="text"
                                    color="info"
                                    />,
                                    <CustomInput
                                    labelText="Mot de passe"
                                    type="text"
                                    color="info"
                                    />,
                                    <Button color="primary">
                                    test
                                    </Button>
                                ]}
                                />
                            <div>
                                <CustomInput
                                    labelText="Email"
                                    type="text"
                                    color="info"
                                />
                                <CustomInput
                                    labelText="Mot de passe"
                                    type="text"
                                    color="info"
                                />
                                <Button color="primary">
                                    test
                                </Button>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>*/}
            </div>
            <Footer />
        </div>
    );
}
