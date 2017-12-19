const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const Parts = require('./controllers/parts');
const Software = require('./controllers/software');
const Computer = require('./controllers/computer');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
const Profile = require('./controllers/profile');

module.exports = app => {
  // remove item
  app.post('/parts/remove', Parts.removePart);

  // routes for user accounts - still default
  app.get('/', requireAuth, (req, res) => {
    const user = req.user;
    res.send(user);
  });
  app.get('/get/profile', Profile.getProfile);
  app.post('/signin', requireSignin, Authentication.signin);

  app.post('/signup', Authentication.signup);

  // create COMPUTER package/prebuilt
  app.post('/products/set/computers', Computer.createComputer);
  app.get('/products/get/computers', Computer.getComputers);

  // routes for parts -- admin -- create/delete/read raw data

  // GPU
  // create gpu
  app.post('/parts/set/gpu', Parts.createGPU);
  // find all gpus -- currently using 'brand'
  app.get('/parts/get/gpu', Parts.getGPUs);

  // CPU --
  // create cpu
  app.post('/parts/set/cpu', Parts.createCPU);
  // get all CPU
  app.get('/parts/get/cpu', Parts.getAllCPU);

  // VIEW MORE INFO MODAL
  app.post('/products/search', Parts.getSearch);

  // SSD --
  app.post('/parts/ssd', Parts.createSSD);
  app.get('/parts/get/ssd', Parts.getAllSSD);
  // HDD
  // create HDD
  app.post('/parts/set/hdd', Parts.createHDD);
  // get all HDDs
  app.get('/parts/get/hdd', Parts.getHDDs);

  // RAM --
  app.post('/parts/set/ram', Parts.createRAM);
  app.get('/parts/get/ram', Parts.getAllRam);

  // KEYBOARD --
  app.post('/parts/set/keyboard', Parts.createKeyboard);
  app.get('/parts/get/keyboard', Parts.getAllKeyboards);

  // MOUSE --
  app.post('/parts/set/mouse', Parts.createMouse);
  app.get('/parts/get/mouse', Parts.getAllMouses);

  // CASE --
  // create case
  app.post('/parts/set/case', Parts.createCase);
  // get all cases
  app.get('/parts/get/case', Parts.getAllCases);

  // FAN --
  // create fan
  app.post('/parts/set/fan', Parts.createFan);
  // get all fans
  app.get('/parts/get/fan', Parts.getFans);

  // OS
  // create OS
  app.post('/software/set/os', Software.createOS);
  //get OSs
  app.get('/software/get/os', Software.getOSs);
};
