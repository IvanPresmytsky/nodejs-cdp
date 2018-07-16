const { Strategy } = require('passport-local');
const passport = require('passport');

passport.use(
  new Strategy({
    usernameField: 'name',
    passwordField: 'password',
  },
  (login, password, cb) => {

    const user = {
      id: 'user1',
      name: 'First User',
      password: '1111'
    };

    return (login === user.name && password === user.password)
      ? cb(null, user, {message: `User ${user.name} logged in successfully`})
      : cb(null, false, {message: 'Incorrect login or password'});
  })
);
