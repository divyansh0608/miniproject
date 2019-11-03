const express = require('express');
const mongoose = require('mongoose');
const Product = require('../DB/Product');
const route = express.Router();
const path = require('path')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null,path.join(__dirname+'/uploads'));
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
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
route.get('/', function(req, res) {
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

*/
route.get('/productModel', async (req, res) => {
  try {
      const col = await productModel(Product);
      res.send(col.Product);
  } catch (err) {
      res.sendStatus(400);
  }
})
route.post('/productModel',upload.single('ProductImage'), async (req, res) => {
  const { ProductName, ProductPrice,Seller} = req.body;
  const {ProductImage}=req.file.path;
  let product = {};
  product.ProductName = ProductName;
  product.ProductPrice = ProductPrice;
  product.Seller = Seller;
  product.ProductImage= ProductImage;
  let productModel = new Product(product);
  await productModel.save();
  console.log(product);
  res.json(productModel);
});

exports = module.exports = { route }
//module.exports = route;