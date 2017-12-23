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

  // routes for user accounts
  app.get('/', requireAuth, (req, res) => {
    const user = req.user;
    res.send(user);
  });
  app.get('/get/profile', Profile.getProfile);
  app.post('/signin', requireSignin, Authentication.signin);

  app.post('/signup', Authentication.signup);

  // routes for orders -- shopping cart
  app.post('/get/orderdetails', Profile.getCart);
  app.put('/shoppingcart/add', Profile.addToCart);
  app.put('/shoppingcart/remove', Profile.removeFromCart);

  // create COMPUTER package/prebuilt
  app.post('/products/set/computers', Computer.createComputer);
  app.get('/products/get/computers', Computer.getComputers);
  app.post('/products/get/computer', Computer.getComputer);

  // routes for parts -- admin -- create/delete/read raw data

  // GPU
  // create gpu
  app.post('/parts/set/gpu', Parts.createGPU);
  // find all gpus -- currently using 'brand'
  app.get('/parts/get/gpu', Parts.getGPUs);
  app.get('/parts/get/gpulib', Parts.getGPU_library);

  // CPU --
  // create cpu
  app.post('/parts/set/cpu', Parts.createCPU);
  // get all CPU
  app.get('/parts/get/cpu', Parts.getAllCPU);
  app.get('/parts/get/cpulib', Parts.getCPU_Library);

  // VIEW MORE INFO MODAL
  app.post('/products/search', Parts.getSearch);

  // SSD --
  app.post('/parts/ssd', Parts.createSSD);
  app.get('/parts/get/ssd', Parts.getAllSSD);
  //get ssds for prebuilt creator
  app.get('/parts/get/ssdlib', Parts.getSSD_Library);
  // HDD
  // create HDD
  app.post('/parts/set/hdd', Parts.createHDD);
  // get all HDDs
  app.get('/parts/get/hdd', Parts.getHDDs);
  //get HDDs for prebuilt creator
  app.get('/parts/get/hddlib', Parts.getHDD_Library);

  // RAM --
  app.post('/parts/set/ram', Parts.createRAM);
  app.get('/parts/get/ram', Parts.getAllRam);
  //get RAM for prebuilt creator
  app.get('/parts/get/ramlib', Parts.getRam_Library);

  // KEYBOARD --
  app.post('/parts/set/keyboard', Parts.createKeyboard);
  app.get('/parts/get/keyboard', Parts.getAllKeyboards);
  //get keyboard for prebuilt creator
  app.get('/parts/get/keyboardlib', Parts.getKeyboard_Library);

  // MOUSE --
  app.post('/parts/set/mouse', Parts.createMouse);
  app.get('/parts/get/mouse', Parts.getAllMouses);
  //get mouse for prebuilt creator
  app.get('/parts/get/mouselib', Parts.getMouse_Library);

  // CASE --
  // create case
  app.post('/parts/set/case', Parts.createCase);
  // get all cases
  app.get('/parts/get/case', Parts.getAllCases);
  //get case for prebuilt creator
  app.get('/parts/get/caselib', Parts.getCase_Library);

  // FAN --
  // create fan
  app.post('/parts/set/fan', Parts.createFan);
  // get all fans
  app.get('/parts/get/fan', Parts.getFans);
  //get fan for prebuilt creator
  app.get('/parts/get/fanlib', Parts.getFan_Library);

  // OS
  // create OS
  app.post('/software/set/os', Software.createOS);
  //get OSs
  app.get('/software/get/os', Software.getOSs);
};
