const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const mouseSchema = new Schema({
  brand: String,
  model: String,
  type: String,
  gripStyle: String,
  color: String,
  price: Number,
  imagePath: String,  
}, { collection: 'mouse' });

// create model class
const ModelClass = mongoose.model('mouse', mouseSchema);

// export the model
module.exports = ModelClass;