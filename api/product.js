const express = require('express');
const mongoose = require('mongoose');
const Product = require('../DB/Product');
const route = express.Router();
const path = require('path')
const multer = require('multer');

//image storage

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
//image upload
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
//product Get request(Information Retrieval)
route.get('/',function(req,res){
  Product.find({},function(err,products){
    if(err){
      res.send('could not retreive products');
      next();
    }
    res.json(products);
    console.log(products);
  })
})

//Product Post Request (new Entry To mongo database)
route.post('/',upload.single('ProductImage'), async (req, res) => {
  const {ProductName, ProductPrice,Seller} = req.body;
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