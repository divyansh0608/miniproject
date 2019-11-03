const mongoose = require('mongoose');

const user = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  date: { type: Date, default: Date.now}, 
});

module.exports = User = mongoose.model('user', user);