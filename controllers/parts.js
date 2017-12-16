const Gpu = require('../models/gpu');
const Cpu = require('../models/cpu');
const SSD = require('../models/ssd');
const HDD = require('../models/hdd');
const RAM = require('../models/ram');
const Keyboard = require('../models/keyboard');
const Mouse = require('../models/mouse');
const Case = require('../models/case');
const Fan = require('../models/fan');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
exports.createGPU = (req, res, next) => {
  // pull info from request, TODO: make this less imperative...
  const brand = req.body.brand;
  const model = req.body.model;
  const chipset = req.body.chipset;
  const gpuSeries = req.body.gpuSeries;
  const clockSpeed = req.body.clockSpeed;
  const memory = req.body.memory;
  const ports = {};
  ports.hdmi = req.body.hdmi;
  ports.displayPort = req.body.displayPort;
  ports.dvi = req.body.dvi;
  const power = req.body.power;
  const slotWidth= req.body.slotWidth;
  const imagePath = req.body.imagePath;
  // create new gpu using pulled vars
  const gpu = new Gpu({
    brand,
    model,
    chipset,
    gpuSeries,
    clockSpeed,
    memory,
    ports,
    power,
    slotWidth,
    imagePath
  });
  // save gpu
  gpu.save((err) => {
    if(err) { return next(err); }
  });

  res.json({
    message: 'new gpu added to database!',
    gpu
  });

};

exports.findGPU = (req, res, next) => {
  const brand = req.body.gpuBrand;
  Gpu.find({ brand: brand }, (err, GPUs) => {
    if (err) { return next(err); }
    if (GPUs.length > 0) {
      return res.send(GPUs);
    } else {
      return res.send({"message":"No gpus found matching that brand"});
    }
  })
}

// CPUS

exports.createCPU = (req, res, next) => {
  // pull infro from req
  const brand = req.body.brand;  
  const chipset = req.body.chipset;
  const cpuSeries = req.body.cpuSeries;
  const frequency = {};
  frequency.operating = req.body.operating;
  frequency.max = req.body.max;
  const l3Cache = req.body.l3Cache;
  const memory = req.body.memory;
  const socket = req.body.socket;
  const threads = req.body.threads;
  const cores = req.body.cores;
  const pciLanes = req.body.pciLanes;
  const imagePath = req.body.imagePath;
  // create new CPU using vars pulled
  const cpu = new Cpu({
    brand,
    chipset,
    cpuSeries,
    frequency,
    l3Cache,
    memory,
    socket,
    threads,
    cores,
    pciLanes,
    imagePath
  });
  // save new cpu
  cpu.save((err) => {
    if(err) { return next(err); }
  });
  // respond with created cpu from db
  res.json({
    message: 'new cpu added to database!',
    cpu
  });
}

exports.getAllCPU = (req, res, next) => {
  Cpu.find({}, (err, CPUs) => {
    if (err) { return next(err); }
    res.send(CPUs);
  })
}


// SSD

exports.createSSD = (req, res, next) => {
  // pull req info from vars
  const brand = req.body.brand;
  const model = req.body.model;
  const capacity = req.body.capacity;
  const speed = {};
  speed.write = req.body.write;
  speed.read = req.body.read;
  const price = req.body.price;
  const imagePath = req.body.imagePath;
  // create new ssd
  const ssd = new SSD({
    brand,
    model,
    capacity,
    speed,
    price,
    imagePath
  });
  // save new ssd
  ssd.save((err) => {
    if(err) { return next(err);}
  });
  // respond with newly created ssd from db
  res.send({
    message: 'new ssd added to the database!',
    ssd
  });
}


// HDD

// create HDD
exports.createHDD = (req, res, next) => {
  // pull req
  const brand = req.body.brand;
  const model = req.body.model;
  const capacity = req.body.capacity;
  const rpm = req.body.rpm;
  const price = req.body.price;
  const imagePath = req.body.imagePath;
  // create new hdd
  const hdd = new HDD({
    brand,
    model,
    capacity,
    rpm,
    price,
    imagePath
  });
  // save new hdd to db
  hdd.save((err) => {
    if(err) { return next(err); }
  });
  // respond with newly created hdd
  res.send({
    message: 'new hdd added to database!',
    hdd
  });
}
// get all HDD
exports.getHDDs = (req, res, next) => {
  HDD.find({}, (err, HDDs) => {
    if(err) { return next(err); }
    res.send(HDDs);
  });
  
}

