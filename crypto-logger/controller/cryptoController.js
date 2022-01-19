const db = require("../models")




module.exports = {

    create: function (req, res) {
        console.log(req.body)


        db.Crypto.create({
            name: req.body.name,
            total: req.body.value


        }).then(response => res.send(response))





    },
    find: function (req, res) {
        db.Crypto.find({}).then(response => res.send(response))
    }


}