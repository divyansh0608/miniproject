const mongoose = require('mongoose');

const URI ="mongodb+srv://shopper:shoppass@shopdb-iuvtc.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

//exports = module.exports = { connectDB }
module.exports = connectDB;