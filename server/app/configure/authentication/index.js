'use strict';

const session = require('express-session'),
  _ = require('lodash'),
  passport = require('passport'),
  path = require('path'),
  mongoose = require('mongoose');

const MongoStore = require('connect-mongo')(session);
const UserModel = mongoose.model('User');
const ENABLED_AUTH_STRATEGIES = [
  'local',
  // 'twitter',
  // 'facebook',
  // 'google'
];

module.exports = function (app) {

  app.use(session({
    secret: 'Optimus prime is my real dad',
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => UserModel.findById(id, done));

  app.get('/session', (req, res) => {
    if (req.user) res.send({ user: _.omit(req.user.toJSON(), ['salt', 'password']) });
    else res.status(401).send('No authenticated user.');
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.status(200).end();
  });

  ENABLED_AUTH_STRATEGIES.forEach(function (strategyName) {
    require(path.join(__dirname, strategyName))(app);
  });

};
