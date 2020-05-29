const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const etablissementSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    adresse:{
        type: String,
        require: true,
        unique: true
    },
    siren:{
        type: String,
        require: true,
        unique: true
    },
    promoPermanente: {
        type: String,
        require: true
    },
    commercant:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Etablissement', etablissementSchema)