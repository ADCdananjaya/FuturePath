const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');

const StudentSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
});

StudentSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.userName,
      email: this.email,
    },
    process.env.JWT_PRIVATE_KEY
  );

  return token;
};

//User Validation
const studentValidator = (userName, email, password) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate({ userName, email, password });
};

//Hash The Password
StudentSchema.pre('save', async function (next) {
  try {
    const hashPassword = await bcrypt.hash(this.password, 10);
    this.password = hashPassword;
  } catch (e) {
    throw Error('Something Wrong,Please try Agian');
  }
  next();
});

//Compare password
StudentSchema.methods.comparePassword = async function (passwords) {
  let result = await bcrypt.compare(passwords, this.password);
  return result;
};

const Student = mongoose.model('Student', StudentSchema);

module.exports = {
  Student,
  studentValidator,
};
