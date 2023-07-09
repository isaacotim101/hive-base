const Bal = require("../models/Bal");

const CTRL = {};

CTRL.getBals = (req, res) => {
  Bal.find({}).exec((err, bals) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({bals});
  });
};

CTRL.getBal = (req, res) => {
  const { balId } = req.params;
  Bal.findById(balId).exec((err, bal) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({bal});
  });
};

CTRL.createBal = (req, res) => {
  const newBal = new Bal({
    amount: req.body.amount,
    marchant_id: req.body.marchant_id
  });

  newBal.save((err, bal) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      bal,
    });
  });
};

CTRL.updateBal = (req, res) => {
  const { balId } = req.params;
  
  Bal.findByIdAndUpdate(
    balId,
    req.body,
    { new: true },
    (err, bal) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.json({bal});
    }
  );
};

CTRL.deleteBal = (req, res) => {
  const { balId } = req.params;
  Bal.findByIdAndRemove(balId, (err, bal) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      bal,
    });
  });
};

module.exports = CTRL;
