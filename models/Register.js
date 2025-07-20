const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({

    user_name:{
        type:String,
        required:true
    },
      user_email:{
        type:String,
        required:true
    },
      user_mobileNo:{
        type:Number,
        required:true
    },
      user_password:{
        type:String,
        required:true
    },
    token:{
      type:String,
      required:false
    }

},{timestamps:true})

module.exports = mongoose.model('registers',registerSchema)