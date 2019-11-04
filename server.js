const express = require('express')
const connectDB = require('./DB/connection');
const path = require('path')
const app = express();
connectDB();

app.use(express.json({ extended: false }))
app.use(express.urlencoded({extended: true}))
app.use('/', express.static(path.join(__dirname, 'public')))

//app.use( express.static(__dirname));
app.use('/Api/userModel', require('./Api/User').route)
app.use('/Api/productModel', require('./Api/Product').route)

const Port = process.env.Port || 3000;
app.listen(Port, () => console.log('Server started at http://localhost:3000')) 

