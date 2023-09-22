const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
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

router.post("/", async (req, res) => {
  const salt = await bcrypt.genSalt(8);
  const password = await bcrypt.hash(req.body.password, salt);

  const student = await new Student({
    userName: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    profilePicture: req.body.profilePicture,
    password,
  }).save();

  const { _id, userName, email, profilePicture, phoneNumber } = student;
  res.status(201).json({ _id, userName, email, profilePicture, phoneNumber });
});

module.exports = router;
