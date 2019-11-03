const express = require('express');
const mongoose = require('mongoose');
const Product = require('../DB/Product');
const route = express.Router();

route.post('/', async (req, res) => {
  const { ProductName, ProductPrice,Seller } = req.body;
  let product = {};
  product.ProductName = ProductName;
  product.ProductPrice = ProductPrice;
  product.Seller = Seller;
  let productModel = new Product(product);
  await productModel.save();
  res.json(productModel);
});

module.exports = route;