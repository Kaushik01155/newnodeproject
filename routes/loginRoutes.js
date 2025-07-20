const express = require('express')
const loginRoutes = express.Router();
const login = require('../models/login');
const { Logins } = require('../controllers/loginController');

loginRoutes.post('/login',Logins)



module.exports = loginRoutes