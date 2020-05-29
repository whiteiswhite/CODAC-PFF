import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import Button from "../../../../components/CustomButtons/Button";
import React, {useEffect, useRef, useState} from "react";
import {Input} from "@material-ui/core";
import EtablissementService from "../../../../Services/EtablissementService";

const ReductionPermanente = props => {
    const [etablissement, setEtablissement] = useState({promoPermanente: "", name: "toto"});
    const [message, setMessage] = useState(null)

    let timerID = useRef(null)

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, [])

    const onChange = e => {
        setEtablissement({...etablissement, [e.target.name] : e.target.value})
    }

    const resetForm = e => {
        setEtablissement({promoPermanente: "", name:""})
    }

    const onSubmit = e => {
        e.preventDefault();
        EtablissementService.promoPermanente(etablissement).then(data => {
            const {message} = data;
            setMessage(message);
            //resetForm();
            if (!message.msgError){
                timerID = setTimeout(() => {

                }, 1000)
            }
        })
    }

    return(
    <div>
        <p> Promotion permanente actuelle : </p>
        <GridContainer>
            <GridItem xs={8} sm={8} md={2}>
                <Input placeholder="Réduction"
                             inputProps={{
                                 type: "String"
                             }}
                       name={"promoPermanente"}
                       onChange={onChange}
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
                        "Etablissement 2",
                        "ect"
                    ]}
                />
            </GridItem>
            <GridItem xs={8} sm={8} md={3}>
                <Button
                    size={"lg"}
                    color={"primary"}
                    onClick={onSubmit}
                > Changer la réduction permanante </Button>
            </GridItem>
        </GridContainer>

    </div>
    )
}

export default ReductionPermanente;