// RAM - Memory

exports.createRAM = (req, res, next) => {
  // pull req info
  const brand = req.body.brand;
  const model = req.body.model;
  const series = req.body.series;
  const capacity = req.body.capacity;
  const type = req.body.type;
  const speed = req.body.speed;
  const price = req.body.price;
  const imagePath = req.body.imagePath;
  // create new ram
  const ram = new RAM({
    brand,
    model,
    series,
    capacity,
    type,
    speed,
    price,
    imagePath
  });
  // Save new ram to db
  ram.save((err) => {
    if(err) { return next(err); }
  });
  // respond with newly created ram item from db
  res.send({
    message: 'new ram added to database!',
    ram
  });
}



// KEYBOARD

// create keyboard
exports.createKeyboard = (req, res, next) => {
  // pull req info
  const brand = req.body.brand;
  const model = req.body.model;
  const keySwitch = req.body.keySwitch;
  const backlit = req.body.backlit;
  const color = req.body.color;
  const price = req.body.price;
  const imagePath = req.body.imagePath;
  // create new keeb
  const keyboard = new Keyboard({
    brand,
    model,
    keySwitch,
    backlit,
    color,
    price,
    imagePath
  })
  // save keeb
  keyboard.save((err) => {
    if(err) { return next(err); }
  });
  // respond with newly created keyboard from db
  res.send({
    message: 'new keyboard added to db!',
    keyboard
  });
}


// MOUSE

// create mouse
exports.createMouse = (req, res, next) => {
  // pull req info
  const brand = req.body.brand;
  const model = req.body.model;
  const type = req.body.type;
  const gripStyle = req.body.gripStyle;
  const color = req.body.color;
  const price = req.body.price;
  const imagePath = req.body.imagePath;
  // create new mouse
  const mouse = new Mouse({
    brand,
    model,
    type,
    gripStyle,
    color,
    price,
    imagePath
  });
  // save new mouse
  mouse.save((err) => {
    if(err) { return next(err); }
  });
  // respond with newly created mouse from db
  res.send({
    message: 'new mouse added to db!',
    mouse
  });
}


// CASE

// create case
exports.createCase = (req, res, next) => {
  // pull req info
  const brand = req.body.brand;
  const model = req.body.model;
  const type = req.body.type;
  const caseMat = req.body.caseMat;
  const moboSupport = req.body.moboSupport;
  const color = req.body.color;
  const price = req.body.price;
  const sidePanel = req.body.sidePanel;
  const imagePath = req.body.imagePath;
  const weight = req.body.weight;
  // create new case
  const $case = new Case({
    brand,
    model,
    type,
    caseMat,
    moboSupport,
    color,
    price,
    imagePath,
    sidePanel,
    weight
  });
  // save new case to db
  $case.save((err) => {
    if(err) { return next(err); }
  });
  // respond with new case from db
  res.send({
    message: 'new case added to database!',
    $case
  });
}

// get all cases

exports.getAllCases = (req, res, next) => {
  Case.find({}, (err, Cases) => {
    if(err) { return next(err); }
    res.send(Cases);
  })
}

// FAN

// create fan
exports.createFan = (req, res, next) => {
  // pull var from req
  const brand = req.body.brand;
  const model = req.body.model;
  const type = req.body.type;
  const rpm = req.body.rpm;
  const imagePath = req.body.imagePath;
  // create new fan
  const fan = new Fan({
    brand,
    model,
    type,
    rpm,
    imagePath
  });
  // save newly created fan to db
  fan.save((err) => {
    if(err) { return next(err); }
  });
  // respond with new fan from db
  res.json({
    message: 'new fan added to database',
    fan
  });
}
// get all fans
exports.getFans = (req, res, next) => {
 Fan.find({}, (err, Fans) => {
   if(err) { return next(err); }
   res.send(Fans);
 }) 
}

// search category that was passed through params
exports.getSearch = (req, res, next) => {
  const capFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);
  const category = capFirstLetter(req.body.category);
  const id = req.body.id;

  
  

  eval(category).find({_id:id}, (err, item) => {
    if(err) { return next(err); }
    res.send(item);
  })
}


// exports.getAllCPU = (req, res, next) => {
//   Cpu.find({}, (err, CPUs) => {
//     if (err) { return next(err); }
//     res.send(CPUs);
//   })
// }