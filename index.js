// 🐤 imports
const express = require("express");
const mongoose = require("mongoose");

// 🐤 initialization
const app = express();
app.use(express.json());

// 🐤 routes
const employee = require("./routes/employee");
app.use("/employee", employee);

// 🐤connecting mongodb
mongoose.connect(
  "mongodb://localhost:27017/emp_mngr",
  {
    useNewUrlParser: true,
    useFindAndModify: false
  },
  err => {
    err
      ? (process.exit(1), console.log("Unable to connect to DataBase"))
      : console.log("Connection to Database established");
  }
);

// 🐤activating app's ears
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is Running on port: ${port}`);
});
