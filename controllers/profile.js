const User = require('../models/user');

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
  User.findOne({ id: id }, 'orders', (err, info) => {
    if (err) {
      return next(err);
    }
    res.send(info);
  });
};
