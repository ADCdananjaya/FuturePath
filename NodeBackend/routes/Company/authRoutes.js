const express = require('express');
const router = express.Router();

const {
  signInCompany,
  signUpCompany,
} = require('../../controller/Company/authController');

router.post('/signIn', signInCompany);
router.post('/signUp', signUpCompany);

module.exports = router;
