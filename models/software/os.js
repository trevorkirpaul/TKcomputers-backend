const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const osSchema = new Schema({
  manufacturer: String,
  platform: String,
  flavor: String,
  price: Number,
  imagePath: String
}, { collection: 'os' });

// create model class
const ModelClass = mongoose.model('os', osSchema);

// export the model
module.exports = ModelClass;