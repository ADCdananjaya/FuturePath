const mongoose = require('mongoose');

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

const Company = mongoose.model('Company', CompanySchema);

module.exports = {
  Company,
};
