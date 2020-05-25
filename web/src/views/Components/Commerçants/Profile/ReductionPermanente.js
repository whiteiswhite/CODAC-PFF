import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import Button from "../../../../components/CustomButtons/Button";
import React from "react";

export default function promotionPermanente () {
    return(
    <div>
        <p> Promotion permanente actuelle : </p>
        <GridContainer>
            <GridItem xs={8} sm={8} md={2}>
                <CustomInput labelText="Réduction"
                             inputProps={{
                                 type: "number"
                             }}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
                <CustomDropdown
                    dropdownHeader={"Etablissement(s)"}
                    buttonText={"Choix de l'établissement"}
                    buttonProps={{
                        color: "primary",
                        round: true,
                        size: "lg"
                    }}
                    dropdownList={[
                        "Etablissement 1",
                        {divider: true},
                        "Etablissement 2",
                        {divider: true},
                        "ect"
                    ]}
                />
            </GridItem>
            <GridItem xs={8} sm={8} md={3}>
                <Button
                    size={"lg"}
                    color={"primary"}
                > Changer la réduction permanante </Button>
            </GridItem>
        </GridContainer>

    </div>
    )
}

