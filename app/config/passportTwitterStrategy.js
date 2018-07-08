const passport = require('passport');
const { Strategy } = require('passport-twitter');
const {
  twitterConsumerKey,
  twitterConsumerSecret,
  twitterCallbackUri,
} = require('../secret/twitter.js');

passport.use(
  new Strategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY || twitterConsumerKey,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET || twitterConsumerSecret,
    callbackURL: process.env.TWITTER_CALLBACK_URI || twitterCallbackUri,
  },
  (token, tokenSecret, profile, done) => {
    return done(null, profile._json, token);
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
