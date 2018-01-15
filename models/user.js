const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
    password: String,
    admin: Boolean,
    firstName: String,
    lastName: String,
    city: String,
    state: String,
    street: String,
    cart: [{ type: Schema.Types.ObjectId, ref: 'cartItem' }],

    orders: {
      complete: Array,
      current: Array,
      shoppingCart: [
        {
          type: Schema.Types.ObjectId,
          ref: 'cartItem',
        },
      ],
    },
  },
  { collection: 'users', usePushEach: true }
);

// on save hook, encrypt password
// before saving a model, run this function
// couldnt use arrow fxn here, at parent lvl
userSchema.pre('save', function(next) {
  // get access to user model
  const user = this;
  // generate a salt, then run callback
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    // hash(encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      // overwrite plaintext password with encrypted
      user.password = hash;
      next();
    });
  });
});

// add method for each user to verify password on local login
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

// Create our model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
