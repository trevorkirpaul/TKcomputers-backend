const Computer = require('../models/products/computers/computer');

// create new computer
exports.createComputer = (req, res, next) => {
  // get vars from request
  const name = req.body.name;
  const imagePath = req.body.imagePath;
  const price = req.body.price;
  const description = req.body.description;
  const type = req.body.type;
  const $case = req.body.case;
  const cpu = req.body.cpu;
  const fan = req.body.fan;
  const gpu = req.body.gpu;
  const hdd = req.body.hdd;
  const keyboard = req.body.keyboard;
  const mouse = req.body.mouse;
  const ram = req.body.ram;
  const ssd = req.body.ssd;

  // create new computer to save into db
  const computer = new Computer({
    details: {
      name,
      computerType: type,
      imagePath,
      description,
      price,
    },
    parts: {
      case: $case,
      cpu,
      fan,
      gpu,
      hdd,
      keyboard,
      mouse,
      ram,
      ssd,
    },
  });
  // save it to db
  computer.save(err => {
    if (err) {
      return next(err);
    }
  });
  // res with saved computer from db
  res.json({
    message: 'new computer added to db!',
    computer,
  });
};

// get all computers

exports.getComputers = (req, res, next) => {
  Computer.find({})
    .then(comps => res.send({ items: comps }))
    .catch(next);
};

exports.getComputer = (req, res, next) => {
  const id = req.body.id;
  Computer.findById(id, (err, computer) => {
    if (err) {
      return next(err);
    }
    res.send(computer);
  });
};
