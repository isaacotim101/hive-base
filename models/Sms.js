const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SmsSchema = new Schema({
  
  id: {
    type: String,
    default: Date.now(),
  },
  privatekey: {
      type: String,
    },
  publickey: {
      type: String,
      required: true,
    },
  senderid: {
      type: String,
      required: true,
    },
  numbers: {
      type: Array,
      required: true,
    },
  msg: {
      type: String,
      required: true,
    },
  status: {
      type: Array,
      default: false,
    },
  charge: {
      type: Number,
      required: false,
    },
  created_at: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Sms", SmsSchema);