const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

function initializePassport(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email);
    if (user == null)
      return done(null, false, { message: 'No user with that email!' });

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Password incorrect' });
      }
    } catch (e) {
      return done(e);
    }
  };
  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    done(null, getUserById(id));
  });
}

const users = require('./model/users');

const passport = require('passport');

initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

module.exports = passport;