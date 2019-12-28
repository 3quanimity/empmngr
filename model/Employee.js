const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  Department: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  remainingDaysOff: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Employee", EmployeeSchema);
