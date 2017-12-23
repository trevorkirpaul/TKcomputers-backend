const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const orderSchema = new Schema(
  {
    orderDetails: {
      name: String,
      date: String,
      userID: String,
    },
    orderItems: Array,
  },
  { collection: 'order' }
);

// create model class
const ModelClass = mongoose.model('order', orderSchema);

// export the model
module.exports = ModelClass;
