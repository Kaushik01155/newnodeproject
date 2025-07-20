const express = require('express');
const registerRoutes = express.Router();
const register = require('../models/Register');
const {  Registers, Login, Article } = require('../controllers/RegisterController');


registerRoutes.post("/register",Registers);
registerRoutes.post("/login",Login);



module.exports = registerRoutes