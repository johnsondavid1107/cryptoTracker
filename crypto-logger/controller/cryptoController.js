const db = require("../models")




module.exports = {

    create: function (req, res) {
        console.log(req.body)


        db.Crypto.create({
            name: req.body.name,
            total: req.body.value,
            price: req.body.price,
            entries: [{
                amount: req.body.value,
                marketPrice: req.body.price
            }]


        }).then(response => res.send(response))





    },
    find: function (req, res) {
        db.Crypto.find({}).then(response => res.send(response))
    },
    delete: function (req, res) {
        console.log(req.params)
        db.Crypto.deleteOne({
            _id: req.params.deleteParam
        }).then(response => res.send(response))
    },
    update: function (req, res) {

        let request = (JSON.parse(req.params.updateRequest))

        console.log(request)

        db.Crypto.findOneAndUpdate({ _id: request.id }, {
            $inc: {
                total: parseInt(request.amount)
            },
            $push: {
                entries: {
                    amount: parseInt(request.amount),
                    marketPrice: parseInt(request.price)
                }
            }

        }).then(response => res.send(response))
    }


}