const router = require("express").Router();

const smsCTRL = require("../controllers/sms.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", smsCTRL.getSmss);
router.get("/:smsId", smsCTRL.getSms);
router.post("/", smsCTRL.createSms);
router.put("/:smsId", smsCTRL.updateSms);
router.delete("/:smsId", smsCTRL.deleteSms);

module.exports = router;
