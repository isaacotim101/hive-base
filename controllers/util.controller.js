const Util = require("../models/Util");

const CTRL = {};

CTRL.getUtils = (req, res) => {
  Util.find({}).exec((err, utils) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json(utils);
  });
};

CTRL.getUtil = (req, res) => {
  const { utilId } = req.params;
  Util.findById(utilId).exec((err, util) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json(util);
  });
};

CTRL.createUtil = (req, res) => {
  const newUtil = new Util({
    providerName: req.body.providerName,
    uniqueName: req.body.uniqueName,
    avatar: req.body.avatar
  });

  newUtil.save((err, util) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json(util);
  });
};

CTRL.updateUtil = (req, res) => {
  const { utilId } = req.params;
  
  Util.findByIdAndUpdate(
    utilId,
    req.body,
    { new: true },
    (err, util) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json(util);
    }
  );
};

CTRL.deleteUtil = (req, res) => {
  const { utilId } = req.params;
  Util.findByIdAndRemove(utilId, (err, util) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json(util);
  });
};

module.exports = CTRL;
