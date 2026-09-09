const mongoose = require('mongoose');

// Student Schema Design
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  rollNo: {
    type: String,
    required: true,
    unique: true
  },
  course: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Model Export
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;