const passport = require('passport');
require('../../config/passportTwitterStrategy');

const twitterAuth = (req, res, next) => {
  passport.authenticate('twitter')(req, res, next);
};

module.exports = twitterAuth;
