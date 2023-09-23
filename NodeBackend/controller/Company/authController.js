const { Company, companyValidator } = require('../../models/Company');

const signInCompany = async (req, res) => {
  const { userName, email, companyName, password } = req.body;

  const { error } = companyValidator(userName, email, companyName, password);

  if (error) {
    throw new Error(error.message);
  }
};

const signUpCompany = async (req, res) => {
  res.send('SignupCompnay');
};

const signOutCompany = async (req, res) => {
  res.send('Sign Out');
};

module.exports = {
  signInCompany,
  signUpCompany,
  signOutCompany,
};
