const router = require("express").Router();
const controller = require("../../controller/cryptoController")


router.route("/create").post(

    controller.create
)
//router.route("/create").post(controller.create)
router.route("/get").get(
    controller.find
)




module.exports = router;