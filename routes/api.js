// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Prayers = require('../models/prayers')

// Routes
Prayers.methods(['get', 'put', 'post', 'delete']);
Prayers.register(router, '/prayers');

// Return Router
module.exports = router;