const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CompanySchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  companyName: {
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
  companyLogo: {
    type: String,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
});

//Company Validation
const companyValidator = (userName, email, companyName, password) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    companyName: Joi.string().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate({ userName, email, companyName, password });
};

//Hash The Password
CompanySchema.pre('save', async function (next) {
  try {
    const hashPassword = await bcrypt.hash(this.password, 10);
    this.password = hashPassword;
  } catch (e) {
    throw Error('Something Wrong,Please try Agian');
  }
  next();
});

//Generate Token
CompanySchema.methods.generateToken = function () {
  const token = jwt.sign(
    { id: this._id, userName: this.userName, email: this.email },
    process.env.JWT_PRIVATE_KEY,
    {
      expiresIn: '15d',
    }
  );

  return token;
};

const Company = mongoose.model('Company', CompanySchema);

module.exports = {
  Company,
  companyValidator,
};
