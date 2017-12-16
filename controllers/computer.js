const Computer = require('../models/products/computers/computer');

// create new computer
exports.createComputer = (req, res, next) => {
  // get vars from request
  const name = req.body.name;
  const imagePath = req.body.imagePath;
  const price = req.body.price;
  const parts = req.body.parts;
  // create new computer to save into db
  const computer = new Computer({
    name,
    imagePath,
    price,
    parts
  })
  // save it to db
  computer.save((err) => {
    if(err) { return next(err); }
  });
  // res with saved computer from db
  res.json({
    message: 'new computer added to db!',
    computer
  });
}

// get all computers

exports.getComputers = (req, res, next) => {
  Computer.find({}, (err, Computers) => {
    if (err) {return next(err); }
    res.send(Computers);
  });
}