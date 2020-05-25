import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import Button from "../../../../components/CustomButtons/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../../../assets/jss/material-kit-react/views/profilePage";


const useStyles = makeStyles(styles);


export default function options() {

    return (
        <div>
            <GridContainer>
                <GridItem xs={6} sm={1} >
                    <h6 style={{marginTop: 25}}>Modification de l'email</h6>
                </GridItem>
                <GridItem xs={2} sm={1} >

                    <CustomInput
                        inputProps={{
                            type: "email"
                        }}
                        labelText={"Ancien Email"}/>
                </GridItem>
                <GridItem xs={2} sm={1}>
                    <CustomInput
                        inputProps={{
                            type: "email"
                        }}
                        labelText={"Nouvel Email"}/>
                </GridItem>
                <GridItem xs={2} sm={1}>
                    <CustomInput
                        inputProps={{
                            type: "password"
                        }}
                        labelText={"Mot de passe"}/>
                </GridItem>
                <GridItem xs={8} sm={8} md={2}>
                    <Button
                        color={"primary"}
                        size={"lg"}
                    >
                        Envoyer
                    </Button>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={6} sm={1} >
                    <h6 style={{marginTop: 25}}>Modification du mot de passe</h6>
                </GridItem>
                <GridItem xs={4} sm={1} >
                    <CustomInput

                        inputProps={{
                            type: "password"
                        }}
                        labelText={"Ancien mot de passe"}/>
                </GridItem>
                <GridItem xs={2} sm={1}>
                    <CustomInput
                        inputProps={{
                            type: "email"
                        }}
                        labelText={"Nouvel Email"}/>
                </GridItem>
                <GridItem xs={2} sm={1}>
                    <CustomInput
                        inputProps={{
                            type: "password"
                        }}
                        labelText={"Mot de passe"}/>
                </GridItem>
                <GridItem xs={8} sm={8} md={2}>
                    <Button
                        color={"primary"}
                        size={"lg"}
                    >
                        Envoyer
                    </Button>
                </GridItem>
            </GridContainer>
        </div>
    )
}