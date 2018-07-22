const passport = require('passport');
require('../../config/passportGoogleStrategy');

const googleAuth = (req, res, next) => {
  passport.authenticate('google',
    {
      scope: ['profile'],
    }
  )(req, res, next);
};

module.exports = googleAuth;
