const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const date = new Date();


const cryptoSchema = new Schema({


    name: {
        type: String
    },
    initial: {
        type: Number
    },
    total: {
        type: Number
    },
    date: {
        type: Date,
        default: date.getDate()

    }
})


const Crypto = mongoose.model("Crypto", cryptoSchema);
module.exports = Crypto;