const express = require('express');
//Extra Packages
require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const port = process.env.PORT || 3000;

require('./db/mongoose');

const app = express();

//Import Company Routes
const companyCrudRoutes = require('./routes/Company/crudRoutes');
const companyAuthRoutes = require('./routes/Company/authRoutes');

const students = require('./routes/Students');
const auth = require('./routes/AuthRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/students', students);

//Company Routes
app.use('/api/company', companyCrudRoutes);
app.use('/api/company/auth', companyAuthRoutes);

app.use('/api/auth', auth);

app.listen(port, () => console.log(`App listen on port ${port}!`));
