const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const todaysDate = `${day}/${month + 1}/${year}`
console.log(todaysDate)



const cryptoSchema = new Schema({


    name: {
        type: String
    },
    total: {
        type: Number
    },
    price: {
        type: Number
    },
    date: {
        type: String,
        default: todaysDate

    },
    profit: {
        type: String

    },
    cryptoConversion: {
        type: Number
    },
    entries: [{
        amount: {
            type: Number
        },
        marketPrice: {
            type: Number
        },
        date: {
            type: String,
            default: todaysDate
        }

    }]
})


const Crypto = mongoose.model("Crypto", cryptoSchema);
module.exports = Crypto;