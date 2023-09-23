const express = require('express');
const router = express.Router();

//Import Controller
const {
  getAllCompany,
  getSingleCompany,
  updateCompany,
  deleteCompany,
  createCompany,
} = require('../../controller/Company/crudController');

//Public Routes
router.get('/getAllCompany', getAllCompany);
//Public Routes
router.get('/getSingleCompany/:id', getSingleCompany);

//Only Admin User
router.post('/createCompany', createCompany);

router.patch('/updateCompnay/:id', updateCompany);

router.delete('/deleteCompnay/:id', deleteCompany);

module.exports = router;
