const Sms = require("../models/Sms");

const CTRL = {};

CTRL.getSmss = (req, res) => {
  Sms.find({})
    .exec((err, smss) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      res.json(smss);
    });
};

CTRL.getSms = (req, res) => {
  const { smsId } = req.params;
  Sms.findById(smsId)
  //Sms.find({ category: smsId })
    .exec((err, sms) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      res.json(sms);
    });
};

CTRL.createSms = (req, res) => {
  const newSms = new Sms({
    id: req.body.id,
    privatekey: req.body.privatekey,
    publickey: req.body.publickey,
    senderid: req.body.senderid,
    numbers: req.body.numbers,
    msg: req.body.msg,
    status: req.body.status,
    charge: req.body.charge,
    created_at: req.body.created_at
  });

  newSms.save((err, sms) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      sms,
    });
  });
};

CTRL.updateSms = (req, res) => {
  const { smsId } = req.params;
  
  Sms.findByIdAndUpdate(
    smsId,
    req.body,
    { new: true },
    (err, sms) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json({
        ok: true,
        sms,
      });
    }
  );
};

CTRL.deleteSms = (req, res) => {
  const { smsId } = req.params;
  Sms.findByIdAndRemove(smsId, (err, sms) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      sms,
    });
  });
};

module.exports = CTRL;
