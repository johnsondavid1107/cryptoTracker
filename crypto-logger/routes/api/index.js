const router = require("express").Router();
const controller = require("../../controller/cryptoController")


router.route("/create").post(

    controller.create
)
//router.route("/create").post(controller.create)
router.route("/get").get(

    controller.find
)
router.route('/delete/:deleteParam').delete(
    controller.delete
)
router.route('/update/:updateRequest').put(
    controller.update
)



module.exports = router;