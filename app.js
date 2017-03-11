//Require NPM Packages
const express = require('express'),
  app = express(),
  mustache = require('mustache-express'),
  pgp = require('pg-promise')(),
  methodOverride = require('method-override'),
  session = require('express-session'),
  bdPars = require('body-parser'),
  morgan = require('morgan');


//configure express and related packages
app.engine('html', mustache());
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.use(methodOverride('__method')); //method override
app.use(morgan('dev')); // Log All Requests
app.use(bdPars.urlencoded({
  extended: false
})); //body parser
app.use(bdPars.json()); //body parser


app.use(session({
  secret: 'challenge_accepted',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
}));

//Controllers
const USERS_ROUTER = require('./controllers/Users');
const SESSIONS_ROUTER = require('./controllers/Sessions');
const HOME_ROUTER = require('./controllers/Home');
const VIDEO_ROUTER = require('./controllers/Video');
const API_ROUTER = require('./controllers/Api');

// Define All Routes
app.use(HOME_ROUTER);
app.use(SESSIONS_ROUTER);
app.use('/Users', USERS_ROUTER);
app.use('/Video', VIDEO_ROUTER);
app.use('/Api', API_ROUTER);

//start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT + '!');
});
