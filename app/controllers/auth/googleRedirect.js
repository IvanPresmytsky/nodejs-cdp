const passport = require('passport');
require('../../config/passportGoogleAuthStrategy');

const googleRedirect = (req, res, next) => {
  passport.authenticate('google',
    (err, user, token) => {
      if (err || !user) {
        return res.redirect('/auth');
      }
        
      req.login(user.displayName, { session: false }, err => {
        if (err) res.send(err);          
        res.redirect('/');
        next();
      });
    },    
  )(req, res, next);
};

module.exports = googleRedirect;