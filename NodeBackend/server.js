const express = require("express");
require("dotenv").config();
require("./db/mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => console.log(`App listen on port ${port}!`));
