const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

//exports = module.exports = { connectDB }
module.exports = connectDB;
