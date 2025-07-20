const mongoose = require('mongoose');

const userregisterSchema = new mongoose.Schema({

    register_name:{
        type:String,
        required:true
    },
     register_email:{
        type:String,
        required:true,
        unique:true
    },
     register_contact:{
        type:String,
        required:true
    },
     register_password:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:false
    }

},{timestamps:true})

module.exports = mongoose.model('userrigisters',userregisterSchema)