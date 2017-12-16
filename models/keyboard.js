const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const keyboardSchema = new Schema({
  brand: String,
  model: String,
  keySwitch: String,
  backlit: Boolean,
  color: String,
  price: Number,
  imagePath: String,  
}, { collection: 'keyboard' });

// create model class
const ModelClass = mongoose.model('keyboard', keyboardSchema);

// export the model
module.exports = ModelClass;