const bcrypt = require('bcrypt');
const { Student, studentValidator } = require('../models/Student');

const getStudent = async (req, res) => {
  const id = req.params.id;
  const student = await Student.findByID(id);
  if (!student) return res.stats(400).send('Student id is not valid!');

  const { _id, userName, email, profilePicture, phoneNumber } = student;
  res.status(200).json({ _id, userName, email, profilePicture, phoneNumber });
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    if (!students.length) return res.status(404).send('Students not found!');
    res.status(200).json(students);
  } catch (ex) {
    console.log(ex);
    res.status(400).send('Something went wrong!');
  }
};

const addStudent = async (req, res) => {
  const { userName, email, password } = req.body;

  const { error } = studentValidator(userName, email, password);

  if (error) {
    res.status(400);
    throw Error(error.message);
  }

  let student;

  student = await Student.findOne({ email });

  if (student) {
    res.status(400);
    throw new Error('Email Is already used');
  }

  student = await Student.create({ userName, email, password });

  let data = {
    id: student._id,
    userName: student.userName,
    email: student.email,
  };

  let token = student.generateAuthToken();

  res.status(201).json({
    sucess: true,
    data: data,
    token: token,
  });
};

const updateStudent = async (req, res) => {
  const { userName, email, phoneNumber, profilePicture } = req.body;
  const id = req.params.id;

  const salt = await bcrypt.genSalt(8);
  const password = await bcrypt.hash(data.password, salt);

  const student = await Student.findByIdAndUpdate(
    id,
    { userName, email, phoneNumber, profilePicture, password },
    { new: true }
  ).select('-password');

  if (!student)
    return res.status(404).send('Student with given id is not found!');
  res.status(200).json(student);
};

const deleteStudent = async (req, res) => {
  const id = req.params.id;
  const student = await Student.findByIdAndDelete(id);
  if (!student) return res.status(400).send('Student id is not valid!');
  res.status(200).json(student);
};

module.exports = {
  getStudent,
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
};
