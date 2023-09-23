const { Company, companyValidator } = require('../../models/Company');

const signUpCompany = async (req, res) => {
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

  res.status(201).json({
    sucess: true,
    token: token,
  });
};

const signInCompany = async (req, res) => {
  const { email, password } = req.body;

  let company = await Company.findOne({ email: email });

  if (!company) {
    res.status(404);
    throw new Error('Invalid Credential');
  }

  let login = await company.comparePassword(password);

  if (!login) {
    res.status(400);
    throw new Error('Invalid Credential');
  }

  let token = company.generateToken();

  res.status(200).json({
    sucess: true,
    token: token,
  });
};

module.exports = {
  signInCompany,
  signUpCompany,
};
