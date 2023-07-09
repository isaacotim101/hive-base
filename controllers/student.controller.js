const Student = require("../models/Student");

const CTRL = {};

CTRL.getStudents = (req, res) => {
  Student.find({}).exec((err, students) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json(students);
  });
};

CTRL.getStudent = (req, res) => {
  const { studentId } = req.params;
  Student.findById(studentId).exec((err, student) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json(student);
  });
};

CTRL.createStudent = (req, res) => {
  const newStudent = new Student({
    displayName: req.body.displayName,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    status: req.body.status
  });

  newStudent.save((err, student) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json(student);
  });
};

CTRL.updateStudent = (req, res) => {
  const { studentId } = req.params;
  
  Student.findByIdAndUpdate(
    studentId,
    req.body,
    { new: true },
    (err, student) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json(student);
    }
  );
};

CTRL.deleteStudent = (req, res) => {
  const { studentId } = req.params;
  Student.findByIdAndRemove(studentId, (err, student) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json(student);
  });
};

module.exports = CTRL;
