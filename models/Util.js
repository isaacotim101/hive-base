const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UtilSchema = new Schema({
  providerName: {
    type: String,
    required: true,
  },
  uniqueName: {
    type: String,
    required: false,
  },
  avatar: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Util", UtilSchema);
