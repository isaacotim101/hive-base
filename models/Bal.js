const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BalSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  marchant_id: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Bal", BalSchema);
