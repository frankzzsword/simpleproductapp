// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var app = express();


var mongoose = require('mongoose');
var db_url = 'mongodb+srv://Varun:gaming123@productstutorial-4aeak.gcp.mongodb.net/test?retryWrites=true&w=majority';
var mongoDB = process.env.mongoDB_URI || db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);


let port = 1234;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})