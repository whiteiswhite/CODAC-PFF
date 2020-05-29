import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import Message from "../../../../components/Message";

import Button from "../../../../components/CustomButtons/Button";
import React, {useEffect, useRef, useState} from "react";
import {checkSiren} from "../../../../APIs/SIREN/Routes";
import {Input} from "@material-ui/core";

import ReactDOM from 'react-dom';
import EtablissementService from "../../../../Services/EtablissementService";


const Etablissement = props => {
    const [etablissement, setEtablissement] = useState({siren: "", adresse:"", name:"", commercant:"", promoPermanente:"coucou"});
    const [message, setMessage] = useState(null);

    //const [shop, setShop] = useState(null);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID)
    }
    }, [])

    const onChange = e => {
        setEtablissement ({...etablissement, [e.target.name] : e.target.value})
    };

    const resetForm = () => {
        setEtablissement({siren: '', adresse:"", name:"", commercant:"", promoPermanente:"coucou"})
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(etablissement.siren)
        checkSiren(etablissement.siren).then(data => {
            const { message } = data;
            setMessage(message);

            console.log(data.header.statut)
            console.log(data.header.message)
            resetForm();
            if (data.header.statut !== 200){

                timerID = setTimeout(()=>{
                    console.log('CA MARCHE PAS')
                    setMessage({message: { msgBody: data.header.message, msgError: true}})
                    ReactDOM.render(data.header.message, document.getElementById('message'))
                }, 1000);

            }
            else{
                EtablissementService.newEtablissement(etablissement);
                console.log('CA MARCHE')
                ReactDOM.render("L'établissement avec le numéro SIREN " + etablissement.siren + " a été ajouté", document.getElementById('message'))

            }
        })
    }

    return (
        <div>
            <GridContainer>
                <form onSubmit={onSubmit}>
                    <GridItem xs={8} sm={8} md={2}>
                        <Input
                            placeholder={"Numéro Siren"}
                            name="siren"
                            inputProps={{
                                type: "number",
                                color:"purple"
                            }}

                            onChange={onChange}
                        />
                        <Input
                            placeholder={"Nom de l'établissement"}
                            name="name"
                            inputProps={{
                                type: "text"
                            }}
                            onChange={onChange}
                        />
                        <Input
                            placeholder={"Adresse"}
                            name="adresse"
                            inputProps={{
                                type: "text"
                            }}
                            onChange={onChange}
                        />
                        <Input
                            placeholder={"Nom du commerçant"}
                            name="commercant"
                            inputProps={{
                                type: "text"
                            }}
                            onChange={onChange}
                        />
                    </GridItem>
                    <GridItem xs={8} sm={8} md={2}>
                        <Button
                            color={"primary"}
                            size={"lg"}
                            onClick={onSubmit}
                        >
                            Ajouter l'établissement
                        </Button>
                    </GridItem>
                </form>
            </GridContainer>
            <div id={"message"}></div>
            <p>  LISTE DES ETABLISSEMENTS DU COMMERCANT </p>
        </div>
    )

}

export default Etablissement;
