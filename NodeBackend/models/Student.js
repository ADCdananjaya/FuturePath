const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

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
      number: this.phoneNumber,
      image: this.profilePicture,
    },
    process.env.JWT_PRIVATE_KEY
  );

  return token;
};

const Student = mongoose.model("Student", StudentSchema);

module.exports = {
  Student,
};
