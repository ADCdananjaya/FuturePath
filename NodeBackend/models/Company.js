const mongoose = require('mongoose');
const Joi = require('joi');

const CompanySchema = new mongoose.Schema({
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

const companyValidator = (userName, email, companyName, password) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    companyName: Joi.string().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate({ userName, email, companyName, password });
};

const Company = mongoose.model('Company', CompanySchema);

module.exports = {
  Company,
  companyValidator,
};
