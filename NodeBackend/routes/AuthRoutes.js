const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcrypt');
const Student = require('../models/Student');

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().min(8).max(30).required().label('Password'),
  });

  return schema.validate(data);
};

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let student = await Student.find({ email: req.body.email });
  if (!student) return res.status(400).send('Invalid email or password!');

  const isValid = await bcrypt.compare(req.body.password, student.password);
  if (!isValid) return res.status(400).send('Invalid email or password!');

  const token = student.generateAuthToken();
  res.status(200).send(token);
});

module.exports = router;
