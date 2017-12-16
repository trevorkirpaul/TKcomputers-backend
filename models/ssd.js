const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const ssdSchema = new Schema({
  brand: String,
  model: String,
  capacity: Number,
  speed: {
    write: Number,
    read: Number
  },
  price: Number  
}, { collection: 'ssd' });

// create model class
const ModelClass = mongoose.model('ssd', ssdSchema);

// export the model
module.exports = ModelClass;