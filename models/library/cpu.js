const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const cpuLibSchema = new Schema(
  {
    cpuList: String,
  },
  { collection: 'cpuLibrary' }
);

// create model class
const ModelClass = mongoose.model('cpuLib', cpuLibSchema);

// export the model
module.exports = ModelClass;
