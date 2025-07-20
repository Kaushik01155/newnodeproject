const express = require('express');
const multer = require('multer');
const articalRoutes = express.Router();
const artical = require('../models/article');
const {  createArticle, addArticle, articlebyuser, allListArticle, addreduxArticles, deletereduxArticles, singleArticle } = require('../controllers/ArticleController');
const { verifyToken } = require('../middleware/verifyToken');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});


const upload = multer({ storage: storage });

articalRoutes.post("/articles",upload.single("article_image"),createArticle)
// articalRoutes.get("/articles",addArticle, verifyToken)
articalRoutes.post("/articlebyuser",verifyToken,articlebyuser)
articalRoutes.get("/reduxArticles",upload.single("article_image"),allListArticle)
articalRoutes.post("/addreduxArticles", upload.single('article_image'),addreduxArticles)
// articalRoutes.post("/addreduxArticles", upload.single('article_image'),addreduxArticles)
articalRoutes.delete("/reduxArticles/:id", deletereduxArticles)
articalRoutes.get("/reduxArticles/:id",singleArticle)





module.exports = articalRoutes