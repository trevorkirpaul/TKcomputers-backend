const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const ROOT_URL = require('./config').ROOT_URL;
const cors = require('cors');

// DB setup
// mongoose.connect('mongodb://localhost:auth/auth');
mongoose.connect(`mongodb://${ROOT_URL}/TKcomputerDB`, { useMongoClient: true });
// app setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
app.use('/images', express.static('images'));
router(app);

// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port', port);
