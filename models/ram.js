const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const ramSchema = new Schema({
  brand: String,
  model: String,
  series: String,
  capacity: Number,
  type: String,
  speed: Number,
  price: Number,
  imagePath: String,  
}, { collection: 'ram' });

// create model class
const ModelClass = mongoose.model('ram', ramSchema);

// export the model
module.exports = ModelClass;