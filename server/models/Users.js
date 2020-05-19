const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    username:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Users', userSchema);