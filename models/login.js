const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({

    user_email:{
        type:String,
        require:true
    },
    user_password:{
        type:String,
        require:true
    }

},{timestamps:true});

module.exports = mongoose.model('logins',loginSchema)