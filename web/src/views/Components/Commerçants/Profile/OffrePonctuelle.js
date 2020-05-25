import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import Button from "../../../../components/CustomButtons/Button";
import React from "react";

export default function offrePermanent (){
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                    <TextareaAutosize
                        rows="5"

                        aria-label="empty textarea"
                        placeholder={"Annonce de l'offre ponctuelle"}
                    />
                </GridItem>
                <GridItem xs={10} sm={10} md={4}>
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
                    > Poster l'offre ponctuelle </Button>
                </GridItem>
            </GridContainer>

            <p> Salut, ici y'a la liste des offres publié par le commerçant</p>
        </div>
    )
}