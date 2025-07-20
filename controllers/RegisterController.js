const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const register = require('../models/Register');
require('dotenv').config();
/* 
************************************
GET ALL RGISTER USERDATA
************************************
*/
exports.Registers = async (req, resp) => {
    const { user_name, user_email, user_mobileNo, user_password } = req.body;

    try {
        const useremail = await register.findOne({ user_email });
        if (useremail) {
            resp.status(400).json({ "status": false, "message": "Email already registerd!" });
        }
        const encyptedpassword = await bcrypt.hash(user_password, 10);
        const newUser = new register({ user_name, user_email, user_mobileNo, user_password: encyptedpassword })
        await newUser.save();
        if (newUser) {
            resp.status(200).json({ "status": true, "message": "Register Successfully" });
        }
        else {
            resp.status(400).json({ "status": false, "message": "Error" });
        }

    }
    catch (error) {
        resp.status(400).json({ "status": false, "message": error.message })
    }

}
/*
************************************
LOGIN USER
************************************
*/
exports.Login = async (req, res) => {
    const { user_email, user_password } = req.body;
    try {
        const user = await register.findOne({ user_email });
        if (!user) {
            res.status(400).json({ "status": false, "message": "Email not Register" })
        }
        const isPassword = await bcrypt.compare(user_password, user.user_password);

        if (!isPassword) {
            res.status(400).json({ "status": false, "message": "Password Invalid" });
        }

        else {

            var data = {
                "_id": user._id,
                "user_name": user.user_name,
                "user_email": user.user_email,
                "user_mobileNo": user.user_mobileNo
            }
            const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '1h' });
            user.token = token;
            await user.save();
            res.status(200).json({ "status": true, "message": "Login Successfull", "data": data, "token": token })
        }
    }
    catch (error) {
        res.status(400).json({ "status": false, "message": error.message })
    }
}

