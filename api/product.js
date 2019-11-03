const express = require('express');
const mongoose = require('mongoose');
const Product = require('../DB/Product');
const route = express.Router();
const path = require('path')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req,file, cb) {
   // cb(null,'/uploads/');
    cb(null,'D:/M1/uploads');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname); 
 //cb(null,file.originalname);
  }
});

const fileFilter =async(req, file, cb)=>{
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
/*
route.get('/', async(req, res)=> {
  Product.find(function(err, product) {
      if (err) {
          console.log(err);
      } else {
          res.render('display-product', { product: product });
          console.log(product);
      }
  });
});
/*
route.get('/', (req, res) => {
  // Get all products
  
  Product.findAll()
      .then((Product) => {
          res.status(200).send(Product)
      })
      .catch((err) => {
          res.status(500).send({
              error: "Could not retrieve products"
          })
      })
})


route.get('/', async (req, res) => {
  try {
      await productModel(Product);
      res.send(Product);
  } catch (err) {
      res.sendStatus(400);
  }
})*/
route.post('/',upload.single('ProductImage'), async (req, res) => {
  const {ProductName, ProductPrice,Seller,ProductImage} = req.body;
//  const ProductImagepath=req.file.path;
  let product = {};
  product.ProductName = ProductName;
  product.ProductPrice = ProductPrice;
  product.Seller = Seller;
  product.ProductImage= req.file.path;
  let productModel = new Product(product);
  await productModel.save();
  console.log(product);
  res.json(productModel);
});

exports = module.exports = { route }
//module.exports = route;