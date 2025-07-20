const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const login = require('../models/login');

/* 
************************************
GET ALL LOGIN USERDATA
************************************
*/

exports.Logins = async (req,res) =>{

    const {user_email,user_password} = req.body;

    try {
        const  Useremail = await login.findOne({user_email});
        if(!Useremail)
            {
                res.status(400).json({"status":false,"message":"Email not found"})
            } 

            }
    catch(error)
    {
        res.status(400).json({"status":false,"Message":error.mesage})
    }

}


