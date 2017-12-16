const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const hddSchema = new Schema({
  brand: String,
  model: String,
  capacity: Number,
  rpm: Number,
  price: Number,
  imagePath: String
}, { collection: 'hdd' });

// create model class
const ModelClass = mongoose.model('hdd', hddSchema);

// export the model
module.exports = ModelClass;