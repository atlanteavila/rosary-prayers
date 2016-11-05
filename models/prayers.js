// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var prayerSchema = new mongoose.Schema({
  title: String,
  link: String,
})

// return model
module.exports = restful.model('Prayers', prayerSchema);