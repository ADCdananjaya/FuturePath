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
  password: {
    type: String,
    required: true,
  },
  phoneNumber:{
    type:string,
  },
  profilePicture: {
    type: String,
  }
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = {
  Student,
};