const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const { User, findUserById } = require('./model/users');

function initializePassport(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CONSUMER_KEY,
        clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
        callbackURL: 'http://localhost:4000/auth/google/callback',
      },
      async function (token, tokenSecret, profile, done) {
        if (!(await findUserById(profile.id))) {
          const user = new User({
            id: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
          });
          await user.save();
        }

        const userData = profile;

        return done(null, userData);
      }
    )
  );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    done(null, findUserById(id));
  });
}

const passport = require('passport');

initializePassport(passport);

module.exports = passport;
