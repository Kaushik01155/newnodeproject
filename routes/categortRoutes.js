const express = require('express')
const categoryRoutes = express.Router();
const category = require('../models/categorys');
const { allCategorys, deleteCategory, updateCategory, singleCategory, insertCategory } = require('../controllers/CategoryController');

categoryRoutes.get("/",allCategorys);
categoryRoutes.delete("/:id",deleteCategory);
categoryRoutes.patch("/:id",updateCategory);
categoryRoutes.get("/:id",singleCategory);
categoryRoutes.post("/",insertCategory);

module.exports = categoryRoutes