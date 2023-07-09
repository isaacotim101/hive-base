const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SfeeSchema = new Schema({
  institutionId: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: false,
  },
  class: {
    type: String,
    required: true,
  },
  fees: {
    type: String,
    required: true,
  },
  createdBy: {
    type: Boolean,
    default: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Sfee", SfeeSchema);
