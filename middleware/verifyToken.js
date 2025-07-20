require('dotenv').config();
const jwt = require('jsonwebtoken');
const registers = require('../models/Register');
const authregisters = require('../models/UserRegister');
exports.verifyToken = (req, res, next) => {
    
      const {token} = req.body;
    
      if (!token) {
        return res.status(403).json({ "status": false, message: 'No token provided' });
      }

    
      jwt.verify(token,  process.env.SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({ "status": false, message: 'Invalid token' });
        }

        
        //  
        authregisters.findById(decoded.id)
        .then(auth =>{
            if (!auth || auth.token !== token){
               return res.status(401).json({ status: false, message: 'Token does not match database' });
            }
            req.authId = decoded.id;
            console.log("✅ Token verified:", decoded.id);
        next();
            console.log("verify Token",token);
            next();
        })
        .catch(()=>{
            req.status(400).json({"status":false,"message":err.message})
        })
        
      });
    };


    // exports.authverifyToken = (req, res, next) => {
    
    //   const {token} = req.body;
    
    //   if (!token) {
    //     return res.status(403).json({ "status": false, message: 'No token provided' });
    //   }

    
    //   jwt.verify(token,  process.env.SECRET, (err, decoded) => {
    //     if (err) {
    //       return res.status(401).json({ "status": false, message: 'Invalid token' });
    //     }

        
    //     //  
    //     authregisters.findById(decoded.id)
    //     .then(auth =>{
    //         if (!auth || auth.token !== token){
    //            return res.status(401).json({ status: false, message: 'Token does not match database' });
    //         }
    //         req.authId = decoded.id;
    //         console.log("✅ Token verified:", decoded.id);

    //     next();
    //         console.log("verify Token",token);
    //         next();
    //     })
    //     .catch((err)=>{
    //         req.status(400).json({"status":false,"message":err.message})
    //     })
        
    //   });
    // };