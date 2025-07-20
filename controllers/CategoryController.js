const category = require('../models/categorys');
/* 
********************
GET ALL CATEGORYS
********************
*/ 

exports.allCategorys = async(req,resp)=>{
    try{
        const data = await category.find();
        resp.status(200).json({"status":true,"message":"Category inserted","data":data})
    }
    catch(error){
        resp.status(400).json({"status":false, "message":error.message,"data":null})
    }
}

exports.deleteCategory = async(req,resp)=>{
    var id = req.params.id;
    try{
        const result = await category.findByIdAndDelete(id);
        if(result)
            {
            resp.status(200).json({"status":true,"message":"Category Deleted"})
        }
        else{
            resp.status(400).json({"status":false, "message":"category Id not found"})
        }
    }
    catch(error){
        resp.status(400).json({"status":false, "message":error.message})
    }
}

exports.updateCategory = async(req,resp)=>{
    var id = req.params.id;
    try{
        const result = await category.findByIdAndUpdate(id,req.body);
        if(result)
            {
            resp.status(200).json({"status":true,"message":"Category Upadated"})
        }
        else{
            resp.status(400).json({"status":false, "message":"category Id not found"})
        }
    }
    catch(error){
        resp.status(400).json({"status":false, "message":error.message})
    }
}

exports.singleCategory = async(req,resp)=>{
    var id = req.params.id
    try{
        const data = await category.findById(id);
        if(data)
            {
            resp.status(200).json({"status":true,"message":"Single Category Found","data":data})
        }
        else{
            resp.status(400).json({"status":false, "message":"Single Category Not Found","data":null})
        }
      
    }
    catch(error){
        resp.status(400).json({"status":false, "message":error.message})
    }
}

exports.insertCategory = async(req,resp)=>{
    try{
        const obj = new category(req.body);
        const result = await obj.save();
        console.log(result)
        resp.status(200).json({"status":true,"message":"product inserted"})
    }
    catch(error){
        resp.status(400).json({"status":false, "message":error.message})
    }
}