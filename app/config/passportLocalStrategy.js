const { Strategy } = require('passport-local');
const passport = require('passport');

const db = require('../fakeDB/db');

passport.use(
  new Strategy({
    usernameField: 'name',
    passwordField: 'password',
  },
  (login, password, cb) => {

    const user = db.users && db.users[0];

    return (login === user.name && password === user.password)
      ? cb(null, user, {message: `User ${user.name} logged in successfully`})
      : cb(null, false, {message: 'Incorrect login or password'});
  })
);
