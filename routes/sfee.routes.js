const router = require("express").Router();

const sfeeCTRL = require("../controllers/sfee.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", sfeeCTRL.getSfees);
router.get("/:sfeeId", sfeeCTRL.getSfee);
router.post("/", sfeeCTRL.createSfee);
router.put("/:sfeeId", isAuth, sfeeCTRL.updateSfee);
router.delete("/:sfeeId", isAuth, sfeeCTRL.deleteSfee);

module.exports = router;
