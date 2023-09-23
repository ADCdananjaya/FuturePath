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

const createCompany = (req, res) => {
  res.send('Cretae a Company');
};

const updateCompany = (req, res) => {
  res.send('Update Company');
};

const deleteCompany = (req, res) => {
  res.send('Delete Company');
};

module.exports = {
  getAllCompany,
  getSingleCompany,
  createCompany,
  updateCompany,
  deleteCompany,
};
