const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const gpuSchema = new Schema({
  brand: {type: String, default: 'defaultTest'},
  model: String,
  chipset: String,
  gpuSeries: String,
  clockSpeed: Number,
  memory: Number,
  ports: {
    hdmi: Number,
    displayPort: Number,
    dvi: Number,
  },
  power: Number,
  slotWidth: Number,
  imagePath: String,
}, { collection: 'gpu' });

// create model class
const ModelClass = mongoose.model('gpu', gpuSchema);

// export the model
module.exports = ModelClass;