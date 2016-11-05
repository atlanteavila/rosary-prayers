// Dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var env = require('node-env-file');

// Mongodb
var mongodbUri = process.env.DATABASE_URL


mongoose.connect(mongodbUri);

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

app.listen(3000);
console.log('Api is running!')