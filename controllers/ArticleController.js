    const bcrypt = require('bcrypt');
    const article = require('../models/article')
    const multer = require('multer');
    const {IMAGE_PATH} = require('../config/constant');

    /*
    ************************************
    USER ARTICLE
    ************************************
    */
    exports.createArticle = async (req, res) => {
        try {
            //console.log(req.body);
            const { article_title, article_description, article_tag, articleuser_id } = req.body;
            article_image = req.file ? req.file.filename : null;
            const newArticle = new article({ article_title, article_description, article_tag, article_image, articleuser_id });
            await newArticle.save();
            res.status(200).json({ "status": true, "message": "Article Add successfully", "data": newArticle });
        } catch (error) {
            res.status(400).json({ "status": false, "message": error.message });
        }
    };

    exports.addArticle = async (req, res) => {
        try {
            const {userId} = req;
            console.log("UserID:", userId);
            const articles = await article.find({articleuser_id:userId});
            const newdata = articles.map(row => ({
                ...row.toObject(),
                article_image: `${IMAGE_PATH}/${row.article_image}`
                }));
            res.status(200).json({ "status": true, "message": "Article Add successfully", "data":newdata });
        } catch (error) {
            res.status(400).json({ "status": false, "message": error.message });
        }
    };



    exports.articlebyuser = async (req,res) =>{
          try {
        const { userId } = req;

        if (!userId) {
            return res.status(400).json({
                status: false,
                message: "User ID not provided!"
            });
        }

        const userArticles = await article.find({ articleuser_id:userId });

        const newdata = userArticles.map(row => ({
            ...row.toObject(),
            article_image: row.article_image ? `${IMAGE_PATH}/${row.article_image}` : null
        }));

        res.status(200).json({
            "status": true,
            "userid":userId,
            "message": "Articles fetched successfully",
            data: newdata
        });
    } catch (error) {
        res.status(400).json({
            "status": false,
            "message": error.message
        });
    }
    }

exports.allListArticle = async (req, res) => {
    try {
        const data = await article.find();
         article_image = req.file ? req.file.filename : null;
          const newdata = data.map(row => ({
                    ...row.toObject(),
                    article_image: `http://localhost:3001/uploads/${row.article_image}`
                }))
        res.status(200).json({
            "status": true,
            "message": "Articles fetched successfully",
            "data": newdata
        });
    } catch (error) {
        res.status(400).json({
            "status": false,
            "message": error.message
        });
    }
};

  exports.addreduxArticles = async (req, res) => {
        try {
            //console.log(req.body);
            const {_id, article_title, article_description, article_tag} = req.body;
             
          const imagePath= req.file ? req.file.filename : null;

         if (_id) {
            const updated = await article.findByIdAndUpdate(
                _id,
                {
                    article_title,article_description,article_tag,  ...(imagePath && { article_image: imagePath })
                },
                 { new: true }
            );
          
           return res.status(200).json({"status":true,"Message":"Article updated successfully","data":updated})
         }
             
             if (!article_title || !article_description || !article_tag) {
      return res.status(400).json({ status: false, message: 'All fields are required' });
    }
            const newArticle = new article({ article_title, article_description, article_tag,article_image:imagePath});
           const updateData = await newArticle.save();

            res.status(200).json({ "status": true, "message": "Article Add successfully",updateData});
        } catch (error) {
            res.status(400).json({ "status": false, "message": error.message });
        }
    };

    exports.deletereduxArticles = async (req,res) =>{
        try{
            await article.findByIdAndDelete(req.params.id);
             res.json({ "status": true, "message": "Article deleted successfully" });
        }
        catch(error){
            res.status(400).json({"status":false,"message":error.message});
        }
    }

    exports.singleArticle = async (req,res) => {
        try{

           const data = await article.findByIdAndUpdate(req.params.id);
            if(!data)
            {
                res.status(400).json({"status":false,"message":"Article Not Found!"});
            }
            res.status(200).json({"status":true,"message":"Single Article Data",data});
        }
        catch(error)
        {
            res.status(400).json({"status":false,"message":error.message});
        }

    }
