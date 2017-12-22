const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const computerSchema = new Schema(
  {
    details: {
      name: String,
      price: Number,
      description: String,
      imagePath: String,
      computerType: String,
    },
    parts: {
      case: {
        type: Object,
      },
      cpu: {
        type: Object,
      },
      fan: {
        type: Object,
      },
      gpu: {
        type: Object,
      },
      hdd: {
        type: Object,
      },
      keyboard: {
        type: Object,
      },
      mouse: {
        type: Object,
      },
      ram: {
        type: Object,
      },
      ssd: {
        type: Object,
      },
    },
  },
  { collection: 'computer' }
);

// create model class
const ModelClass = mongoose.model('computer', computerSchema);

// export the model
module.exports = ModelClass;
