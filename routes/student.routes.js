const router = require("express").Router();

const studentCTRL = require("../controllers/student.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", studentCTRL.getStudents);
router.get("/:studentId", studentCTRL.getStudent);
router.post("/", studentCTRL.createStudent);
router.put("/:studentId", isAuth, studentCTRL.updateStudent);
router.delete("/:studentId", isAuth, studentCTRL.deleteStudent);

module.exports = router;
