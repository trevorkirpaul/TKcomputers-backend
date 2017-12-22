const User = require('../models/user');
const Computer = require('../models/products/computers/computer');
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

exports.addToCart = (req, res, next) => {
  const userID = req.body.userId;
  const productID = req.body.productId;
  // const productId = req.body.productId;
  Computer.findOne({ _id: productID }, (err, product) => {
    if (err) {
      return next(err);
    }
    User.findOne({ _id: userID }, (err, user) => {
      if (err) {
        return next(err);
      }
      user.orders.shoppingCart = [...user.orders.shoppingCart, product];
      user.save(err => {
        if (err) {
          return next(err);
        }
        res.send(user);
      });
    });
  });
};
