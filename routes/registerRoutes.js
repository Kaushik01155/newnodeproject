const express = require('express');
const registerRoutes = express.Router();
const {  Registers, Login } = require('../controllers/RegisterController');


registerRoutes.post("/register",Registers);
registerRoutes.post("/login",Login);



module.exports = registerRoutes