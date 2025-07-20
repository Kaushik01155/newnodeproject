
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userregister = require('../models/UserRegister');
require('dotenv').config();
//kaushikkanjariya0111
//S86YZSadiaU6KVN6

// *********************************
// GETALL USER REGISTER DATA
// *********************************

exports.UserRegisters = async (req, res) => {
    const { register_name, register_email, register_contact, register_password } = req.body;
    try {

        const registeremail = await userregister.findOne({ register_email });
        if (registeremail) {
         res.status(400).json({ "status": false, "message": "YOU ARE ALREADY REGISTER GO TO LOGIN" })
            
        }
        const encyptedpassword = await bcrypt.hash(register_password, 10);
        const newUser = new userregister({ register_name, register_email, register_contact, register_password: encyptedpassword });
        await newUser.save();

        if (newUser) {
            res.status(200).json({ "status": true, "message": "Register Success Full!" });
        }
        else {
            res.status(400).json({ "status": false, "message": "ERROR!" });
        }
    }
    catch (error) {
        res.status(400).json({ "status": false, "message": error.message })
    }
}

exports.UserLogins = async (req,res) =>{
        const{register_email,register_password} = req.body;
    try
    {
        const auth = await userregister.findOne({register_email});
        if(!auth)
        {
            res.status(400).json({"status":false,"message":"Email Is Not Register CLick to Register! "})
        }
        const isPassword = await bcrypt.compare(register_password,auth.register_password);
        if(!isPassword){
            res.status(400).json({"status":false,"message":"PASSWORD INVALID"});
        }
        else
        {
            var data = {
                "_id":auth._id,
                "register_name":auth.register_name,
                "register_email":auth.register_email,
                "register_contact":auth.register_contact
            }

            const token = jwt.sign({id:auth._id},process.env.SECRET,{expiresIn:'1h'});
            auth.token = token;
            await auth.save();
            res.status(200).json({"status":true,"Message":"Login Successfull","data":data,"token":token});
        }
    }
    catch(error)
    {
        res.status(400).json({"status":false,"message":error.message});
    }
}