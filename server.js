// import express from 'express';
// import passport from 'passport';

const passport = require('passport');
const express = require('express');
const Cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

const whitelist = [
    'http://localhost:3000',
    'http://localhost:3001',
  ];

const corsOptions = {
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200,
  };

require('./config/passport');

// console.log that your server is up and running
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(Cors(corsOptions));


// create a GET route
require("./routes/apiRoutes")(app)
require('./routes/loginUser')(app);
require('./routes/registerUser')(app);
require('./routes/forgotPassword')(app);
require('./routes/resetPassword')(app);
require('./routes/updatePassword')(app);
require('./routes/updatePasswordViaEmail')(app);
require('./routes/findUsers')(app);
require('./routes/deleteUser')(app);
require('./routes/updateUser')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;