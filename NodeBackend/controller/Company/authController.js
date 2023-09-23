const { Company, companyValidator } = require('../../models/Company');

const signInCompany = async (req, res) => {
  const { userName, email, companyName, password } = req.body;

  const { error } = companyValidator(userName, email, companyName, password);

  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  //Check Wheter Email Already Exist
  let company;

  company = await Company.findOne({ email });

  if (company) {
    res.status(400);
    throw new Error('Email Is already used');
  }
  //Check Wheter CompanyName Already Exist
  company = await Company.findOne({ companyName });

  if (company) {
    res.status(400);
    throw new Error('Company Name Is already used');
  }

  company = await Company.create({ userName, email, companyName, password });

  let token = company.generateToken();

  res.status(200).json({
    sucess: true,
    token: token,
  });
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
