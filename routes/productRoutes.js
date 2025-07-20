const express = require('express')
const productRoutes = express.Router();
const Product = require('../models/Product');
const { getAllProducts, insertProduct, singleProduct, deleteProduct, updateProduct } = require('../controllers/ProductController');

productRoutes.get("/", getAllProducts)
productRoutes.delete("/:id",deleteProduct)
productRoutes.patch("/:id",updateProduct)
productRoutes.get("/:id",singleProduct)
productRoutes.post("/",insertProduct)

module.exports = productRoutes