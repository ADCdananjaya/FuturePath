const express = require('express');
const router = express.Router();

//Import Controller
const {
  getAllCompany,
  getSingleCompany,
  updateCompany,
  deleteCompany,
  createCompany,
} = require('../controller/Companies');
//Get All Company

router.get('/getAllCompany', getAllCompany);

router.get('/getSingleCompany/:id', getSingleCompany);

router.post('/createCompany', createCompany);

router.patch('/updateCompnay/:id', updateCompany);

router.delete('/deleteCompnay/:id', deleteCompany);

module.exports = router;
