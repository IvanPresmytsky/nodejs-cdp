const { Router } = require('express');
const {
  googleAuth,
  googleRedirect,
  facebookAuth,
  facebookRedirect,
  login,
  logout,
  twitterAuth,
  twitterRedirect
} = require('../controllers/auth');

const router = Router();

router.post('/login', login);
router.get('/logout', logout);

router.get('/google', googleAuth);
router.get('/google/callback', googleRedirect);

router.get('/facebook', facebookAuth);
router.get('/facebook/callback', facebookRedirect);

router.get('/twitter', twitterAuth);
router.get('/twitter/callback', twitterRedirect);

module.exports = router;
