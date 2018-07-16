const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');

passport.use(
  new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret',
  },
  (jwt_payload, done) => {

    const user = {
      id: 'user1',
      name: 'First User',
      password: '1111'
    };

    return (
      jwt_payload.name === user.name
      && jwt_payload.password === user.password
    )
      ? done(null, user)
      : done(null, false);
  })
);
