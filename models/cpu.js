const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const cpuSchema = new Schema({
  brand: String,
  chipset: String,
  cpuSeries: String,
  frequency: {
    operating: Number,
    max: Number
  },
  l3Cache: Number,
  memory: String,
  socket: String,
  threads: Number,
  cores: Number,
  pciLanes: Number,
  imagePath: String,
}, { collection: 'cpu' });

// create model class
const ModelClass = mongoose.model('cpu', cpuSchema);

// export the model
module.exports = ModelClass;