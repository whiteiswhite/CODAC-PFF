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
    siret:{
        type: String,
        require: true,
        unique: true
    },
    reduction_permanente: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Etablissement', etablissementSchema)