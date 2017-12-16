const OS = require('../models/software/os');

// OS 

// create OS
exports.createOS = (req, res, next) => {
  // get req vars
  const manufacturer = req.body.manufacturer;
  const platform = req.body.platform;
  const flavor = req.body.flavor;
  const price = req.body.price;
  const imagePath = req.body.imagePath;
  // create new os
  const os = new OS({
    manufacturer,
    platform,
    flavor,
    price,
    imagePath
  });
  // save new os
  os.save((err) => {
    if(err) { return next(err); }
  });
  // res with saved os from db
  res.json({
    message: 'new os added to database',
    os
  });
}

// get all OSs
exports.getOSs = (req, res, next) => {
  OS.find({}, (err, OSs) => {
    if(err) { return next(err); }
    res.send(OSs);
  });
}