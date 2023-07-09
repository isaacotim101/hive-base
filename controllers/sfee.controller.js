const Sfee = require("../models/Sfee");

const CTRL = {};

CTRL.getSfees = (req, res) => {
  Sfee.find({}).exec((err, fee) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json(
      fee);
  });
};

CTRL.getSfee = (req, res) => {
  const { sfeeId } = req.params;
  Sfee.findById(sfeeId).exec((err, data) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json(data);
  });
};

CTRL.createSfee = (req, res) => {
  const newSfee = new Sfee({
    institutionId: req.body.institutionId,
    course: req.body.course,
    class: req.body.class,
    fees: req.body.fees,
    createdBy: req.body.createdBy
  });

  newSfee.save((err, fee) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json(fee);
  });
};

CTRL.updateSfee = (req, res) => {
  const { sfeeId } = req.params;
  
  Sfee.findByIdAndUpdate(
    sfeeId,
    req.body,
    { new: true },
    (err, fee) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json(fee);
    }
  );
};

CTRL.deleteSfee = (req, res) => {
  const { sfeeId } = req.params;
  Sfee.findByIdAndRemove(sfeeId, (err, data) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json(data);
  });
};

module.exports = CTRL;
