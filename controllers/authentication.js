const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

// create token
const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}



// SIGNIN ROUTE

exports.signin = (req, res, next) => {
  // user has already had their e-mail and pw auth'd
  // now we give them a token
  res.send({ token: tokenForUser(req.user) });
}




// SIGNUP ROUTE

exports.signup = (req, res, next) => {
  // pull info from request
  const email = req.body.email;
  const password = req.body.password;
  const admin = req.body.admin; 
  const {firstName, lastName, city, state, street} = req.body;  
  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  // see if a user with given email exists
  User.findOne({ email: email }, (err, existingUser) => {
    // return error
    if (err) { return next(err); }
    // if user with email already exits, return 422 error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is already in use' });
    }
    // If user with email doesn't exist
    const user = new User({
      email: email,
      password: password,
      admin: admin,
      profile: {
        firstName,
        lastName,
        address: {
          city,
          state,
          street
        }
      }
    });
    user.save((err) => {
      if (err) { return next(err); }
    });
    // res.json({ token: tokenForUser(user) });
    res.send(user);
  });
  
};