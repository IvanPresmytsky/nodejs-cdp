const passport = require('passport');
require('../../config/passportFacebookStrategy');

const facebookRedirect = (req, res, next) => {
  passport.authenticate('facebook',
    {
      successRedirect: '/',
      failureRedirect: '/auth',
    },
    (err, user, token) => {
      if (err) res.send(err);

      req.login(user, err => {
        if (err) res.send(err);
        res.redirect('/');
      });
    }
  )(req, res, next);
};

module.exports = facebookRedirect;
