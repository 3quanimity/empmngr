const express = require("express");
const employeeRouter = express.Router();
const Employee = require("../model/Employee");

// 🐤 CRUD

// 🐤 read
employeeRouter.get("/", (req, res) => {
  Employee.find({}, (err, response) => {
    err
      ? res.status(500).json({
          message: {
            msgBody: "Unable to get employees",
            msgError: true
          }
        })
      : res.status(200).json(response);
  });
});

// 🐤 create
employeeRouter.post("/", (req, res) => {
  const employee = new Employee(req.body);
  employee.save((err, document) => {
    err
      ? res.status(500).json({
          message: {
            msgBody: "Unable to add employee",
            msgError: true
          }
        })
      : res.status(200).json({
          message: {
            msgBody: "Successfully added employee",
            msgError: false
          }
        });
  });
});

// 🐤 delete
employeeRouter.delete("/:id", (req, res) => {
  Employee.findByIdAndDelete(req.params.id, err => {
    err
      ? res.status(500).json({
          message: {
            msgBody: "Unable to delete employee",
            msgError: true
          }
        })
      : res.status(200).json({
          message: {
            msgBody: "Successfully deleted employee",
            msgError: false
          }
        });
  });
});

// 🐤 update
employeeRouter.put("/:id", (req, res) => {
  Employee.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true },
    (err, response) => {
      err
        ? res.status(500).json({
            message: {
              msgBody: "Unable to update employee",
              msgError: true
            }
          })
        : res.status(200).json({
            message: {
              msgBody: "Successfully updated employee",
              msgError: false
            }
          });
    }
  );
});

module.exports = employeeRouter;
