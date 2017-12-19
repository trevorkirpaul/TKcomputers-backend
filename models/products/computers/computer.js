const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const computerSchema = new Schema(
  {
    name: String,
    price: Number,
    case: String,
    cpu: String,
    fan: String,
    gpu: String,
    hdd: String,
    keyboard: String,
    mouse: String,
    ram: String,
    ssd: String,
  },
  { collection: 'computer' }
);

// create model class
const ModelClass = mongoose.model('computer', computerSchema);

// export the model
module.exports = ModelClass;
