const express = require('express');
const { UserRegisters, UserLogins } = require('../controllers/UserRegistercontroller');
const userregisterroutes = express.Router();


userregisterroutes.post("/userregister",UserRegisters);
userregisterroutes.post("/userlogin",UserLogins);

module.exports = userregisterroutes;