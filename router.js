const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const Parts = require('./controllers/parts');
const Software = require('./controllers/software');
const Computer = require('./controllers/computer');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
 


module.exports = (app) => {
  

  // routes for user accounts - still default
  app.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'there' });
  });
  app.post('/signin', requireSignin, Authentication.signin)

  app.post('/signup', Authentication.signup);

  // create COMPUTER package/prebuilt
  app.post('/products/set/computers', Computer.createComputer);
  app.get('/products/get/computers', Computer.getComputers);

  // routes for parts -- admin -- create/delete/read raw data
  
  // GPU
  // create gpu
  app.post('/parts/set/gpu', Parts.createGPU);
  // find all gpus -- currently using 'brand'
  app.post('/findParts/gpu', Parts.findGPU);

  // CPU --
  // create cpu
  app.post('/parts/set/cpu', Parts.createCPU);
  // get all CPU
  app.get('/parts/get/cpu', Parts.getAllCPU);

  // VIEW MORE INFO MODAL
  app.post('/products/search', Parts.getSearch);

  // SSD --
  app.post('/parts/ssd', Parts.createSSD);

  // HDD
  // create HDD
  app.post('/parts/set/hdd', Parts.createHDD);
  // get all HDDs
  app.get('/parts/get/hdd', Parts.getHDDs);

  // RAM --
  app.post('/parts/set/ram', Parts.createRAM);

  // KEYBOARD --
  app.post('/parts/set/keyboard', Parts.createKeyboard);

  // MOUSE --
  app.post('/parts/set/mouse', Parts.createMouse);

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
}