const { Company } = require('../../models/Company');

const getAllCompany = async (req, res) => {

  const company = await Company.find({}).select('-password -userName');
  res.status(200).json({
    sucess: true,
    data: company,
  });
  
};

const getSingleCompany = async (req, res) => {
  const { id } = req.params;

  const company = await Company.findById(id).select('-password -userName');
  if (!company) {
    res.status(404);
    throw Error('No Company Found With Given Id');
  }

  res.status(200).json({
    sucess: true,
    data: company,
  });
};

//Only For Authorized User
const updateCompany = async (req, res) => {
  const { id } = req.params;
  const { phoneNumber, location, description } = req.body;
  let company = await Company.findById(id);
  if (!company) {
    res.status(404);
    throw Error('No Company Found with given Id');
  }
  //Update Values
  company.phoneNumber = phoneNumber;
  company.location = location;
  company.description = description;

  await company.save();

  res.status(200).json({
    sucess: true,
    data: 'Update Company Details',
  });
};

//Only For Authorized User
const deleteCompany = async (req, res) => {
  const { id } = req.params;
  let company = await Company.findById(id);
  if (!company) {
    res.status(404);
    throw Error('No Company Found with given Id');
  }
  await Company.findByIdAndDelete(id);

  res.status(200).json({
    sucess: true,
    data: 'Deleted Sucessfull',
  });
};

const uploadCompanyLogo = async (req, res) => {
  res.send('Upload Logo');
};

module.exports = {
  getAllCompany,
  getSingleCompany,
  updateCompany,
  deleteCompany,
  uploadCompanyLogo,
};
