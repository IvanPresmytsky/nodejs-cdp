const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../../config/passportJWTStrategy');

const jwtLogin = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        code: 400,
        message: 'Not Found',
        data: { user },
      });
    }

    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }

      return res.json({
        code: 200,
        message: 'OK',
        data: {user},
      });
    });

    next();
  })(req, res, next);
};

module.exports = jwtLogin;
