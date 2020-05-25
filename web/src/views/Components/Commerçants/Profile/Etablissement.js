import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import Button from "../../../../components/CustomButtons/Button";
import React from "react";

export default function etablissement () {
    return (
        <div>
            <GridContainer>
                <GridItem xs={8} sm={8} md={2}>
                    <CustomInput
                        labelText={"Nom"}
                        inputProps={{
                            type: "text"
                        }}
                    />
                </GridItem>
                <GridItem xs={8} sm={8} md={2}>
                    <CustomInput
                        labelText={"Numéro Siret"}
                        inputProps={{
                            type: "text"
                        }}
                    />
                </GridItem>
                <GridItem xs={8} sm={8} md={2}>
                    <Button
                        color={"primary"}
                        size={"lg"}
                    >
                        Ajouter l'établissement
                    </Button>
                </GridItem>
            </GridContainer>
            <p>  LISTE DES ETABLISSEMENTS DU COMMERCANT </p>
        </div>
    )
}