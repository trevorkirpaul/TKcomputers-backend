const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const fanSchema = new Schema({
  brand: String,
  model: String,
  type: String,
  rpm: Number,
  imagePath: String
}, { collection: 'fan' });

// create model class
const ModelClass = mongoose.model('fan', fanSchema);

// export the model
module.exports = ModelClass;