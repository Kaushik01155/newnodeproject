const Product = require('../models/Product');
/* 
****************
GET ALL PRODUCTS
****************
*/


exports.getAllProducts = async (req,resp)=>{
try
   {
        const data = await Product.find();
        resp.status(200).json({"status":true,"message":"Product found","data":data});
   }
   catch(error)
   {
        resp.status(400).json({"status":false,"message":error.message,"data":null});
   }
};


exports.insertProduct = async (req,resp)=>{
    try
    {
         const obj = new Product(req.body);
         const result = await obj.save();
         console.log(result);
         resp.status(200).json({"status":true,"message":"Product inserted"});
    }
    catch(error)
    {
         resp.status(400).json({"status":false,"message":error.message});
    }
 }


 exports.singleProduct =   async (req,resp)=>{
    var id = req.params.id;
    try
   {
        const data = await Product.findById(id);
        if(data)
        {
            resp.status(200).json({"status":true,"message":"Product found","data":data});
        }
        else
        {
            resp.status(200).json({"status":true,"message":"Product not found","data":null});
        }
   }
   catch(error)
   {
        resp.status(400).json({"status":false,"message":error.message,"data":null});
   }
}

 exports.deleteProduct = async (req,resp)=>{
     var id = req.params.id;
     try
     {
         const result = await Product.findByIdAndDelete(id);
         if(result)
         {
             resp.status(400).json({"status":true,"message":"Product deleted"});
         }
         else
         {
             resp.status(400).json({"status":false,"message":"Product not found"});
         }
     }
     catch(error)
     {
             resp.status(400).json({"status":false,"message":error.message});
     }
 }

 exports.updateProduct = async(req,resp)=>{
    var id = req.params.id;
    try{
        const result = await Product.findByIdAndUpdate(id,req.body);
        if(result)
            {
            resp.status(200).json({"status":true,"message":"Product Updated"})
        }
        else{
            resp.status(400).json({"status":false, "message":"Product not found!"})
        }
    }
    catch(error){
        resp.status(400).json({"status":false, "message":error.message})
    }
}