const School = require("../models/School");

const CTRL = {};

CTRL.getSchools = (req, res) => {
  School.find({}).exec((err, schools) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json(schools);
  });
};

CTRL.getSchool = (req, res) => {
  const { schoolId } = req.params;
  School.findById(schoolId).exec((err, school) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json(school);
  });
};

CTRL.createSchool = (req, res) => {
  const newSchool = new School({
    institutionId: req.body.institutionId,
    institutionName: req.body.institutionName,
    institutionAddress: req.body.institutionAddress,
    institutionPhone: req.body.institutionPhone,
    institutionType: req.body.institutionType,
    bankNames: req.body.bankNames,
    bankAcc: req.body.bankAcc,
    bankAccNames: req.body.bankAccNames,
    bankBranch: req.body.bankBranch,
    email: req.body.email,
    badge: req.body.badge,
    kyc: req.body.kyc
  });

  newSchool.save((err, school) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json(school);
  });
};

CTRL.updateSchool = (req, res) => {
  const { schoolId } = req.params;
  
  School.findByIdAndUpdate(
    schoolId,
    req.body,
    { new: true },
    (err, school) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json(school);
    }
  );
};

CTRL.deleteSchool = (req, res) => {
  const { schoolId } = req.params;
  School.findByIdAndRemove(schoolId, (err, school) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json(school);
  });
};

module.exports = CTRL;
