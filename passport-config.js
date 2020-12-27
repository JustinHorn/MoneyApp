const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const users = require('./model/users');

const getUserById = (id) => users.find((user) => user.id === id);

const jwt = require('jsonwebtoken');

function initializePassport(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CONSUMER_KEY,
        clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
        callbackURL: 'http://localhost:4000/auth/google/callback',
      },
      function (token, tokenSecret, profile, done) {
        if (!getUserById(profile.id)) {
          users.push(profile);
        }

        const userData = {
          user: profile,
          token: token,
        };

        return done(null, userData);
      }
    )
  );
  passport.serializeUser((userData, done) => done(null, userData.user.id));
  passport.deserializeUser((id, done) => {
    done(null, getUserById(id));
  });
}

const passport = require('passport');

initializePassport(passport);

module.exports = passport;
