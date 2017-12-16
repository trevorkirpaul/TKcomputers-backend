const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const caseSchema = new Schema({
  brand: String,
  model: String,
  type: String,
  caseMat: String,
  moboSupport: [],
  color: String,
  price: Number,
  imagePath: String,
  sidePanel: Boolean,
  weight: Number
}, { collection: 'case' });

// create model class
const ModelClass = mongoose.model('case', caseSchema);

// export the model
module.exports = ModelClass;