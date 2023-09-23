const express = require('express');
const router = express.Router();

const {
  signInCompany,
  signOutCompany,
  signUpCompany,
} = require('../../controller/Company/authController');

router.post('/signIn', signInCompany);

router.post('/signUp', signUpCompany);

router.get('/signOut', signOutCompany);

module.exports = router;
