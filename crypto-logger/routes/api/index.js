const router = require("express").Router();
const controller = require("../../controller/cryptoController")



router.route("/create").post(controller.create)

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;