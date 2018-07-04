const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');

const db = require('../fakeDB/db');

passport.use(
  new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret',
  },
  (jwt_payload, done) => {

    const user = db.users && db.users[0];

    return (
      jwt_payload.name === user.name
      && jwt_payload.password === user.password
    )
      ? done(null, user)
      : done(null, false);
  })
);
