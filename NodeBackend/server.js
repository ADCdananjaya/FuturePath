const express = require("express");
require("dotenv").config();
require("./db/mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

//Routes
const students = require("./routes/Students");
const companyRoutes = require("./routes/Companies");
const auth = require("./routes/AuthRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/students", students);
app.use("/api/company", companyRoutes);
app.use("/api/auth", auth);

app.listen(port, () => console.log(`App listen on port ${port}!`));
