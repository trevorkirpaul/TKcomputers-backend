const User = require('../models/user');
const Computer = require('../models/products/computers/computer');
const CartItem = require('../models/CartItem');

// get profile details
exports.getProfile = (req, res, next) => {
  const id = req.body.id;
  User.findOne({ id: id }, (err, user) => {
    if (err) {
      return next(err);
    }
    res.send(user);
  });
};

// get shopping cart

exports.getCart = (req, res, next) => {
  const id = req.body.id;
  User.findOne({ _id: id }, 'orders', (err, info) => {
    if (err) {
      return next(err);
    }
    res.send(info.orders.shoppingCart);
  });
};

// ADD ITEM TO CART
exports.addToCart = (req, res, next) => {
  const userID = req.body.userId;
  const productID = req.body.productId;
  const quantity = req.body.itemQuantity;
  const pricePerUnit = req.body.pricePerUnit;

  // FIND CURRENT USER
  User.findOne({ _id: userID }, (err, user) => {
    if (err) {
      return next(err);
    }
    // CREATE NEW CARTITEM, using CartItem model
    const cartItem = new CartItem({
      itemDetails: {
        ID: productID,
        quantity,
        pricePerUnit,
      },
      userDetails: {
        userID,
      },
    });
    cartItem.cartID = cartItem._id;
    // SAVE ITEM TO ARRAY
    user.orders.shoppingCart = [...user.orders.shoppingCart, cartItem];
    user.save(err => {
      if (err) {
        return next(err);
      }
      res.send(user);
    });
  });
};

// REMOVE ITEM FROM CART
exports.removeFromCart = (req, res, next) => {
  const userID = req.body.userID;
  const cartItemID = req.body.cartItemID;

  // FIND CURRENT USER
  User.findOne({ _id: userID }, (err, user) => {
    if (err) {
      return next(err);
    }
    // FILTER ITEM FROM CART ARRAY of OBJECTS
    user.orders.shoppingCart = user.orders.shoppingCart.filter(
      item => item.cartID !== cartItemID
    );
    // SAVE CURRENT USER
    user.save(err => {
      if (err) {
        return next(err);
      }
      res.send(user.orders.shoppingCart);
    });
  });
};
