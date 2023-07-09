const router = require("express").Router();

const balCTRL = require("../controllers/bal.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", balCTRL.getBals);
router.get("/:balId", balCTRL.getBal);
router.post("/", balCTRL.createBal);
router.put("/:balId", balCTRL.updateBal);
router.delete("/:balId", balCTRL.deleteBal);

module.exports = router;
