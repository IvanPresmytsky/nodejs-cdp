const passport = require('passport');
require('../../config/passportFacebookStrategy');

const facebookAuth = (req, res, next) => {
  passport.authenticate('facebook')(req, res, next);
};

module.exports = facebookAuth;
