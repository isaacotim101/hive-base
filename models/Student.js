const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  studentId: {
    type: String,
    required: true,
  },
  fullNames: {
    type: String,
    required: false,
  },
  nin: {
    type: String,
    required: true,
  },
  institutionId: {
    type: String,
    required: true,
  },
  regNo: {
    type: String,
    default: true,
  },
  class: {
    type: String,
    required: false,
  },
  course: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
