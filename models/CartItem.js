const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const cartItemSchema = new Schema(
  {
    itemDetails: {
      ID: String,
      quantity: Number,
      pricePerUnit: Number,
    },
    userDetails: {
      userID: String,
    },
  },
  { collection: 'cartItem' }
);

// create model class
const ModelClass = mongoose.model('cartItem', cartItemSchema);

// export the model
module.exports = ModelClass;
