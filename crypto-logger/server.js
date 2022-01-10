const express = require('express');

const mongoose = require("mongoose");
const PORT = 3001;
const routes = require('./routes')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crypto_app", {

});

mongoose.connection.on('connected', () => { console.log("Connected to Crypto ;) ") })

mongoose.connection.on('error', () => { console.log("Error connecting to mongo database") })

app.use(routes)

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})