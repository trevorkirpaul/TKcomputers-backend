const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const computerSchema = new Schema({
  name: String,
  imagePath: String,
  price: Number,
  parts: Array
}, { collection: 'computer' });

// create model class
const ModelClass = mongoose.model('computer', computerSchema);

// export the model
module.exports = ModelClass;