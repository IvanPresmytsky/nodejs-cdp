const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../../config/passportLocalStrategy');

const login = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        code: 400,
        message: 'Not Found',
        data: { user },
      });
    }

    req.login(user, { session: true }, err => {
      if (err) {
        res.send(err);
      }

      const token = jwt.sign(user, 'secret');

      return res.json({
        code: 200,
        message: 'OK',
        data: { user },
        token,
      });
    });

    next();
  })(req, res, next);
};

module.exports = login;
