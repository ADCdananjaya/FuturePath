const getAllCompany = (req, res) => {
  res.send('Get All Company');
};

const getSingleCompany = (req, res) => {
  res.send('Get Single Company', +req.params);
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
