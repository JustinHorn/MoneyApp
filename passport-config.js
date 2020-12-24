const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const users = require('./model/users');

const getUserById = (id) => users.find((user) => user.id === id);

function initializePassport(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CONSUMER_KEY,
        clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback',
      },
      function (token, tokenSecret, profile, done) {
        console.log('_________________');
        console.log(profile);
        console.log('_________________');
        if (!getUserById(profile.id)) {
          users.push(profile);
        }

        return done(null, profile);
      }
    )
  );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    done(null, getUserById(id));
  });
}

const passport = require('passport');

initializePassport(passport);

module.exports = passport;
