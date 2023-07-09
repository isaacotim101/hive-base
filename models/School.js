const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
  institutionId: {
    type: String,
    required: true,
  },
  institutionName: {
    type: String,
    required: false,
  },
  institutionAddress: {
    type: String,
    required: true,
  },
  institutionPhone: {
    type: Number,
    required: true,
    unique: true,
  },
  institutionType: {
    type: String,
    default: true,
  },
  bankNames: {
    type: String,
    required: false,
  },
  bankAcc: {
    type: Number,
    required: true,
  },
  bankAccNames: {
    type: String,
    required: true,
    unique: true,
  },
  bankBranch: {
    type: String,
    default: true,
  },
  email: {
    type: String,
    required: false,
  },
  badge: {
    type: String,
    required: true,
  },
  kyc: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("School", SchoolSchema);
