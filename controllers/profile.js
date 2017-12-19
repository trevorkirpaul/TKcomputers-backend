const User = require('../models/user');

exports.getProfile = (req, res, next) => {
  const id = req.body.id;
  User.findOne({ id: id }, (err, user) => {
    if (err) {
      return next(err);
    }
    res.send(user);
  });
};
