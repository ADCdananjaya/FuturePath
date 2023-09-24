const express = require('express');
const router = express.Router();

//Import Controller
const {
  getAllCompany,
  getSingleCompany,
  updateCompany,
  deleteCompany,
  uploadCompanyLogo,
} = require('../../controller/Company/crudController');

//Public Routes
router.get('/getAllCompany', getAllCompany);
//Public Routes
router.get('/getSingleCompany/:id', getSingleCompany);
//Private Routes
router.patch('/updateCompany/:id', updateCompany);
//Private Routes
router.delete('/deleteCompany/:id', deleteCompany);
//Private Routes



module.exports = router;
