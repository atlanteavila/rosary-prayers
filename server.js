// Dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Mongodb
mongoose.connect('mongodb://localhost/rosary-test');

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

app.listen(3000);
console.log('Api is running!')