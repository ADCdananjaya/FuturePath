const express = require("express");
const router = express.Router();
const { Student } = require("../models/Student");

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    if (!students.length) return res.status(404).send("Students not found!");
    res.status(200).json(students);
  } catch (ex) {
    console.log(ex);
    res.status(400).send("Something went wrong!");
  }
});

module.exports = router;
