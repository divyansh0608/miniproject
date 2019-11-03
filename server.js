const express = require('express')
const connectDB = require('./DB/connection');
const path = require('path')
const app = express();
connectDB();

app.use(express.json({ extended: false }))
app.use(express.urlencoded({extended: true}))
app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/api/userModel', require('./Api/User').route)
app.use('/api/productModel', require('./Api/User').route)

const Port = process.env.Port || 3000;
app.listen(Port, () => console.log('Server started at http://localhost:2678')) 

