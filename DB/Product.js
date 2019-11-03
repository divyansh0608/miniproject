const mongoose = require('mongoose');

const product = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,

    ProductName: {
    type: String
  },

  ProductPrice: {
    type: Number
  },
  Seller:{
      type: String
  },
  
  ProductImage: { type: String, required: true },
  created_on: { type: Date, default: Date.now}
});

module.exports = Product = mongoose.model('product', product);