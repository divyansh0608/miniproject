const mongoose = require('mongoose');

const product = new mongoose.Schema({
  ProductName: {
    type: String
  },

  ProductPrice: {
    type: Number
  },
  Seller:{
      type: String
  }
});

module.exports = Product = mongoose.model('product', product);