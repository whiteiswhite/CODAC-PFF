const express = require('express');
const etablissementRouter = express.Router();
const Etablissement = require ('../models/Etablissements');

etablissementRouter.post('/new', (req, res) => {
    const { name, adresse, siren, commercant} = req.body;
    const {promoPermanente} = "coucou"
    Etablissement.findOne({siren}, (err, etablissement) =>{
        if (err){
            res.status(500).json({message : {msgBody : "Erreur random 1.", msgError: true}});
        }
        if (etablissement){
            res.status(400).json({message : {msgBody: "Ce numéro Siren est déjà utilisé.", msgError: true}});
        }
        else{
            const newEtablissement = new Etablissement ({siren, adresse, name, commercant, promoPermanente});
            newEtablissement.save(err => {
                if (err) {
                    res.status(500).json({ message : { msgBody: "Erreur lors de l'ajout de votre établissement!", msgError: true}});
                }
                else {
                    res.status(201).json({message: {msgBody: "Votre établissement a bien été ajouté!", msgError: true}});
                }
            })
        }
    })
})

etablissementRouter.post('/promoPermanente', (req, res) => {
    const { promotion, name } = req.body;
    Etablissement.findOne({name}, (err, etablissement) => {
        if (err) {
            res.status(500).json({message : {msgBody : "Erreur random 1.", msgError: true}});
        }
        if (!etablissement){
            res.status(400).json({message : {msgBody: "Cet établissement n'existe pas dans notre base de données.", msgError: true}});
        }
        if (etablissement){
            res.status(201).json({message : {msgBody: "Votre promotion permanente a bien été ajouté.", msgError: true}});
        }
    })
})


module.exports = etablissementRouter;