const mongoose = require("mongoose");

const PromotionSchema = new mongoose.Schema({
  etablissement: {
    nom: String,
    adresse: {
      adresse: String,
      ville: String,
    },
  },
  nom: {
    type: String,
    required: true,
  },
  offre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Promotion", PromotionSchema);
