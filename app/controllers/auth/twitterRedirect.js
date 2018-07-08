const passport = require('passport');
require('../../config/passportTwitterStrategy');

const twitterRedirect = (req, res, next) => {
  passport.authenticate('twitter',
    (err, user, token) => {
      if (err || !user) {
        return res.redirect('/auth');
      }

      req.login(user.name, err => {
        if (err) res.send(err);              
        res.redirect('/');          
        next();
      });
    },
  )(req, res, next);
};

module.exports = twitterRedirect;
