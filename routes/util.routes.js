const router = require("express").Router();

const utilCTRL = require("../controllers/util.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", utilCTRL.getUtils);
router.get("/:utilId", utilCTRL.getUtil);
router.post("/", utilCTRL.createUtil);
router.put("/:utilId", isAuth, utilCTRL.updateUtil);
router.delete("/:utilId", isAuth, utilCTRL.deleteUtil);

module.exports = router;
