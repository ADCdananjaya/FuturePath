const mongoose = require("mongoose");
const uri = process.env.DB_CONNECTION;

mongoose
  .connect(uri)
  .then(() => console.log("Successfully connected to the DB."))
  .catch((err) => console.log("Unable to connect with the DB."));
