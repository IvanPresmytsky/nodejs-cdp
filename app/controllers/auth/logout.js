const passport = require('passport');

const logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

module.exports = logout;
