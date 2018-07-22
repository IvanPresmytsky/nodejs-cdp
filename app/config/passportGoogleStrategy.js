const passport = require('passport');
const { OAuth2Strategy } = require('passport-google-oauth');
const { installed } = require('../secret/google_client_secret.js');

const { client_id, client_secret, redirect_uris } = installed;

passport.use(
  new OAuth2Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID || client_id,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || client_secret,
    callbackURL: process.env.GOOGLE_CALLBACK_URL || redirect_uris[1],
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile._json, accessToken);
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});